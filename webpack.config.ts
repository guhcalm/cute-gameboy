import HTML from "html-webpack-plugin"
import Mini from "terser-webpack-plugin"

export default ({ WEBPACK_SERVE }) => ({
  mode: WEBPACK_SERVE && "development",
  plugins: [new HTML({ template: "public/index.html" })],
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  output: {
    assetModuleFilename: "assets/[name].[fullhash].[ext]",
    filename: "assets/[name].[fullhash].js",
    clean: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        libs: {
          chunks: "all",
          name: "libs",
          test: /[\\/]node_modules[\\/]/
        }
      }
    },
    minimize: true,
    minimizer: [new Mini()]
  },
  module: {
    rules: [
      { test: /\.(js|ts)x?$/, use: "babel-loader" },
      { test: /\.(png|jpg|jpeg|webp|gif)$/, type: "asset/resource" },
      { test: /\.(woff|eot|ttf|oft|svg|ico)$/, type: "asset/inline" }
    ]
  }
})
