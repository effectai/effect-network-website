# [Effect Network Website](https://effect.network)

This repo contains the source code for the Effect Network website. The website is built using [Nuxt.js](https://nuxtjs.org/).

## Development

The node version needed for this project is **V12.X.Y**.
[NVM](https://github.com/nvm-sh/nvm) can be used to set the correct Node version.
A `.nvmrc` file is included in the project to make this easier.
Just run the following command in the root of the project to set the correct Node version:

```bash
nvm use
```

Docker is also provided to run the project locally. To run the project with Docker, run the following command in the root of the project:

```bash
docker-compose up
```

The website will be available at [http://localhost:3000](http://localhost:3000).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For a detailed explanation of how things work, check out [Nuxt.js docs](https://nuxtjs.org).
