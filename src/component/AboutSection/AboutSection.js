import React, {Component,Fragment} from 'react';
import About from "./About/About";
import Project from "./project/Project";
import Skrill from "./Skrill/Skrill";
import Resume from "./Resume/Resume";
import Testimonial from "./Testimonial/Testimonial";


class AboutSection extends Component {
    render() {
        return (
            <Fragment>
                <div className="about_section section py_60" id="/about">
                    <About/>
                    <Project/>
                    <Skrill/>
                    <Resume/>
                    <Testimonial/>
                </div>
            </Fragment>
        );
    }
}

export default AboutSection;
