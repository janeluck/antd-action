module.exports = function (webpackConfig) {
    webpackConfig.babel.plugins.push(['antd', {
        // 自定制样式， 监控less文件
        style: 'css' || 'less', // if true, use less
    }]);

    // Fix ie8 compatibility
    webpackConfig.module.loaders.unshift({
        test: /\.jsx?$/,
        loader: 'es3ify-loader',
    });
    /*  webpackConfig.devServer =  {
     historyApiFallback: true,
     contentBase: './',

     hot: true
     }*/
    return webpackConfig;
};
