// const { ESLINT_MODES } = require('@craco/craco');
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
        // eslint: {
        //     mode: ESLINT_MODES
        // },
        configure: webpackConfig => { // Remove the need for '.scss' when importing
            webpackConfig.resolve.extensions.push('.scss');
            return webpackConfig;
        },
    },
    babel: { // babel-loader configuration
        // babelrc: true,
        // presets: [
        //     '@babel/preset-env',
        //     '@babel/preset-react'
        // ],
        // plugins: [
        //     '@babel/plugin-syntax-jsx',
        //     'transform-rebem-jsx'
        // ],
        // presets: ['@babel/preset-react'],
        // plugins: [],
        loaderOptions: (options, { ...rest }) => {
            console.error(options);
            console.error(rest);
            return {
                ...options,
                babelrc: true
                // babelrcRoots: ['.', 'node_modules/babel-plugin-transform-bem-jsx']
            };
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx'] // can delete
    }
};