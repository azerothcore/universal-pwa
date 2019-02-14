var fs = require('fs');

var conf = require("./conf.dist");

if (fs.existsSync(__dirname + "/conf.js")) {
    let _conf = require("./conf");
    conf = {
        ...conf,
        ..._conf
    }
}

module.exports = {
    conf
}
