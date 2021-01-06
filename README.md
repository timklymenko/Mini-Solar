# Note

This repo is very hacked together, sorry, and adapted from another assignment I did so there may be bits/ lots of code that don't seem like they should be there. This is the front-end application and Node.js api in this repo.
There is another repo here: https://github.com/raymo-nd/mini-solar-UNSW, containing the java code that interacts with the BLE devices.

# React Client

Run `yarn` to install/update require packages.```

## Yarn Scripts

- `build`
  - builds production html/js for deployment
- `dev`
  - start a dev instance (watches code)
- `lint`
  - run eslint
- `flow`
  - static type checking
- `test`
  - `lint` && `flow` && `build`
- `deploy`
  - deploy to [gh-pages](https://comp3300-comp9900-term-3-2019.github.io/capstone-project-scrumdaddy-and-the-devs/)

## Git Hooks

**Hooks apply only for master: ensures code on master is correct and only deploys latest working build to gh-pages**

- pre-commit: lint and type check
- pre-push: build and deploy

## Recommended VSCode Extensions

- formulahendry.auto-close-tag
- formulahendry.auto-rename-tag
- dbaeumer.vscode-eslint
- jpoissonnier.vscode-styled-components
- flowtype.flow-for-vscode
