# React + Typescript + Webpack + Babel + Eslint 템플릿
해당 템플릿은 CRA 형태와 유사하게 만들되 webpack 플러그인 라이브러리등 개발에 필요한 기능을 최소한으로 넣어 제작 되었습니다.

#### 템플릿 Fork 후, node_modules install
>
    npm install -y
>
+ dependencies 미리보기
>
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
>

* devDependencies 미리보기
>
    "@babel/core": "^7.23.7",
    "@babel/plugin-transform-runtime": "^7.23.7",
    "@babel/preset-env": "^7.23.8",
    "@babel/preset-react": "^7.23.3",
    "@babel/preset-typescript": "^7.23.3",
    "@babel/runtime": "^7.23.8",
    "@types/fork-ts-checker-webpack-plugin": "^0.4.5",
    "@types/react": "^18.2.47",
    "@types/react-dom": "^18.2.18",
    "@types/webpack-dev-server": "^4.7.2",
    "@typescript-eslint/eslint-plugin": "^6.18.1",
    "@typescript-eslint/parser": "^6.18.1",
    "babel-loader": "^9.1.3",
    "clean-webpack-plugin": "^4.0.0",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-webpack-plugin": "^4.0.1",
    "fork-ts-checker-webpack-plugin": "^9.0.2",
    "html-webpack-plugin": "^5.6.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1">
>

* 해당 템플릿 생성시 사용된 npm script
>
    npm install react react-dom
>
    npm install --save-dev typescript
>
    npm install --save-dev @types/react @types/react-dom
>
    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime
>
    npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
>
    npm install --save-dev webpack webpack-cli
>
    npm install --save-dev webpack-dev-server @types/webpack-dev-server
>
    npm install --save-dev babel-loader
>
    npm install --save-dev html-webpack-plugin
>
    npm install --save-dev ts-node
>
    npm install --save-dev fork-ts-checker-webpack-plugin @types/fork-ts-checker-webpack-plugin
>
    npm install --save-dev eslint-webpack-plugin
>
    npm install --save-dev clean-webpack-plugin
>
