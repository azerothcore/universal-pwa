import React from "react"
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            posts: []
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.postClick = this.postClick.bind(this);
    }

    onTextChange(e) {
        this.setState({ text: e.target.value })
    }

    postClick() {
        this.setState({
            text: "",
            posts: [
                ...this.state.posts,
                this.state.text
            ]
        })
    }

    render() {
        return <div style={{ padding: 20 }}>
            <h3>This is a demo of admin page NOT indexed in sitemap for SEO</h3>
            <br></br>
            <div style={{marginBottom:20,marginTop:20}}>
                <input value={this.state.text} type="text" onChange={this.onTextChange}></input>
                <button onClick={this.postClick}>POST</button>
            </div>
            <ul>
                {this.state.posts.map((v, k) => <li key={k}>{v}</li>)}
            </ul>
        </div>
    }
}