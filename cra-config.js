const path = require('path');
var pjson = require('./package.json');

module.exports = function ({
    env,
    paths
}) {
    var alias = {};

    for (let a in pjson._moduleAliases) {
        alias[a] = path.resolve(__dirname, pjson._moduleAliases[a])
    }

    return {
        webpack: {
            alias
        }
    }
}
