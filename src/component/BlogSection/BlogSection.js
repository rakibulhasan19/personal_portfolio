import React, {Component} from 'react';
import Blogs from "./Blogs/Blogs";

class BlogSection extends Component {
    render() {
        return (
            <div className="blog_section section py_60" id="/blog">
                <Blogs/>
            </div>
        );
    }
}

export default BlogSection;