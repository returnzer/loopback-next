---
lang: en
title: 'Creating components'
keywords: LoopBack 4.0, LoopBack 4
tags:
sidebar: lb4_sidebar
permalink: /doc/en/lb4/Creating-components.html
summary:
---

As explained in [Using Components](Using-components.md), a typical LoopBack component is an npm package exporting a Component class.

```ts
import {MyController} from './controllers/my-controller';
import {MyValueProvider} from './providers/my-value-provider';
import {Component} from '@loopback/core';

export class MyComponent implements Component {
  constructor() {
    this.controllers = [MyController];
    this.providers = {
      'my.value': MyValueProvider,
    };
  }
}
```

When a component is mounted to an application, a new instance of the component
class is created and then:

- Each Controller class is registered via `app.controller()`,
- Each Provider is bound to its key in `providers` object.

The example `MyComponent` above will add `MyController` to application's API and
create a new binding `my.value` that will be resolved using `MyValueProvider`.

## Providers

Providers enable components to export values that can be used by the target application or other components. The `Provider` class provides a `value()` function called by [Context](Context.md) when another entity requests a value to be injected.

```ts
import {Provider} from '@loopback/context';

export class MyValueProvider implements Provider<string> {
  value() {
    return 'Hello world';
  }
}
```

### Specifying binding key

Notice that the provider class itself does not specify any binding key, the key
is assigned by the component class.

```ts
import {MyValueProvider} from './providers/my-value-provider';

export class MyComponent implements Component {
  constructor() {
    this.providers = {
      'my-component.my-value': MyValueProvider,
    };
  }
}
```

### Accessing values from Providers

Applications can use `@inject` decorators to access the value of an exported
Provider. If you’re not familiar with decorators in TypeScript, see
[Key Concepts: Decorators](Decorators.md)

```ts
const app = new Application();
app.component(MyComponent);

class MyController {
  constructor(@inject('my-component.my-value') private greeting: string) {}

  @get('/greet')
  greet() {
    return this.greeting;
  }
}
```

