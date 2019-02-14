import React from "react"

const WP_POST = 'http://azerothshard.org/wp-json/wp/v2/posts/';


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: ""
        }

    }

    componentDidMount() {

        const postsUrl = WP_POST;

        fetch(postsUrl + this.props.match.params.id)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({
                    post: response.content.rendered
                })
            })
    }

    render() {


        return (
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html: this.state.post }}></div>
            </div>
        );
    }
}

export default Post;