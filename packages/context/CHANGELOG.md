# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.5.0"></a>
# [0.5.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.4.0...@loopback/context@0.5.0) (2018-03-29)


### Bug Fixes

* **context:** disable deep clone of injection metadata ([7d8a84c](https://github.com/strongloop/loopback-next/commit/7d8a84c))


### BREAKING CHANGES

* **context:** the `metadata` parameter of `@inject` is no longer
cloned deeply. It's still cloned shallowly.




<a name="0.4.0"></a>
# [0.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.3.0...@loopback/context@0.4.0) (2018-03-23)


### Features

* **context:** add optional typing for Binding ([3c494fa](https://github.com/strongloop/loopback-next/commit/3c494fa))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.4...@loopback/context@0.3.0) (2018-03-21)




**Note:** Version bump only for package @loopback/context

<a name="0.2.4"></a>
## [0.2.4](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.3...@loopback/context@0.2.4) (2018-03-14)




**Note:** Version bump only for package @loopback/context

<a name="0.2.3"></a>
## [0.2.3](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.2...@loopback/context@0.2.3) (2018-03-13)




**Note:** Version bump only for package @loopback/context

<a name="0.2.2"></a>
## [0.2.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.1...@loopback/context@0.2.2) (2018-03-08)




**Note:** Version bump only for package @loopback/context

<a name="0.2.1"></a>
## [0.2.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.2.0...@loopback/context@0.2.1) (2018-03-06)


### Bug Fixes

* fix typo of `additional` ([2fd7610](https://github.com/strongloop/loopback-next/commit/2fd7610))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.1.2...@loopback/context@0.2.0) (2018-03-01)




**Note:** Version bump only for package @loopback/context

<a name="0.1.2"></a>
## [0.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.1.1...@loopback/context@0.1.2) (2018-03-01)


### Features

* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217d))
* **context:** allow context.find by a filter function ([9b1e26c](https://github.com/strongloop/loopback-next/commit/9b1e26c))
* **context:** use Readonly to guard immutable values ([871ddef](https://github.com/strongloop/loopback-next/commit/871ddef))


### BREAKING CHANGES

* **context:** `ctx.get()` and `ctx.getSync()` require a type now.
See the example below for upgrade instructions:

```diff
- const c: MyController = await ctx.get('MyController');
+ const c = await ctx.get<MyController>('MyController');
```

`isPromise` was renamed to `isPromiseLike` and acts as a type guard
for `PromiseLike`, not `Promise`.  When upgrading affected code, you
need to determine whether the code was accepting any Promise
implementation (i.e. `PromiseLike`) or only native Promises. In the
former case, you should use `isPromiseLike` and potentially convert the
userland Promise instance to a native Promise via
`Promise.resolve(promiseLike)`. In the latter case, you can replace
`isPromise(p)` with `p instanceof Promise`.




<a name="0.1.1"></a>
## [0.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/context@0.1.0...@loopback/context@0.1.1) (2018-02-23)


### Bug Fixes

* **context:** fix optional param injection for methods ([801a82d](https://github.com/strongloop/loopback-next/commit/801a82d))




<a name="0.1.0"></a>
# [0.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.32...@loopback/context@0.1.0) (2018-02-21)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.32"></a>
# [4.0.0-alpha.32](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.31...@loopback/context@4.0.0-alpha.32) (2018-02-15)


### Features

* **context:** formalize injection metadata as an interface ([7ffc1e5](https://github.com/strongloop/loopback-next/commit/7ffc1e5))




<a name="4.0.0-alpha.31"></a>
# [4.0.0-alpha.31](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.30...@loopback/context@4.0.0-alpha.31) (2018-02-07)


### Bug Fixes

* **build:** fix tslint config and slipped violations ([22f8e05](https://github.com/strongloop/loopback-next/commit/22f8e05))
* **context:** address review comments ([3925296](https://github.com/strongloop/loopback-next/commit/3925296))
* **context:** pass metadata to `[@inject](https://github.com/inject).tag` ([27e26e9](https://github.com/strongloop/loopback-next/commit/27e26e9))


### build

* drop dist6 related targets ([#945](https://github.com/strongloop/loopback-next/issues/945)) ([a2368ce](https://github.com/strongloop/loopback-next/commit/a2368ce))


### Features

* **context:** add [@inject](https://github.com/inject).context for context injection ([6e0deaf](https://github.com/strongloop/loopback-next/commit/6e0deaf))
* **context:** add decorator & optional attrs to injection metadata ([3a1c7de](https://github.com/strongloop/loopback-next/commit/3a1c7de))
* **context:** add name to context ([21e1daf](https://github.com/strongloop/loopback-next/commit/21e1daf))
* **context:** add unbind() to allow remove bindings by key ([b9c3893](https://github.com/strongloop/loopback-next/commit/b9c3893))
* **context:** enhance binding caching to be context aware ([7b7eb30](https://github.com/strongloop/loopback-next/commit/7b7eb30))
* **context:** reports the resolution path for circular deps ([bc4ce20](https://github.com/strongloop/loopback-next/commit/bc4ce20))


### BREAKING CHANGES

* Support for Node.js version lower than 8.0 has been dropped.
Please upgrade to the latest Node.js 8.x LTS version.

Co-Authored-by: Taranveer Virk <taranveer@virk.cc>




<a name="4.0.0-alpha.30"></a>
# [4.0.0-alpha.30](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.29...@loopback/context@4.0.0-alpha.30) (2018-02-04)


### Bug Fixes

* remove console output from tests ([ff4a320](https://github.com/strongloop/loopback-next/commit/ff4a320))




<a name="4.0.0-alpha.29"></a>
# [4.0.0-alpha.29](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.28...@loopback/context@4.0.0-alpha.29) (2018-01-30)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.28"></a>
# [4.0.0-alpha.28](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.27...@loopback/context@4.0.0-alpha.28) (2018-01-29)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.27"></a>
# [4.0.0-alpha.27](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.26...@loopback/context@4.0.0-alpha.27) (2018-01-26)


### Bug Fixes

* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d869))




<a name="4.0.0-alpha.26"></a>
# [4.0.0-alpha.26](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.25...@loopback/context@4.0.0-alpha.26) (2018-01-19)


### Bug Fixes

* address review comments ([76d3ec3](https://github.com/strongloop/loopback-next/commit/76d3ec3))
* **context:** add resolution-session.ts for api docs ([25a9e91](https://github.com/strongloop/loopback-next/commit/25a9e91))
* **context:** allow session to be passed into [@inject](https://github.com/inject).getter ([0517ea1](https://github.com/strongloop/loopback-next/commit/0517ea1))
* **context:** clean up the circular dependency tests ([5c35ccd](https://github.com/strongloop/loopback-next/commit/5c35ccd))
* **context:** fix the test to avoid UnhandledPromiseRejectionWarning ([6a82c4d](https://github.com/strongloop/loopback-next/commit/6a82c4d))
* make sure TS compiler infer undefined ([4c48ece](https://github.com/strongloop/loopback-next/commit/4c48ece))
* propagate errors via promises ([204c1b7](https://github.com/strongloop/loopback-next/commit/204c1b7))
* use version range for [@types](https://github.com/types)/debug ([3adbc0b](https://github.com/strongloop/loopback-next/commit/3adbc0b))


### Features

* **context:** add [@inject](https://github.com/inject).tag to allow injection by a tag ([fc8f260](https://github.com/strongloop/loopback-next/commit/fc8f260))
* **context:** add more debug statements ([38eab3e](https://github.com/strongloop/loopback-next/commit/38eab3e))
* **context:** enable detection of circular dependencies ([72b4190](https://github.com/strongloop/loopback-next/commit/72b4190))
* **context:** forbid bind().to() a Promise instance ([#854](https://github.com/strongloop/loopback-next/issues/854)) ([85ffa8b](https://github.com/strongloop/loopback-next/commit/85ffa8b))
* **context:** track injections with ResolutionSession ([cd4848e](https://github.com/strongloop/loopback-next/commit/cd4848e))
* **context:** use one stack to track bindings and injections ([b2f7eda](https://github.com/strongloop/loopback-next/commit/b2f7eda))


### BREAKING CHANGES

* **context:** It is no longer possible to pass a promise instance
to `.to()` method of a Binding. Use `.toDynamicValue()` instead.
Consider deferring the async computation (that produced the promise
instance you are binding) into the dynamic value getter function,
i.e. start the async computation only from the getter function.

An example diff showing how to upgrade your existing code:

-    ctx.bind('bar').to(Promise.resolve('BAR'));
+    ctx.bind('bar').toDynamicValue(() => Promise.resolve('BAR'));




<a name="4.0.0-alpha.25"></a>
# [4.0.0-alpha.25](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.24...@loopback/context@4.0.0-alpha.25) (2018-01-11)


### Bug Fixes

* resolve injected arguments ([#821](https://github.com/strongloop/loopback-next/issues/821)) ([ca9e4dd](https://github.com/strongloop/loopback-next/commit/ca9e4dd))


### Features

* **context:** export function to build binding key with path ([fd804a5](https://github.com/strongloop/loopback-next/commit/fd804a5))


### Reverts

* revert error message ([#823](https://github.com/strongloop/loopback-next/issues/823)) ([f83c502](https://github.com/strongloop/loopback-next/commit/f83c502))




<a name="4.0.0-alpha.24"></a>
# [4.0.0-alpha.24](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.23...@loopback/context@4.0.0-alpha.24) (2017-12-21)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.23"></a>
# [4.0.0-alpha.23](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.22...@loopback/context@4.0.0-alpha.23) (2017-12-15)


### Bug Fixes

* Improve test coverage for metadata inspector ([3b4b552](https://github.com/strongloop/loopback-next/commit/3b4b552))


### Features

* **context:** Add decorator factories ([f517570](https://github.com/strongloop/loopback-next/commit/f517570))
* Add metadata inspector ([c683019](https://github.com/strongloop/loopback-next/commit/c683019))
* Use decorator factories ([88ebd21](https://github.com/strongloop/loopback-next/commit/88ebd21))




<a name="4.0.0-alpha.22"></a>
# [4.0.0-alpha.22](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.21...@loopback/context@4.0.0-alpha.22) (2017-12-11)


### Bug Fixes

* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback-next/commit/0316f28))




<a name="4.0.0-alpha.21"></a>
# [4.0.0-alpha.21](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.20...@loopback/context@4.0.0-alpha.21) (2017-11-29)


### Features

* **context:** Allow patterns to be RegExp ([991cf38](https://github.com/strongloop/loopback-next/commit/991cf38))




<a name="4.0.0-alpha.20"></a>
# [4.0.0-alpha.20](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.19...@loopback/context@4.0.0-alpha.20) (2017-11-14)


### Features

* **context:** Add support for method dependency injection ([df1c879](https://github.com/strongloop/loopback-next/commit/df1c879))




<a name="4.0.0-alpha.19"></a>
# [4.0.0-alpha.19](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.18...@loopback/context@4.0.0-alpha.19) (2017-11-09)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.18"></a>
# [4.0.0-alpha.18](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.17...@loopback/context@4.0.0-alpha.18) (2017-11-06)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.17"></a>
# [4.0.0-alpha.17](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.16...@loopback/context@4.0.0-alpha.17) (2017-10-31)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.16"></a>
# [4.0.0-alpha.16](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.15...@loopback/context@4.0.0-alpha.16) (2017-10-31)




**Note:** Version bump only for package @loopback/context

<a name="4.0.0-alpha.15"></a>
# [4.0.0-alpha.15](https://github.com/strongloop/loopback-next/compare/@loopback/context@4.0.0-alpha.12...@loopback/context@4.0.0-alpha.15) (2017-10-25)


### Bug Fixes

* **context:** inject nested properties ([#587](https://github.com/strongloop/loopback-next/issues/587)) ([d53fc57](https://github.com/strongloop/loopback-next/commit/d53fc57))


### Features

* **context:** Add isBound() and more apidocs to Context ([39932be](https://github.com/strongloop/loopback-next/commit/39932be))
* **context:** Add toJSON() for Context & Binding ([b6ce426](https://github.com/strongloop/loopback-next/commit/b6ce426))
