import HTMLPlugin from "html-webpack-plugin"
import MinifyPlugin from "terser-webpack-plugin"

const myConfig = {
  profuction: {
    mode: "production",
    enty: { main: "./src/index.tsx" },
    output: {
      assetModuleFilename: "assets/[name].[fullhash].[ext]",
      filename: "assets/[name].[fullhash].js", clean: true
    },
    optimization: {
      splitChunks: { cacheGroups: { libs: {
        chunks: "all", name: "libs", test: /[\\/]node_modules[\\/]/
      }}},
      minimize: true, minimizer: [new MinifyPlugin()]
    } 
  },
  development: {
    mode: "development",
    devtool: "inline-source-map",
    devServer: { port: 3000, open: false, hot: true }
  },
  default: {
    plugins: [new HTMLPlugin({ template: "public/index.html" })],
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    module: { rules: [
      { test: /\.(js|ts)x?$/, use: "babel-loader" },
      { test: /\.(png|jpg|jpeg|webp|gif)$/, type: "asset/resource" },
      { test: /\.(woff|eot|ttf|oft|svg|ico)$/, type: "asset/inline" }    
    ]}
  }
}

export default ({ WEBPACK_BUILD }) => ({
  ...myConfig.default,
  ...(WEBPACK_BUILD
    ? myConfig.profuction
    : myConfig.development)
})
