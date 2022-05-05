# Init app

## 1) Yarn init

```
yarn init
```

## 2) Git init

```
git init .
```

## 3) Add Folders and files

```
mkdir public
mkdir src
touch index.js
cd public && touch index.html
```

## 4) Add webpack && HTML helper

```
yarn add -D webpack webpack-cli webpack-dev-server
touch webpack.config.js
yarn add -D path html-webpack-plugin

```

## 5) Add React and React DOM

```
yarn add react react-dom
```

## 6) Add Babel

```
yarn add -D @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader
touch .babelrc

```

## 7) Add styles lib to use images

```
yarn add -D style-loader css-loader sass-loader node-sass image-webpack-loader
```

## 8) Add lib to work with files and classes

```
yarn add -D file-loader @babel/plugin-proposal-class-properties
```

## 9) Add typescript

```
yarn add typescript
yarn add -D @types/react @types/react-dom
```

## 10) Add babel ts preset and ts-loader

```
yarn add -D @babel/preset-typescript
yarn add -D ts-loader
touch tsconfig.json
```
