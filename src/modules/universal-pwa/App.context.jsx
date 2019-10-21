import React from "react"

export const AppCtxStore = React.createContext({})
export const AppCtxStore2 = React.createContext({})

export default class AppContext extends React.Component {
    constructor(props) {
        super(props)

        let data = localStorage.getItem("user");
        let posts = localStorage.getItem("admin_posts");

        if (data)
            data = JSON.parse(data)

        /**
         * Actions
         * @param {*} user 
         */
        const setUser = (user) => {
            this.setState({
                user
            })
        }

        const setUserName = (name) => {
            this.setState({
                user: {
                    ...this.state.user,
                    name
                }
            })
        }

        const addPost = (post) => {
            this.setState({
                posts: [
                    ...this.state.posts,
                    post
                ]
            })
        }

        this.state = {
            user: data || { name: "Anonymous" },
            posts: posts && JSON.parse(posts),
            setUser,
            setUserName,
            addPost
        }

        window.onbeforeunload = function () {
            localStorage.setItem("admin_posts", JSON.stringify(this.state.posts));
        }.bind(this);
    }

    render() {
        return <AppCtxStore.Provider value={this.state}>
            {this.props.children}
        </AppCtxStore.Provider>
    }
}
