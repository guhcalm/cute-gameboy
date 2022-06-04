import HTML from "html-webpack-plugin"
import Mini from "terser-webpack-plugin"

const defaultConfig = {
  plugins: [new HTML({ template: "public/index.html" })],
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  module: { rules: [
    { test: /\.(js|ts)x?$/, use: "babel-loader" },
    { test: /\.(png|jpg|jpeg|webp|gif)$/, type: "asset/resource" },
    { test: /\.(woff|eot|ttf|oft|svg|ico)$/, type: "asset/inline" }    
  ]}
}

const developmentConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: { port: 3000, open: false, hot: true }
}

const productionConfig = {
  mode: "production",
  output: {
    assetModuleFilename: "assets/[name].[fullhash].[ext]",
    filename: "assets/[name].[fullhash].js", clean: true
  },
  optimization: {
    minimize: true, minimizer: [new Mini()],
    splitChunks: { cacheGroups: { libs: {
      chunks: "all", name: "libs", test: /[\\/]node_modules[\\/]/
    }}}
  }
}

export default ({ WEBPACK_SERVE }) => ({
  ...defaultConfig,
  ...(WEBPACK_SERVE ? developmentConfig : productionConfig)
})
