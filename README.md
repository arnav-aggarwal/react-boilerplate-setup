# react-boilerplate-setup

## Setup your own React, Webpack, Less, Autoprefixer Express app with no configuration

Into directory, copy over:

`dist`, `src`, `.babelrc`, `.gitignore`, `postcss.config.js`, `server.js`, `webpack.config.js`

Run `npm init`. For prompted values, enter whatever you like.

From npm scripts in `package.json`, remove the `start` script and the comma at the end of the `test` script. To the beginning of npm scripts, add:
```
    "start": "node server.js --inspect",
    "start-watch": "nodemon server.js --inspect",
    "dev": "webpack -d --watch",
    "prod": "webpack -p",
```

Run:

```
npm i react react-dom express

npm i -D autoprefixer babel-core babel-loader babel-preset-latest babel-preset-react css-loader less less-loader postcss-loader raw-loader style-loader webpack
```

To start developing, in separate terminals, run:

```
npm run start
npm run dev
```

Go to [localhost: 8080](http://localhost:8080/)

To bundle for production, run `npm run prod`.

That's it!
