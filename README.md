# @flexis/srcset

[![NPM version][npm]][npm-url]
[![Node version][node]][node-url]
[![Dependencies status][deps]][deps-url]
[![Build status][build]][build-url]
[![Coverage status][coverage]][coverage-url]
[![Greenkeeper badge][greenkeeper]][greenkeeper-url]

[npm]: https://img.shields.io/npm/v/@flexis/srcset.svg
[npm-url]: https://npmjs.com/package/@flexis/srcset

[node]: https://img.shields.io/node/v/@flexis/srcset.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/TrigenSoftware/flexis-srcset.svg
[deps-url]: https://david-dm.org/TrigenSoftware/flexis-srcset

[build]: http://img.shields.io/travis/com/TrigenSoftware/flexis-srcset.svg
[build-url]: https://travis-ci.com/TrigenSoftware/flexis-srcset

[coverage]: https://img.shields.io/coveralls/TrigenSoftware/flexis-srcset.svg
[coverage-url]: https://coveralls.io/r/TrigenSoftware/flexis-srcset

[greenkeeper]: https://badges.greenkeeper.io/TrigenSoftware/flexis-srcset.svg
[greenkeeper-url]: https://greenkeeper.io/

Highly customizable lib to generating responsive images.

## Install

```bash
npm i -D @flexis/srcset
# or
yarn add -D @flexis/srcset
```

## API

Module exposes next API:

```js
export default SrcsetGenerator;
export {
	ISrsetVinyl,
	isSupportedType,
	attachMetadata,
	matchImage
}
```

[Description of this methods you can find in Documentation.](https://trigensoftware.github.io/flexis-srcset/index.html)
