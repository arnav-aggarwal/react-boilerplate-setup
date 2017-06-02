# react-boilerplate-setup

Run:

```
npm i react react-dom express

npm i -D autoprefixer babel-core babel-loader babel-preset-latest babel-preset-react css-loader less less-loader postcss-loader raw-loader style-loader webpack
```

To the beginning of npm scripts, add:
```
    "start": "node server.js --inspect",
    "start-watch": "nodemon server.js --inspect",
    "dev": "webpack -d --watch",
    "prod": "webpack -p",
```
