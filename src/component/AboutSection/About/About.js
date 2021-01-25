import React, {Component,Fragment} from 'react';
import aboutImage from '../../../Asset/img/about-img/about.jpg'
import {Link} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="about_me pb_30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="all_section_title py_10">
                                    <h6 className="second_title">Who am I ?</h6>
                                    <h2 className="first_title">About Me</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">

                         {/*About Image */}
                            <div className="col-lg-5 col-12 text-center">
                                <div className="about_img my_15">
                                    <img src={aboutImage} alt="About" className="img-fluid"/>
                                </div>
                            </div>

                            {/*About Text */}
                            <div className="col-lg-7 col-12 pl_30">
                                <div className="about_details my_15">
                                    <div className="about_details_title">
                                        <p className="details_title">Hello! I'm <span>Rakibul Hasan Saimun</span>, Web/Android Developer
                                        </p>
                                    </div>
                                    <div className="about_text mt_5">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Enim, ad. Similique dignissimos
                                            deserunt suscipit necessitatibus recusandae quas cupiditate ratione
                                            repudiandae.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ad. Similique
                                            lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ad. Similique
                                        </p>
                                    </div>
                                    <div className="about_info mt_10">
                                        <ul className="about_info_ul">
                                            <li className="mb_5"><label>Name</label><span
                                                className="colone mr_25">:</span>
                                                Rakibul Hasan
                                            </li>
                                            <li className="mb_5"><label>Birthday</label><span
                                                className="colone mr_25">:</span>28-Dec-1997
                                            </li>
                                            <li className="mb_5"><label>Study</label><span
                                                className="colone mr_25">:</span>Islami
                                                University Of Chittagong
                                            </li>
                                            <li className="mb_5"><label>Degree</label><span
                                                className="colone mr_25">:</span>Master's
                                            </li>
                                            <li><label>City</label><span className="colone mr_25">:</span>Chittagong,
                                                Bangladesh
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="about_right_btn mt_25">
                                        <Link to="" className="btn my_custom_btn cv_btn">Download CV <span><i
                                            className="fas fa-download"></i></span></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default About;