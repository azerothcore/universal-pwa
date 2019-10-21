const args = process.argv.slice(2);

const { execSync } = require('child_process');

/**
 * @param {Object} options - configuration object
 * @param {String} options.service - name of service where execute commands 
 * @param {Boolean} options.hasDb - if true, enable some db checks
 * @param {String} options.dbService - name of database service
 * @param {String} options.runCmd - prefix of command to run fg/bg parameters
 */
async function main({
    service = "node-server",
    hasDb = true,
    dbService = "db",
    runCmd = "npm run"
}) {
    const command = args.shift();

    var options = []

    for (var i = 0; i < args.length; i++) {
        if (args[i].startsWith("-")) {
            options.push(args[i]);
        } else {
            break;
        }
    }

    scArgs = args.slice(i);

    var spawned = null;
    var upArgs = " -f docker-compose.yml -f docker-compose.override.yml ", exitArgs = "true";

    if (options.includes("--prod") || options.includes("-p")) {
        upArgs += " -f docker-compose.prod.yml ";
    }

    if (options.includes("--start")) {
        upArgs += " -f docker-compose.start.yml ";
    }

    if (options.includes("--rm") || options.includes("-r")) {
        exitArgs = " docker-compose down -v --remove-orphans"
    } else if (options.includes("--stop") || options.includes("-s")) {
        exitArgs = " docker-compose stop"
    }

    const dockerUp = "docker-compose " + upArgs + " up -d " + (hasDb ? " && docker-compose exec " + dbService + " /apps/docker/waitForMySQL.sh" : "")

    switch (command) {
        case "docker:fg":
            if (scArgs.length > 0) {
                cmd = dockerUp + " && docker-compose exec " + service + " " + runCmd + " " + scArgs + " || " + exitArgs
            } else {
                cmd = "docker-compose " + upArgs + " up || " + exitArgs
            }

            break;
        case "docker:bg":
            if (scArgs.length > 0) {
                cmd = dockerUp + " && docker-compose exec " + service + " " + runCmd + " " + scArgs + " || " + exitArgs
            } else {
                cmd = dockerUp + " || " + exitArgs
            }
            break;
        case "docker:shell":
            cmd = dockerUp + " && docker-compose exec " + service + " bash || " + exitArgs
            break;
        case "docker:remove":
            cmd = "docker-compose down -v --remove-orphans"
            break;
        case "docker:stop":
            cmd = "docker-compose stop"
            break;
        default:
            cmd = "npm run " + command + " " + args.join(" ")
            break;
    }

    console.log("Running: " + cmd)

    execSync(cmd, { stdio: 'inherit' });
}

module.exports = main;

