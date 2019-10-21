// it's just a shortcut for dockerRun script

require("./apps/docker/dockerRun")({
    service: "node-client",
    hasDb: false
})
