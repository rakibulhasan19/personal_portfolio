import React, {Component,Fragment} from 'react';
import Header from "../HeaderHome/Header/Header";
import ServiceSection from "../ServiceSection/ServiceSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import BlogSection from "../BlogSection/BlogSection";
import ContactSection from "../ContactSection/ContactSection";

class Service extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <ServiceSection/>
                <PortfolioSection/>
                <BlogSection/>
                <ContactSection/>
            </Fragment>
        );
    }
}

export default Service;