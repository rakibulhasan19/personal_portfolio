import React, {Component,Fragment} from 'react';
import HeaderHome from "../HeaderHome/HeaderHome";
import AboutSection from "../AboutSection/AboutSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import BlogSection from "../BlogSection/BlogSection";
import ContactSection from "../ContactSection/ContactSection";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <HeaderHome />
                <AboutSection/>
                <ServiceSection/>
                <PortfolioSection/>
                <BlogSection/>
                <ContactSection/>
            </Fragment>
        );
    }
}

export default Home;