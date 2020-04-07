# hello-cart

Food Shopping Cart

See original code

https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart

![Node.js CI](https://github.com/agrcrobles/hello-cart/workflows/Node.js%20CI/badge.svg)

## Project setup

vue-cli-service

https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

See `babel.config.js`

### Unit test

```
yarn test:unit
```

See `jest.config.js`

### Lints and fixes files

```
yarn lint
```

See `.eslintrc`

### Files and folders

```
├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
```

### VS Code

Use Default Extensions for the vs code such as:

Syntax Highlight for Vue.js
eslint
prettier

This one maybe? https://github.com/silvenon/vscode-mdx

looks like it works!

### Dev Tools

https://github.com/vuejs/vue-devtools

## Vuetify

Getting source from cli

### mdx

https://github.com/mdx-js/mdx/blob/master/examples/vue/vue.config.js

### Router

See https://router.vuejs.org/guide/#javascript

## Deploy Your Own

Deploy your own Vue.js project with ZEIT Now.

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/zeit/now/tree/master/examples/vue)

_Live Example: https://vue.now-examples.now.sh_

### How We Created This Example

To get started with Vue.js deployed with ZEIT Now, you can use the [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create) to initialize the project:

```shell
$ vue create
```

### Deploying From Your Terminal

You can deploy your new Vue.js project with a single command from your terminal using [Now CLI](https://zeit.co/download):

```shell
$ now
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

https://michaelnthiessen.com/dynamically-add-class-name/
