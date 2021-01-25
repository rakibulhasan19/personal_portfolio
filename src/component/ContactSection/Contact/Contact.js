import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="all_section_title py_10">
                            <h6 className="second_title">Get In Touch!</h6>
                            <h2 className="first_title">Contact Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-12">
                        <div className="contact_info">
                            <div className="contact_mobile my_15 p_20">
                                <div className="contact_icon mr_20">
                                    <i className="ion-ios-telephone"></i>
                                </div>
                                <ul>
                                    <li><Link to="#">(+880)-1811914794</Link></li>
                                    <li><Link to="#">(+880)-1811914794</Link></li>
                                </ul>
                            </div>
                            <div className="contact_email my_15 p_20">
                                <div className="contact_icon mr_20">
                                    <i className="ion-email"></i>
                                </div>
                                <ul>
                                    <li><Link to="#">support_user@support.com</Link></li>
                                    <li><Link to="#">support_user@support.com</Link></li>
                                </ul>
                            </div>
                            <div className="contact_address my_15 p_20">
                                <div className="contact_icon mr_20">
                                    <i className="ion-location"></i>
                                </div>
                                <p>
                                    House No:244, Chawkbazar, Chittagong, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="contact_form p_20 my_15">

                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 pr_10">
                                        <div className="name_field my_15">
                                            <input type="text" className="form-control" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 pl_10">
                                        <div className="email_field my_15">
                                            <input type="email" className="form-control" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="subject_field my_5">
                                            <input type="text" className="form-control" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="message_field my_15">
                                            <textarea className="form-control" id="message" rows="5"
                                                      placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="submit_button my_5">
                                            <Link to="#" className="btn my_custom_btn message_btn">Send Message <span><i
                                                className="fas fa-envelope"></i></span></Link>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Contact;