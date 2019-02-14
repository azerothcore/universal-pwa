import React from "react";
import { Modal } from "reactstrap";


// CONTEXT
// This is simply the React API to create a Context
// that we will fill with a SMART state via Controller
var Context = React.createContext();

// VIEW: STATELESS COMPONENT (DUMB)
const View = ({ btnClass, btnText, withProps, ...props }) => (
    <Context.Consumer>
        {modal =>
            <div>
                {btnText && <button className={btnClass} onClick={modal.toggle}>{btnText}</button>}
                <Modal {...modal} {...props}>
                    {withProps ? props.children({ ...modal, ...props }) : props.children}
                </Modal>
            </div>
        }
    </Context.Consumer>
)


// CONTROLLER: STATEFUL  COMPONENT (SMART)
class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
            toggle: props.toggle ? props.toggle : this.toggle.bind(this)
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isOpen !== this.props.isOpen) {
            this.setState({ isOpen: this.props.isOpen });
        }
    }

    render() {
        return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>
    }
}


// DECORATOR
// Injection of Controller & Context via Decorator pattern
function Decorator(Child) {
    if (Child.prototype.render) Child.contextType = Context;
    return ({ isOpen, toggle, ...props }) => (
        <Controller isOpen={isOpen} toggle={toggle}>
            <Child {...props} />
        </Controller>
    )
}


// EXPORT
// All in One default modal
export default Decorator(View);

// Exporing all components
export {
    Context,
    View,
    Controller,
    Decorator
}