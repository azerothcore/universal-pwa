// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

require('module-alias/register');

const sitemap=require("../sitemap-gen/sitemap");

require('@babel/register')({
    ignore: [/\/(build|node_modules)\//],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      'dynamic-import-node'
    ]
  });
// Import the rest of our application.

module.exports = require('./server.js').default(sitemap)