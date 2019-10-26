import React from 'react';
import BlogItem from './BlogItem';
import "../styles/BlogPage.css";
import PlaceholderImg from "../img/placeholder.jpg";
import Blog1 from "../img/blog-1.jpg";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      { title: "Enough to Git You Started...", subTitle: "A beginners guide to using Git", img: Blog1, link: "https://medium.com/@nathanraysheryak/enough-to-git-you-started-32d941730cb7" },
      // { title: "blog 2", subTitle: "this is what I'm about", img: PlaceholderImg, link: "google.com" },
    ]
  }


  render() {
    return (
      <div className="blog-page">
        {
          this.state.map((blog) => {
            return <BlogItem
              key={blog.title}
              title={blog.title}
              subTitle={blog.subTitle}
              img={blog.img}
              link={blog.link}
            />
          })
        }
      </div>
    )
  }

}

export default BlogPage;