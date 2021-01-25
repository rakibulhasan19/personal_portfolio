import React, {Component,Fragment} from 'react';
import Header from "../HeaderHome/Header/Header";
import ContactSection from "../ContactSection/ContactSection";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <ContactSection/>
            </Fragment>
        );
    }
}

export default Contact;