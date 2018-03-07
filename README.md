Yet Another Chatter Desktop
===========================

### Unofficial Chatter Desktop App made with Electron

<br/>

## Screenshot

![demo](https://user-images.githubusercontent.com/1001444/37089329-864c3cb0-2243-11e8-94c7-2c25107ada72.gif)

## Install

* **Note: requires a node version >= 7 and an npm version >= 4.**

First, clone the repo via git:

```bash
git clone --depth=1 https://github.com/zaki-yama/chatter-desktop.git
```

And then install dependencies with yarn.

```bash
$ cd chatter-desktop
$ yarn
```
**Note**: If you can't use [yarn](https://github.com/yarnpkg/yarn), run `npm install`.

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ npm run dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ npm run start-renderer-dev
$ npm run start-main-dev
```

## Packaging

To package apps for the local platform:

```bash
$ npm run package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,
```bash
$ npm run package-all
```

To package apps with options:

```bash
$ npm run package -- --[option]
```

To run End-to-End Test

```bash
$ npm run build
$ npm run test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:
```bash
DEBUG_PROD=true npm run package
```


## License
MIT © [Shingo Yamazaki](https://github.com/zaki-yama)
