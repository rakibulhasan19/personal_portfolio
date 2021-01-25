import React, {Component,Fragment} from 'react';
import Header from "../HeaderHome/Header/Header";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import BlogSection from "../BlogSection/BlogSection";
import ContactSection from "../ContactSection/ContactSection";

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PortfolioSection/>
                <BlogSection/>
                <ContactSection/>
            </Fragment>
        );
    }
}

export default Portfolio;