// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

require('module-alias/register');

const Sitemap = require("react-router-sitemap").default

var fs = require('fs');

require("@babel/polyfill")

require('@babel/register')({
    ignore: [/\/(build|node_modules)\//],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        'dynamic-import-node'
    ]
});

var conf = require("./conf.dist").default;

if (fs.existsSync(__dirname + "/conf.js")) {
    let _conf = require("./conf").default;
    conf = {
        ...conf,
        ..._conf
    }
}

const appConf = require("@this/conf/conf").default;

const router = require(conf.routerFile);

module.exports = {
    conf,
    /**
     * @returns {Array}
     */
    generate: () => {
        console.log("Generating sitemap...");
        return new Sitemap(router.routePaths())
            .build(appConf.websiteUrl);
    }
}