{% include note.html title="A note on binding names" content="To avoid name
conflicts, add a unique prefix to your binding key (for example, `my-component.`
in the example above). See [Reserved binding keys](Reserved-binding-keys.md) for
the list of keys reserved for the framework use. " %}

### Asynchronous providers

Provider's `value()` method can be asynchronous too:

```ts
import {Provider} from '@loopback/context';
const request = require('request-promise-native');
const weatherUrl =
  'http://samples.openweathermap.org/data/2.5/weather?appid=b1b15e88fa797225412429c1c50c122a1';

export class CurrentTemperatureProvider implements Provider<number> {
  async value() {
    const data = await request(`${weatherUrl}&q=Prague,CZ`, {json: true});
    return data.main.temp;
  }
}
```

In this case, LoopBack will wait until the promise returned by `value()` is
resolved, and use the resolved value for dependency injection.

### Working with HTTP request/response

In some cases, the Provider may depend on other parts of LoopBack; for example
the current `request` object. The Provider's constructor should list such
dependencies annotated with `@inject` keyword, so that LoopBack runtime can
resolve them automatically.

```ts
import {Provider} from '@loopback/context';
import {RestBindings} from '@loopback/rest';
import {ServerRequest} from 'http';
const uuid = require('uuid/v4');

class CorrelationIdProvider implements Provider<string> {
  constructor(
    @inject(RestBindings.Http.REQUEST) private request: ServerRequest,
  ) {}

  value() {
    return this.request.headers['X-Correlation-Id'] || uuid();
  }
}
```

## Modifying request handling logic

A frequent use case for components is to modify the way requests are handled.
For example, the authentication component needs to verify user credentials
before the actual handler can be invoked; or a logger component needs to record
start time and write a log entry when the request has been handled.

The idiomatic solution has two parts:

1. The component should define and bind a new [Sequence action](Sequence.md#actions), for example `authentication.actions.authenticate`:

   ```ts
   import {Component} from '@loopback/core';

   class AuthenticationComponent implements Component {
     constructor() {
       this.providers = {
         'authentication.actions.authenticate': AuthenticateActionProvider,
       };
     }
   }
   ```

   A sequence action is typically implemented as an `action()` method in the provider.

   ```ts
   class AuthenticateActionProvider implements Provider<AuthenticateFn> {
     // Provider interface
     value() {
       return request => this.action(request);
     }

     // The sequence action
     action(request): UserProfile | undefined {
       // authenticate the user
     }
   }
   ```

   It may be tempting to put action implementation directly inside the anonymous arrow function returned by provider's `value()` method. We consider that as a bad practice though, because when an error occurs, the stack trace will contain only an anonymous function that makes it more difficult to link the entry with the sequence action.

2)  The application should use a custom `Sequence` class which calls this new sequence action in an appropriate place.

````
```ts
class AppSequence implements SequenceHandler {
  constructor(
    @inject(RestBindings.Http.CONTEXT) protected ctx: Context,
    @inject(RestBindings.SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
    @inject(RestBindings.SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
    @inject(RestBindings.SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
    @inject(RestBindings.SequenceActions.SEND) public send: Send,
    @inject(RestBindings.SequenceActions.REJECT) public reject: Reject,
    // Inject the new action here:
    @inject('authentication.actions.authenticate') protected authenticate: AuthenticateFn
  ) {}
```
````

async handle(req: ParsedRequest, res: ServerResponse) {
try {
const route = this.findRoute(req);

```
  // Invoke the new action:
  const user = await this.authenticate(req);

  const args = await parseOperationArgs(req, route);
  const result = await this.invoke(route, args);
  this.send(res, result);
} catch (err) {
  this.reject(res, req, err);
}
```

}
}

````
### Accessing Elements contributed by other Sequence Actions

When writing a custom sequence action, you need to access Elements contributed
by other actions run in the sequence. For example, `authenticate()` action needs
information about the invoked route to decide whether and how to authenticate
the request.

Because all Actions are resolved before the Sequence `handle` function is run,
Elements contributed by Actions are not available for injection yet. To solve
this problem, use `@inject.getter` decorator to obtain a getter function instead
of the actual value. This allows you to defer resolution of your dependency only
until the sequence action contributing this value has already finished.

```ts
export class AuthenticationProvider implements Provider<AuthenticateFn> {
  constructor(
    @inject.getter(BindingKeys.Authentication.STRATEGY)
    readonly getStrategy
  ) {}

  value() {
    return request => this.action(request);
  }

  async action(request): UserProfile | undefined {
    const strategy = await this.getStrategy();
    // ...
  }
}
````

### Contributing Elements from Sequence Actions

Use `@inject.setter` decorator to obtain a setter function that can be used to
contribute new Elements to the request context.

```ts
export class AuthenticationProvider implements Provider<AuthenticateFn> {
  constructor(
    @inject.getter(BindingKeys.Authentication.STRATEGY) readonly getStrategy,
    @inject.setter(BindingKeys.Authentication.CURRENT_USER)
    readonly setCurrentUser,
  ) {}

  value() {
    return request => this.action(request);
  }

  async action(request): UserProfile | undefined {
    const strategy = await this.getStrategy();
    const user = this.setCurrentUser(user); // ... authenticate
    return user;
  }
}
```

## Extending Application with Mixins

When binding a component to an app, you may want to extend the app with the
component's properties and methods by using mixins.

An example of how a mixin leverages a component is `RepositoryMixin`.
Suppose an app has multiple components with repositories bound to each of them.
You can use function `RepositoryMixin()` to mount those repositories to application level context.

The following snippet is an abbreviated function
[`RepositoryMixin`](https://github.com/strongloop/loopback-next/blob/master/packages/repository/src/repository-mixin.ts):

{% include code-caption.html content="mixins/src/repository-mixin.ts" %}

```ts
export function RepositoryMixin<T extends Class<any>>(superClass: T) {
  return class extends superClass {
    constructor(...args: any[]) {
      super(...args);
    }
  }

  /**
     * Add a component to this application. Also mounts
     * all the components' repositories.
     */
  public component(component: Class<any>) {
    super.component(component);
    this.mountComponentRepository(component);
  }

  mountComponentRepository(component: Class<any>) {
    const componentKey = `components.${component.name}`;
    const compInstance = this.getSync(componentKey);

    // register a component's repositories in the app
    if (compInstance.repositories) {
      for (const repo of compInstance.repositories) {
        this.repository(repo);
      }
    }
  }
}
```

Then you can extend the app with repositories in a component:

{% include code-caption.html content="index.ts" %}

```ts
import {RepositoryMixin} from 'mixins/src/repository-mixin';
import {Application} from '@loopback/core';
import {FooComponent} from 'components/src/Foo';

class AppWithRepoMixin extends RepositoryMixin(Application) {}
let app = new AppWithRepoMixin();
app.component(FooComponent);

// `app.find` returns all repositories in FooComponent
app.find('repositories.*');
```

## Configuring components

More often than not, the component may want to offer different value providers
depending on the configuration. For example, a component providing an email API
may offer different transports (stub, SMTP, and so on).

Components should use constructor-level
[Dependency Injection](Context.md#dependency-injection) to receive the
configuration from the application.

```ts
class EmailComponent {
  constructor(@inject('config#components.email') config) {
    this.providers = {
      sendEmail:
        this.config.transport == 'stub'
          ? StubTransportProvider
          : SmtpTransportProvider,
    };
  }
}
```
