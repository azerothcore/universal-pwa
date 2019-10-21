import React, { useState, useContext } from 'react';
import { AppCtxStore } from "../App.context"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import conf from "@this/conf/conf"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faRssSquare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faRssSquare, faExternalLinkAlt);



export default (props) => {

    var [isOpen, setOpen] = useState(false)
    var appCtx = useContext(AppCtxStore)

    const toggle = () => {
        setOpen(!isOpen);
    }

    console.log("rendered navbar")

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href={conf.basePath}>HW Universal PWA</NavbarBrand>
            <NavbarToggler onClick={toggle} aria-label="navbar-toggler" />
            <Collapse isOpen={isOpen} navbar>

                <Nav navbar>
                    <NavItem>
                        <NavLink to="/" tag={Link}><FontAwesomeIcon icon="home" /> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/blog/" tag={Link}><FontAwesomeIcon icon="rss-square" /> Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/app/" tag={Link}>Admin</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/HW-Core/universal-pwa">Repository <FontAwesomeIcon icon="external-link-alt" /></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <div style={{ float: "right" }}>User: {appCtx.user.name}</div>
        </Navbar>
    )
}
