import React, {Component,Fragment} from 'react';
import Header from "../HeaderHome/Header/Header";
import BlogSection from "../BlogSection/BlogSection";
import ContactSection from "../ContactSection/ContactSection";

class Blogs extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <BlogSection/>
                <ContactSection/>
            </Fragment>
        );
    }
}

export default Blogs;