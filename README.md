# HW Universal PWA

![image](https://i.imgur.com/mDWWMum.jpg)

This is a boilerplate React project that allows you to start creating an Universal PWA. It is based on a flexible setup of [create-react-app](https://facebook.github.io/create-react-app/) script without any external framework such as Next.js or GatsbyJS.

**An universal PWA is an app that:**
+ can be indexable by web crawler (even those who cannot execute javascript)
+ can work offline (thankfully to the serviceWorker)
+ can work on any devices
+ can be installed natively and uses devices APIs
+ can be used for every kind of project: app, static website, hybrid

**Moreover it's preconfigured to have:**
+ path aliases
+ full-working intellisense
+ debug configurations
+ modular directory structure
+ formatting rules and settings for visual studio code
+ automatic sitemap.xml for both SSG and SSR
+ automatic installation of missing npm modules at start
+ GraphQL and REST ready
  
and many other useful features allowing you to develop at the best!

So please, use VSCode, try to be [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), comment your code with [JSDocs](http://usejsdoc.org/),
learn to use [React contexts](https://reactjs.org/docs/context.html) and all Javascript ES6 and React best practices and patterns!

**Note:** we're using 4 spaces (instead of 2 that is common in javascript because of [callback hell](http://callbackhell.com/)) because it discourages nesting. In fact reducing the spaces to fit more levels in is a counterproductive idea. Use async/await as much as possible. 

### How to install

1. npm install
2. create a copy of /src/conf/conf.dist.js and rename in conf.js (do not delete or rename the .dist.js file directly!)
3. Configure your conf.js

### How to develop

You can edit this project on your needs, even ejecting CRA to have a full configurable project.
However in most cases you just need to edit following files:

1. **package.json:** app name, version etc.
2. **src/conf/conf.js**
3. **public/manifest.json**
4. **src/client/** files implementing your logic
5. **optional:** other /apps/ configurations

### How to run (development):

1. npm run start

### How to serve (production)

1. **npm run build** or **npm run build:ssg** (for static generation of routes)
2. **npm run start:serve** (or deploy everywhere you want if you don't need SSR)

you can use **npm run serve:screen**  to run the process in background with linux screen utility

**NOTE:** to improve SEO enable prerender feature for SSR (Read dedicated paragraph below)

## Core concepts

With this base you can build 3 kind of projects:

### 1. PWA: Client Side Rendered App (CSR)

A CSR application is totally rendered by the client via Javascript. The client will receive only a small index.html
and the bundled javascript application will render the content.

To build this kind of app you don't need any kind of requirement since you could develop and start/build
your app directly with npm commands.

**Pros:**
+ No server-side nodejs required, you can host everywhere you want
+ Building process is relatively fast

**Cons**
- Not all Web-Crawlers can indexing such app properly.
- Browser with old or deactivated Javascript cannot content of this app.

You should use it as a web app not as a blog or any other website that needs indexing and high compatibility.


### 2. Static PWA: CSR + Static Site Generation (CSR+SSG)

A Static Site Generation is a technique that allow you to pre-render your app pages/routes during the build process
creating a version of that page that contains the content to index and the bundler will only attach event-listener to pre-existing html (hydration). This will allow you to deploy a static site that will be fully indexable by the crawlers.

To use SSG you should install react-snap globally using **npm install -g react-snap** then you can use: **npm run build:ssg** instead of normal build command. We don't include it in our package.json because it downloads the entire chromium engine that is quite big, so you will download it on your needs.

**Pros**
+ No server-side nodejs required, you can host everywhere you want
+ Can be indexed by all crawlers
+ First loading is very fast because it contains already all html

**Cons**
+ Build process is slower
+ If you add new content you must build it again if you need SSG features

More info Here: [React Static](https://medium.com/@tannerlinsley/%EF%B8%8F-introducing-react-static-a-progressive-static-site-framework-for-react-3470d2a51ebc)

### 3. Universal PWA: CSR + SSG + Server Side Rendering (SSR)

The approach above (CSR+SSG) already allows you to develop an app/website that can be modern and indexable, but it's not yet an Universal PWA. There are a lot of websites that changes their contents very often (a blog) or even in real-time depending on some parameters (search engine). Such apps cannot be totally static generated at build time of course so we need an extra layer to handle the "crowling problem". This is called Server Side Rendering.
The SSR is the method used by old web apps (often written in PHP or Java Servlets) to serve the entire content to the client directly rendered by the server. This method can be used now as an helper to CSR and SSG serving pre-rendered and not dynamic static page only to some kind of clients (such as Web-Crawlers).

To use SSR you need to install following packages:

**npm install prerender prerender-node**

We don't include it in our package.json because it downloads the entire chromium engine that is quite big, so you will download it on your needs.

then you have just to configure your conf.js and enable prerender conf.

**Pros**
+ Can be indexed by all crawlers
+ First loading is very fast because it contains already all html
+ Can automatically generate pages not included in SSG build

**Cons**
+ It requires nodejs server
+ You cannot deploy everywhere


**NOTE:** Of course you can even use CSR+SSG with a 3rd party CDN service that will prerender your pages allowing you to host your app everywhere, but mostly such services are not free.


## Directory Structure

This project follows partially the [hw-core directory structure](http://hw-core.github.io/directory-structure/) on (CRA folder structure)[https://facebook.github.io/create-react-app/docs/folder-structure]

With following specs:

* apps: tools used by the project for specific tasks 
* public: public assets included in build but not directly required by src/
* src: application sources
  * client
    * App: Application Layout
    * Components: Reusable application-specific components **(generally they cannot be shared between projects)**
    * Routes: Components related to specific routes
  * conf: platform configuration files
  * deps: internal reusable dependencies **(they can be shared between projects)**
  * modules: optional and pluggable modules to extend app functionalities

For internal deps and modules we're using [subrepo](https://github.com/ingydotnet/git-subrepo) instead of subtree/submodule that
are not enough to both include a git based dependency and working on it at the same time. 
You can check the app.sh script to see how to sync your dependencies.

## Folder aliases:

We're monkey-patching the CRA via [craco](https://github.com/sharegate/craco/blob/master/README.md) library allowing us to 
create some useful path alias to avoid relative path hell: ( ../../ )

So you can use paths defined in cra-config.js file:

        "@this/src": path.resolve(__dirname, 'src/'),
        "@this/conf": path.resolve(__dirname, 'src/conf'),
        "@hw-core": path.resolve(__dirname, 'src/deps/hw-core')

## TODO (check our issuetracker for details):

- Improve generation of static sitemaps
- Implement exclude option for SSG routes
- Integration with cordova/phonegap and electron
