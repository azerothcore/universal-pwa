import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { sEvtMgr, Events } from "@hw-core/react-platform"

/**
 * This function is used by our sitemap generator
 * DO NOT REMOVE this method, just change routes to your needs
 * if you want to exclude some routes from sitemap just
 * add them directly inside the <Router>
 */
export const routePaths = () => {
    var routes = []

    sEvtMgr.emit(Events.route_load_static, routes)

    return (
        <Switch>
            {routes}
        </Switch>
    )
}

export default (props) => {
    var routes = []

    sEvtMgr.emit(Events.route_load, routes);

    return (
        <Router basename={props.conf.basePath}>
            <div>
                {props.children}
                {routePaths()}
                <Switch>
                    {routes}
                </Switch>
            </div>
        </Router >)
};
