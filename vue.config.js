const packageName = require('./package.json').name;

module.exports = {
    publicPath:'http://localhost:8081/',
    devServer:{
        headers:{
            'access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack:{
        output:{
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
        }
    }
}
