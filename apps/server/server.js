import path from "path";
import express from "express";
import compression from 'compression';
import prerenderNode from "prerender-node";
import config from "@this/conf/conf";
import smExpress from "../sitemap-gen/express"

export default async (sitemap) => {
    var DIST_DIR = path.join(__dirname, "../../build"),
        PORT = config.clientPort,
        app = express();

    if (config.prerender && config.prerender.enabled) {

        prerenderNode.crawlerUserAgents.push('googlebot');
        prerenderNode.crawlerUserAgents.push('bingbot');
        prerenderNode.crawlerUserAgents.push('yandex');

        var prerender = require("prerender"); // commonJS syntax

        var server = prerender({
            port: config.prerender.port
        });

        process.env.CACHE_MAXSIZE = config.prerender.cache_maxpages;
        process.env.CACHE_TTL = config.prerender.cache_ttl;

        server.use(require('prerender-memory-cache'));
        server.use(prerender.sendPrerenderHeader());
        // server.use(prerender.blockResources());
        server.use(prerender.removeScriptTags());
        server.use(prerender.httpHeaders());

        const prerenderServiceUrl = config.prerender.host + ":" + config.prerender.port;
        console.log("prerenderServiceUrl: " + prerenderServiceUrl);

        app.use(prerenderNode.set('prerenderServiceUrl', prerenderServiceUrl));

        server.start();
    }

    app.use(compression());

    app.use(await smExpress(config.basePath, sitemap));

    //Serving the files on the dist folder
    //app.use(config.basePath, express.static(DIST_DIR));

    //Send index.html when the user access the web
    app.get(config.basePath+"*", function (req, res) {
        res.sendFile(path.join(DIST_DIR, "index.html"));
    });

    app.listen(PORT, function () {
        console.log("Express server Listening on http://127.0.0.1:" + PORT+config.basePath);
    });
}
