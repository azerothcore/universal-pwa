import React from 'react';
import { sEvtMgr, Events } from "@hw-core/react-platform"
import Home from "./routes/Home"
import Blog from "./routes/Blog/List"
import Post from "./routes/Blog/Post"
import Admin from "./routes/Admin"
import { Route } from 'react-router';
import AppContext from "./App.context"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import UPWANavBar from "./components/UPWANavBar"

sEvtMgr.on(Events.app_load_header, (elements) => {
    elements.push(UPWANavBar)
})

sEvtMgr.on(Events.app_load_helmet, (helmet) => {
    helmet.push(<title>HW-Universal-PWA</title>,
        <meta name="description" content="HyperWeb Universal Progressive Web App" />,
        <meta name="theme-color" content="#000000" />)
})

sEvtMgr.on(Events.route_load_static, (routes) => {
    routes.push(<Route exact path="/" component={Home} />)
    routes.push(<Route exact path="/blog/" component={Blog} />)
    routes.push(<Route path="/blog/:id" component={Post} />)
})

sEvtMgr.on(Events.route_load, (routes) => {
    routes.push(<Route path="/app/" component={Admin} />)
})

sEvtMgr.on(Events.app_content_wrapper, (addWrapper) => {
    addWrapper(AppContext)
})

