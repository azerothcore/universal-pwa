import React from "react"

import { AppCtxStore } from "../App.context"

export default class extends React.Component {
    static contextType = AppCtxStore;

    constructor(props, context) {
        super(props, context)

        this.state = {
            i: 0,
            text: "",
            posts: this.context.posts
        }

        this.nameInput = React.createRef();
    }

    onTextChange = (e) => {
        this.setState({ text: e.target.value })
    }

    async componentDidMount() {
        for (let j=0;j<10;j++) {
            await this.setState({i:this.state.i+1})
        }
    }

    componentWillMount() {
        console.log("test")
    }

    postClick = () => {
        this.setState({
            text: "",
            posts: [
                ...this.state.posts,
                this.state.text
            ]
        })

        this.context.addPost(this.state.text)
    }

    setUserName = () => {
        this.context.setUserName(this.nameInput.current.value)
    }

    render() {
        return <div style={{ padding: 20 }}>
            <h3>This is a demo of admin page NOT indexed in sitemap for SEO</h3>
            <br></br>
            <div style={{ marginBottom: 20, marginTop: 20 }}>
                <input placeholder="User name..." defaultValue={this.context.user.name} type="text" ref={this.nameInput}></input>
                <button onClick={this.setUserName}>SET</button>
            </div>
            <div style={{ marginBottom: 20, marginTop: 20 }}>
                <input value={this.state.text} type="text" onChange={this.onTextChange}></input>
                <button onClick={this.postClick}>POST</button>
            </div>
            <ul>
                {this.state.posts.map((v, k) => <li key={k}>{this.context.user.name}: {v}</li>)}
            </ul>
        </div>
    }
}
