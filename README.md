## What's this?

[VS Code](https://code.visualstudio.com/) / [Atom One Dark](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark) inspired developer portfolio app. Under active development. :blush:

### Screenshot

![](../gh-files/screenshots/demo.gif)

## How to;

### ... run locally?

Make sure you have [Node](https://nodejs.org/en/) and [git](https://git-scm.com/) installed.

- Clone the repo:

  ```bash
  git clone https://github.com/caglarturali/caglarturali.github.io.git
  cd caglarturali.github.io
  ```

- Install dependencies:

  ```bash
  npm install
  ```

- Fire up a development server:

  ```bash
  npm run dev-server
  ```

### ... make it your own?

- Customize the data files located in the [src/data](../blob/master/src/data/) directory.

- To build for production, run:

  ```bash
  npm run build:prod
  ```

- Regenerate index.html to reflect updated [metadata](../blob/master/src/data/metadata.json).

  ```bash
  npm run build:html
  ```

- It's not required but I'd appreciate if you credit me. :innocent:

**Note:** If you'd like to use more Font Awesome icons than already in use, you need to import them in [Main.js](../blob/master/src/components/Main.js#L7), as stated [here](https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently).

#### Credits

- Implements [typed.js](https://github.com/mattboldt/typed.js/) by [@mattboldt](https://github.com/mattboldt)
