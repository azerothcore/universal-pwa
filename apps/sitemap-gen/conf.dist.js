export default {
    routerFile: '@this/src/client/App/Router', // this file must export routePaths method
    sitemapFile: 'sitemap.xml',
    sitemapBasePath: './build/',
    injectSitemap: async (Sitemap, app = null) => {
        // you can inject your sitemap here in
        // Sitemap.sitemaps array for SSG and if app
        // is defined you should create a new route for SSR

        // Example of dynamic generated sitemap:
        // this will produce a different sitemap
        // at each request, useful for non static sitemaps
        /*
        const genSm = {
            toString: () => sm.createSitemap({
                hostname: Sitemap.hostname,
                cacheTime: 1000, // 1 sec
                urls: [{
                    url: '/' + Math.random(),
                    changefreq: "always",
                    priority: 0.8,
                    lastmodrealtime: true
                }]
            }).toString()
        }

        Sitemap.sitemaps.push(genSm);
        */
    }
}