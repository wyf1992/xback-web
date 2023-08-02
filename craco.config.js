const path = require('path');
const CracoLessPlugin = require('craco-less');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    configure: (webpackConfig, { paths }) => {
      const outputDir = resolve(
        process.env.ENV === 'development' ? 'dist-test' : 'dist-prod'
      );
      paths.appBuild = webpackConfig.output.path = outputDir;
      webpackConfig.plugins = webpackConfig.plugins.concat(
        new FileManagerPlugin({
          events: {
            onEnd: {
              delete: [`${outputDir}.zip`],
              archive: [
                {
                  source: outputDir,
                  destination: `${outputDir}.zip`
                }
              ]
            }
          }
        })
      );
      return webpackConfig;
    }
  },
  devServer: {
    proxy: {
      '/dev-api': {
        target: 'https://testpay.xback.io:8999/',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2ba245' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
