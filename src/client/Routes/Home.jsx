import React from "react"
import ReactMarkdown from 'react-markdown'

export default class extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            content: "# Loading..." 
        }
    }

    async componentDidMount() {
        var res =await fetch("https://raw.githubusercontent.com/HW-Core/universal-pwa/master/README.md")
        var content = await res.text();

        this.setState({
            content
        })
    }

    render() {
        return <div>
            <ReactMarkdown source={this.state.content} />
        </div>
    }
}