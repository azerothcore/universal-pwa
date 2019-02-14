var child_process = require('child_process');
var fs = require('fs');

const { conf } = require("./include")

if (conf.postinstall) {
    require(conf.postinstall);
}