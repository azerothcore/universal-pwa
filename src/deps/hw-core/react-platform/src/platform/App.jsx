import React, { useContext } from "react";
import Router from "./Router"

import { sEvtMgr, Events } from "@hw-core/react-platform";

class App extends React.Component {

    componentDidMount() {
        window.prerenderReady = true;
    }

    render() {
        var headerElements = [], helmet = []

        var AppWrappers = (props) => <>{props.children}</>

        const addWrapper = (el) => {
            const El = el;
            const OldWrapper = AppWrappers;
            AppWrappers = (props) => <El><OldWrapper>{props.children}</OldWrapper></El>
        }

        sEvtMgr.emit(Events.app_content_wrapper, addWrapper)
        sEvtMgr.emit(Events.app_load_header, headerElements);
        sEvtMgr.emit(Events.app_load_helmet, helmet);

        return <AppWrappers><>
            {helmet}
            <Router conf={this.props.conf}>
                {headerElements.map((component, index) => {
                    const El = component;
                    return <React.Fragment key={index}>
                        <El />
                    </React.Fragment>
                })}
            </Router>
        </></AppWrappers>
    }
};

export default App;
