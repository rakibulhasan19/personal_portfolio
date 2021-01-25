import React, {Component,Fragment} from 'react';
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <div className="contact_section section pt_60" id="/contact">
                    <Contact/>
                    <Footer/>
                </div>
            </Fragment>
        );
    }
}

export default ContactSection;