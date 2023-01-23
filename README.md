# JavaScript Config

I wanted a repo that collects my various JavaScript config files. This repo should **not** be extended/forked/whatever as a baseline. Since I work in several different environments, and with several different tools (especially in the code formatting and testing areas), I need a clearinghouse to grab the appropriate configs for whatever project I'm working on.

At the moment, it's only one set of files. That could change later.

## Current config files

Make these part of any repo I use:

- students-eslintrc.js (as .eslintrc.js)
- .prettierrc.js
- babel.config.js

### npm dependencies for the above

```
@babel/core @babel/eslint-parser @babel/eslint-plugin @babel/preset-env eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise prettier
```

## TODO

- I have a repo for my eslint configs. Take the code for eslint from here and move it over there so I can keep all that config in one place at one time.
