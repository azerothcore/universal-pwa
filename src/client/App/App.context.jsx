import React from "react"
import autoBind from "react-autobind";

export const AppCtxStore = React.createContext({})

export default class AppContext extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this);

        let data = localStorage.getItem("user");

        if (data)
            data = JSON.parse(data)

        this.state = {
            user: data || { name: "Anonymous" },
            posts: []
        }

        window.onbeforeunload = function () {
            localStorage.setItem("admin_posts", JSON.stringify(this.state.posts));
        }.bind(this);
    }

    /**
     * Actions
     * @param {*} user 
     */
    setUser(user) {
        this.setState({
            user
        })
    }

    setUserName(name) {
        this.setState({
            user: {
                ...this.state.user,
                name
            }
        })
    }

    addPost(post) {
        this.setState({
            posts: [
                ...this.state.posts,
                post
            ]
        })
    }

    componentWillMount() {
        let posts = localStorage.getItem("admin_posts");
        if (posts)
            this.setState({ posts: JSON.parse(posts) })
    }

    render() {
        return <AppCtxStore.Provider value={this}>
            <AppCtxStore.Consumer>
                {context => this.props.children(context)}
            </AppCtxStore.Consumer>
        </AppCtxStore.Provider>
    }
}
