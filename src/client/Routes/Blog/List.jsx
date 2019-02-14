import React from "react"
import { Link } from "react-router-dom";

const WP_POST = '//azerothshard.org/wp-json/wp/v2/posts/';

class Blog extends React.Component {

  constructor () {
    super();
    this.state = {
      posts: []
    }
 
  }

  componentDidMount (){

    const postsUrl = WP_POST;

    fetch(postsUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }
 
  render() {

    
    return (
      <div className="container">
          {(this.state.posts.length && this.state.posts.map(v=><p><Link to={"/blog/"+v.id+"/"}>{v.slug}</Link></p>)) || "Loading..."}
      </div>
    );
  }
}

export default Blog;