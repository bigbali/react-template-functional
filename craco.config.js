const { ESLINT_MODES } = require("@craco/craco");
const path = require(`path`);

module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `@import "src/style/mixin.scss";`
            },
        },
    },
    webpack: {
        alias: {
        'Component': path.resolve(__dirname, 'src/component'),
        'Route': path.resolve(__dirname, 'src/route'),
        'Store': path.resolve(__dirname, 'src/store'),
        'Util': path.resolve(__dirname, 'src/util'),
        'Style': path.resolve(__dirname, 'src/style')
        },
        eslint: {
            mode: ESLINT_MODES.file
        },
        configure: (webpackConfig) => {
            webpackConfig.resolve.extensions.push('.scss');
            return webpackConfig;
        },
    }
};