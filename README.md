# JavaScript Config

I wanted a repo that collects my various JavaScript config files. This repo should **not** be extended/forked/whatever as a baseline. Since I work in several different environments, and with several different tools (especially in the code formatting and testing areas), I need a clearinghouse to grab the appropriate configs for whatever project I'm working on.

At the moment, it's only one set of files. That could change later.

## Current config files

- Prettier
  - .prettierrc.json
  - .prettierignore
- ESLint
  - eslint.config.js
- Other
  - .npmrc: Ensures we're pulling dependencies from the right place
  - .nvmrc: Convenience for those using NVM

### npm dependencies for the above

```
npm install -D eslint @speedingplanet/eslint-config prettier-plugin-jsdoc
```

## TODO

- I have a repo for my eslint configs. Take the code for eslint from here and move it over there so I can keep all that config in one place at one time.
