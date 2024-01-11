import path from "path";
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
  ProvidePlugin,
} from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  // 웹팩 실행 최적화 방식 지정
  mode: "development",
  // 웹팩 결과물의 파일 경로 지정
  output: {
    publicPath: "/",
  },
  // 웹팩 자원 변환시, js 파일 시작 지점 지정
  entry: "./src/index.tsx",
  // 모듈들에 기본적으로 지정되는 규칙 지정
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  // 모듈 해석 방식 지정
  resolve: {
    // 모듈 해석 순서 지정
    extensions: [".tsx", ".ts", ".js"],
  },
  // 최적화 수동 구성
  optimization: {
    // Chunk값 구성 방식 지정
    runtimeChunk: "single",
  },
  plugins: [
    // Html 생성 단순화 및 템플릿 지정
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    // 컴파일,번들링과 별도록 타입 검사 실행
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new ProvidePlugin({
      React: "react",
    }),
    new HotModuleReplacementPlugin(),
  ],
  // 소스맵 출력 스타일
  devtool: "eval-source-map",
  // 개발 서버 구성 방식
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;
