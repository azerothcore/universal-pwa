var child_process = require('child_process');

const { conf } = require("./include")

if (conf.enabled) {
    child_process.execSync("npm install --no-save", {
        stdio: [0, 1, 2]
    });
}
