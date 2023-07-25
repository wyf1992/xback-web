const path = require('path');
const CracoLessPlugin = require('craco-less');
const CracoEnvPlugin = require('craco-plugin-env');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    devServer: {
      proxy: {
        '/dev-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
            '/dev-api': ''
          }
        }
      }
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
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {
          BASE_API: '/dev-api'
        }
      }
    }
  ]
};
