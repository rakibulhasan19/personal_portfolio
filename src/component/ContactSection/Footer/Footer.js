import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
            <footer className="footer_section py_60 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer_social_icon text-center">
                                <ul>
                                    <li className="footer_social_item"><Link className="footer_social_link" to="#"><i
                                        className="ion-social-facebook"></i></Link></li>
                                    <li className="footer_social_item ml_5"><Link className="footer_social_link"
                                                                               to="#"><i
                                        className="ion-social-twitter"></i></Link></li>
                                    <li className="footer_social_item ml_5"><Link className="footer_social_link"
                                                                               to="#"><i
                                        className="ion-social-instagram"></i></Link></li>
                                    <li className="footer_social_item ml_5"><Link className="footer_social_link"
                                                                               to="#"><i
                                        className="ion-social-linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 mt_10">
                            <div className="copy_text text-center">
                                <p>
                                    Created by <b>Rakibul Hasan</b>. All rights reserved &copy; 2020.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </Fragment>
        );
    }
}

export default Footer;