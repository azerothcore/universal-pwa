import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import Home from "@this/src/client/Routes/Home"
import Blog from "@this/src/client/Routes/Blog/List"
import Post from "@this/src/client/Routes/Blog/Post"
import Admin from "@this/src/client/Routes/Admin"

import conf from "@this/conf/conf"

/**
 * This function is used by our sitemap generator
 * DO NOT REMOVE this method, just change routes to your needs
 * if you want to exclude some routes from sitemap just
 * add them directly inside the <Router>
 */
export const routePaths = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/" component={Blog} />
        <Route path="/blog/:id" component={Post} />
    </Switch>
)

export default (props) => (
    <Router basename={conf.basePath}>
        <div>
            {props.children}
            {routePaths()}
            <Switch>
                <Route path="/app/" component={Admin} />
            </Switch>
        </div>
    </Router >
);