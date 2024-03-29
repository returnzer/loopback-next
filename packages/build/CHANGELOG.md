# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.4.0"></a>
# [0.4.0](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.3.3...@loopback/build@0.4.0) (2018-03-29)




**Note:** Version bump only for package @loopback/build

<a name="0.3.3"></a>
## [0.3.3](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.3.2...@loopback/build@0.3.3) (2018-03-23)


### Bug Fixes

* **build:** fix select-dist script ([e91e810](https://github.com/strongloop/loopback-next/commit/e91e810))
* use rimraf to remove files with glob patterns ([50d847c](https://github.com/strongloop/loopback-next/commit/50d847c))
* **build:** use variable names to reflect the accepted args ([c9350b9](https://github.com/strongloop/loopback-next/commit/c9350b9))




<a name="0.3.2"></a>
## [0.3.2](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.3.1...@loopback/build@0.3.2) (2018-03-14)




**Note:** Version bump only for package @loopback/build

<a name="0.3.1"></a>
## [0.3.1](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.3.0...@loopback/build@0.3.1) (2018-03-13)


### Bug Fixes

* **build:** use options for `run` and disable stdout for tests ([0065eab](https://github.com/strongloop/loopback-next/commit/0065eab))




<a name="0.3.0"></a>
# [0.3.0](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.2.0...@loopback/build@0.3.0) (2018-03-08)


### Bug Fixes

* clean up the app run test ([c0d3731](https://github.com/strongloop/loopback-next/commit/c0d3731))


### Features

* **build:** use options to control cli/shell run ([c4e8bce](https://github.com/strongloop/loopback-next/commit/c4e8bce))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.1.2...@loopback/build@0.2.0) (2018-03-01)




**Note:** Version bump only for package @loopback/build

<a name="0.1.2"></a>
## [0.1.2](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.1.1...@loopback/build@0.1.2) (2018-03-01)


### Features

* **context:** add type as a generic parameter to `ctx.get()` and friends ([24b217d](https://github.com/strongloop/loopback-next/commit/24b217d))


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
## [0.1.1](https://github.com/strongloop/loopback-next/compare/@loopback/build@0.1.0...@loopback/build@0.1.1) (2018-02-23)




**Note:** Version bump only for package @loopback/build

<a name="0.1.0"></a>
# [0.1.0](https://github.com/strongloop/loopback-next/compare/@loopback/build@4.0.0-alpha.13...@loopback/build@0.1.0) (2018-02-21)




**Note:** Version bump only for package @loopback/build

<a name="4.0.0-alpha.13"></a>
# [4.0.0-alpha.13](https://github.com/strongloop/loopback-next/compare/@loopback/build@4.0.0-alpha.12...@loopback/build@4.0.0-alpha.13) (2018-02-04)




**Note:** Version bump only for package @loopback/build

<a name="4.0.0-alpha.12"></a>
# [4.0.0-alpha.12](https://github.com/strongloop/loopback-next/compare/@loopback/build@4.0.0-alpha.11...@loopback/build@4.0.0-alpha.12) (2018-01-30)


### Bug Fixes

* **build:** upgrade to strong-docs@1.7.1 ([fd02e1b](https://github.com/strongloop/loopback-next/commit/fd02e1b))




<a name="4.0.0-alpha.11"></a>
# [4.0.0-alpha.11](https://github.com/strongloop/loopback-next/compare/@loopback/build@4.0.0-alpha.10...@loopback/build@4.0.0-alpha.11) (2018-01-29)


### Bug Fixes

* remove typedoc/node_modules/.bin from local typescript dep ([877d6a5](https://github.com/strongloop/loopback-next/commit/877d6a5))




<a name="4.0.0-alpha.10"></a>
# [4.0.0-alpha.10](https://github.com/strongloop/loopback-next/compare/@loopback/build@4.0.0-alpha.9...@loopback/build@4.0.0-alpha.10) (2018-01-26)


### Bug Fixes

* apply source-maps to test errors ([76a7f56](https://github.com/strongloop/loopback-next/commit/76a7f56)), closes [#602](https://github.com/strongloop/loopback-next/issues/602)
* make mocha self-contained with the source map support ([7c6d869](https://github.com/strongloop/loopback-next/commit/7c6d869))




<a name="4.0.0-alpha.9"></a>
# [4.0.0-alpha.9](https://github.com/strongloop/loopback-next/compare/@loopback/build@4.0.0-alpha.8...@loopback/build@4.0.0-alpha.9) (2018-01-19)


### Bug Fixes

* **build:** move no-unused-variables to tslint.build.json ([15dd2db](https://github.com/strongloop/loopback-next/commit/15dd2db))




<a name="4.0.0-alpha.8"></a>
# [4.0.0-alpha.8](https://github.com/strongloop/loopback-next/compare/@loopback/build@4.0.0-alpha.7...@loopback/build@4.0.0-alpha.8) (2018-01-11)


### Bug Fixes

* fix build break and upgrade dependencies ([917da5d](https://github.com/strongloop/loopback-next/commit/917da5d))
* update git repo url ([444f06b](https://github.com/strongloop/loopback-next/commit/444f06b))




<a name="4.0.0-alpha.7"></a>
# [4.0.0-alpha.7](https://github.com/strongloop/loopback4-build/compare/@loopback/build@4.0.0-alpha.6...@loopback/build@4.0.0-alpha.7) (2017-12-11)


### Bug Fixes

* Fix node module names in source code headers ([0316f28](https://github.com/strongloop/loopback4-build/commit/0316f28))




<a name="4.0.0-alpha.6"></a>
# [4.0.0-alpha.6](https://github.com/strongloop/loopback4-build/compare/@loopback/build@4.0.0-alpha.5...@loopback/build@4.0.0-alpha.6) (2017-11-29)




**Note:** Version bump only for package @loopback/build

<a name="4.0.0-alpha.5"></a>
# [4.0.0-alpha.5](https://github.com/strongloop/loopback4-build/compare/@loopback/build@4.0.0-alpha.4...@loopback/build@4.0.0-alpha.5) (2017-11-09)




**Note:** Version bump only for package @loopback/build

<a name="4.0.0-alpha.4"></a>
# [4.0.0-alpha.4](https://github.com/strongloop/loopback4-build/compare/@loopback/build@4.0.0-alpha.3...@loopback/build@4.0.0-alpha.4) (2017-11-06)




**Note:** Version bump only for package @loopback/build

<a name="4.0.0-alpha.3"></a>
# [4.0.0-alpha.3](https://github.com/strongloop/loopback4-build/compare/@loopback/build@4.0.0-alpha.2...@loopback/build@4.0.0-alpha.3) (2017-10-31)




**Note:** Version bump only for package @loopback/build

<a name="4.0.0-alpha.2"></a>
# 4.0.0-alpha.2 (2017-10-31)


### Features

* Add build scripts as a separate package ([6eacee7](https://github.com/strongloop/loopback4-build/commit/6eacee7))
