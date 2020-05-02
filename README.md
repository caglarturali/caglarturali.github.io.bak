[![Build Status](https://travis-ci.org/caglarturali/caglarturali.github.io.svg?branch=master)](https://travis-ci.org/caglarturali/caglarturali.github.io)

## What's this?

[VS Code](https://code.visualstudio.com/) / [Atom One Dark](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark) inspired developer portfolio app. :blush:

### Screenshot

![](../gh-files/screenshots/demo.gif)

## How to ...

### ... run locally?

Make sure you have [Node](https://nodejs.org/en/) and [git](https://git-scm.com/) installed.

- Clone the repo:

  ```bash
  git clone https://github.com/caglarturali/caglarturali.git portfolio-app
  cd portfolio-app
  ```

- Install the dependencies:

  ```bash
  npm install
  ```

- Fire up a development server:

  ```bash
  npm start
  ```

### ... make it your own?

- Customize the data files located in the [src/data](src/data/) directory.

- To build for production, run:

  ```bash
  npm run build
  ```

- It's not required but I'd appreciate if you credit me. :innocent:

**Note:** If you'd like to use more Font Awesome icons than already in use, you first need to import them in [icons.ts](src/theme/icons.ts#L3), as stated [here](https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently).

#### Credits

- Implements [typed.js](https://github.com/mattboldt/typed.js/) by [@mattboldt](https://github.com/mattboldt)
