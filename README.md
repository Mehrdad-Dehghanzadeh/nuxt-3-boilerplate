# Boilerplate With Nuxt 3 + Vuetify 3 + Sass

It is Boilerplate vue 3 + nuxt 3 + vuetify 3 and it supports two language **Persian** and **English**

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Look at the [Vuetify 3](https://vuetifyjs.com/en/) to learn more.

Look at the [Sass](https://sass-lang.com/) to learn more.

## Features {#features}

- Nuxt 3
- Vue 3
- Vuetify 3
- Sass
- Validation libs for form elements
- Snackbar
- Auth Plugin
- Api Plugin
- Persian Date Time Picker
- Utils

## Setup {#setup}

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

after installation, initial husky with this command:

```bash
npm run prepare
```

initial typing for project and extended typing with this command:

```bash
npm run postinstall
```

## Development Server {#development-server}

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production {#production}

Build the application for production:

### Build SSR {#build-ssr}

```bash
npm run build
```

### Build SSG OR Static {#build-ssg}

```bash
npm run generate
```

**tip:** for **Build Static** you must set `ssr: false` in `nuxt.config.ts `

Locally preview production build:

```bash
npm run preview
```

## Clean Up Cache {#clean-cache}

for clean up cache development mode and remove `.nuxt` directory:

```bash
npm run cleanup
```

## Browser List {#browser-list}

| Chrome | FireFox | Edge | Safari | ios  |
| :----: | :-----: | :--: | :----: | :--: |
|  >=90  |  >=88   | >=80 |  >=15  | >=15 |

## Usage Packages {#usage-packages}

- **@nuxtjs/i18n:** for supporting multi language and i18n
- **@pinia/nuxt:** for State management app
- **validator:** for Validations form elements
- **vue3-persian-datetime-picker:** for persian date time picker
- **axios:** library for http request and response to config as api plugin
- **@mdi/font:** font icon for icon apps
- **jwt-decode:** for decoding jwt token in auth process

## Project Directory Structure {#project-directory-structure}

### src {#src-directory}

main directory for project

### i18n {#i18n-directory}

multi language and messages for all languages and config for lazy loading.
It is boilerplate uses `@nuxtjs/i18n` packages

### apis {#apis-directory}

This directory uses for all backend Api endpoints.

### assets {#assets-directory}

This directory uses for assets project such as `styles` and `constance` this boilerplate.

### store {#store-directory}

This directory uses for state management project and we used `pinia` for this boilerplate.

### ts {#ts-directory}

this directory uses for typescript
