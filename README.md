# laguerredelanneau

## Requirements

* NodeJs
  * \> 10.15.0    (@typegoose/typegoose)
  * < 16          (fibers -> sass-loader)
* npm
  * \> 6          (class-validator -> type-graphql)

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

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Detail

### Nuxt

* **nuxt** is a framework for server-side web apps using **Vue.js**.
* **nuxt-property-decorator** is a library that adds decorators, to use **TypeScript** classes as **Vue** components.

### Web Server

* **express** is a simple web server.
* **body-parser** is an **express** middleware that parses JSON for POST requests.
* **cors** is an **express** middleware that adds CORS headers to HTTP responses.
* **helmet** is an **express** middleware that sets some HTTP headers for better security.

### GraphQL

* **type-graphql** is library that adds decorators, to use **TypeScript** classes to generate **GraphQL** models.
* **class-validator** is a library required by **type-graphql**.
* **graphql** is a library that handles the **GraphQL** queries.

### Database

* **mongodb** is a driver for Node.js for **MongoDB** databases.
* **mongoose** is a **MongoDB** object modeling tool (ORM).
* **@typegoose/typegoose** defines **mongoose** models using **TypeScript** classes  and decorators.
* **reflect-metadata** is required by **@typegoose/typegoose** to get the type of variables used in decorators.
* **express-graphql** is an **express** middleware that adds support for **GraphQL**.

### SCSS

* **sass** is a library that generates css files based on **SASS** or **SCSS** files.
* **sass-loader** is a library that adds support for **sass** to **Nuxt**.

## Example

* [type-graphql + typegoose](https://github.com/MichalLytek/type-graphql/tree/master/examples/typegoose)
