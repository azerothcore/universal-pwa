import React from "react"

const ISSUE = '//jsonplaceholder.typicode.com/posts/';


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: ""
        }
    }

    async componentDidMount() {

        const postsUrl = ISSUE;

        var response = await fetch(postsUrl + this.props.match.params.id);
        var res = await response.json();

        this.setState({
            post: res.body
        })
    }

    render() {


        return (
            <div className="container">
                <div>{this.state.post}</div>
            </div>
        );
    }
}

export default Post;