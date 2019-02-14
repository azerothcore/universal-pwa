const sm = require("sitemap");
const path = require("path");
const express = require("express");

module.exports = async (basePath, sitemap, publicPath = "/") => {
    const app = express();
    const sitemapPaths = [];

    const fileName = sitemap.conf.sitemapFile;

    const Sitemap = sitemap.generate()

    await sitemap.conf.injectSitemap(Sitemap);

    // sitemap index is not needed in case of one sitemap file
    if (Sitemap.sitemaps.length === 1) {
        // main route
        app.get(basePath + fileName, (req, res) => {
            res.header('Content-Type', 'application/xml');
            console.log(Sitemap.sitemaps[0])
            res.send(Sitemap.sitemaps[0].toString())
        });

        return Sitemap;
    }

    Sitemap.sitemaps.map((sitemap, index) => {
        const savePath = fileName.replace('.xml', `-${index}.xml`);

        app.get(basePath + savePath, (req, res) => {
            res.header('Content-Type', 'application/xml');
            res.send(Sitemap.sitemaps[index].toString())
        });

        // push public path for indexing
        sitemapPaths.push(Sitemap.hostname + publicPath + path.basename(savePath));
    });

    // create index string
    const sitemapIndex = sm.buildSitemapIndex({
        urls: sitemapPaths,
        hostname: Sitemap.hostname
    });

    app.get(basePath + fileName, (req, res) => {
        res.header('Content-Type', 'application/xml');
        console.log(sitemapIndex)
        res.send(sitemapIndex)
    });

    return app;
}
