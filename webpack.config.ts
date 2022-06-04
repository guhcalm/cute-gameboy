import HTML from "html-webpack-plugin"
import Minify from "terser-webpack-plugin"

export default (env) => ({
  mode: env.WEBPACK_SERVE ? "development" : "production",
  plugins: [new HTML({ template: "public/index.html" })],
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  devServer: { port: 3000, open: false, hot: true },
  devtool: "inline-source-map",
  entry: { main: "./src/index.tsx" },
  output: {
    assetModuleFilename: "assets/[name].[fullhash].[ext]",
    filename: "assets/[name].[fullhash].js",
    clean: true
  },
  module: {
    rules: [
      { test: /\.(js|ts)x?$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(png|jpg|jpeg|webp|gif)$/, type: "asset/resource" },
      { test: /\.(woff|eot|ttf|oft|svg|ico)$/, type: "asset/inline" }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new Minify()],
    splitChunks: {
      cacheGroups: {
        libs: {
          chunks: "all",
          name: "libs",
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
})
