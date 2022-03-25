const { ESLINT_MODES } = require('@craco/craco');
const path = require('path');

module.exports = {
    style: {
        sass: {
            loaderOptions: { // Make sure we can use mixins without needing to import
                additionalData: '@import "src/style/mixin.scss";'
            },
        },
    },
    webpack: {
        alias: {
            'Component': path.resolve(__dirname, 'src/component'),
            'Route': path.resolve(__dirname, 'src/route'),
            'Store': path.resolve(__dirname, 'src/store'),
            'Util': path.resolve(__dirname, 'src/util'),
            'Style': path.resolve(__dirname, 'src/style'),
            'Type': path.resolve(__dirname, 'src/type')
        },
        eslint: {
            mode: ESLINT_MODES.file
        },
        configure: webpackConfig => { // Remove the need for '.scss' when importing
            webpackConfig.resolve.extensions.push('.scss');
            return webpackConfig;
        },
    },
    babel: { // babel-loader configuration
        presets: [],
        plugins: ['transform-rebem-jsx'],
        // eslint-disable-next-line
        loaderOptions: (babelLoaderOptions, { env, paths }) => { console.log('loader options'); return babelLoaderOptions; },
        cacheDirectory: false
    }
};