const UglifyPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  devServer: {
    open: true, //项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    proxy: {
      "/firecontrol": {
        //代理api
        target: "http://172.16.5.112:6080", //服务器api地址 黄志：http://172.16.8.66:6080 周勇: 172.16.8.102:6080
        // target: "http://172.16.7.30:6080", //何志涛
        // target: "http://172.16.8.25:6080/", //李平湘
        // target: "http://172.16.5.112:6080" //测试环境
        changeOrigin: true, //是否跨域
        ws: true, // proxy websockets
        pathRewrite: {
          //重写路径
          "^/firecontrol": ""
        }
      },
      "/weather": {
        //代理api
        target: "https://www.tianqiapi.com/api", //服务器api地址
        changeOrigin: true, //是否跨域
        ws: true, // proxy websockets
        pathRewrite: {
          //重写路径
          "^/weather": ""
        }
      }
    }
  },
  publicPath: "./",
  configureWebpack: config => {
    // if (process.env.NODE_ENV === "production") {
    //   config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    // }
    if (process.env.NODE_ENV == "production") {
      // 为生产环境修改配置
      config.mode = "production";
      // 将每个依赖包打包成单独的js文件
      let optimization = {
        minimizer: [
          new UglifyPlugin({
            uglifyOptions: {
              warnings: false,
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ["console.log"]
              }
            },
            sourceMap: false,
            parallel: true
          })
        ]
      };
      Object.assign(config, {
        optimization
      });
    } else {
      // 为开发环境修改配置
      config.mode = "development";
    }
  }
};
