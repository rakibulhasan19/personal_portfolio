import React, {Component} from 'react';
import img1 from './../../../Asset/img/testimonial-img/01.jpg';
import img2 from './../../../Asset/img/testimonial-img/02.jpg';
import img3 from './../../../Asset/img/testimonial-img/03.jpg';

class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial py_30">
                <div className="testimonial_overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="secondery_title pb_5">
                                <h3>What Say People About Me</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div className="testimonial_item my_30 p_25">
                                <div className="testimonial_img">
                                    <img src={img1} alt="Testimonial"
                                         className="img-fluid rounded-circle"/>
                                </div>
                                <div className="testimonial_details ml_25">
                                    <div className="testimonial_author mb_10">
                                        <div className="name_title">
                                            <h6 className="author_name">Munir Hossain</h6>
                                            <p className="author_title">Web Developer</p>
                                        </div>
                                        <div className="author_reviews">
                                            <ul className="reviews_star_list">
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star"><i className="ion-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="testimonial_text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam magnam
                                            nemo unde sed necessitatibus tempora debitis voluptatem totam voluptates.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*Testimonial Item 02 */}
                            <div className="testimonial_item my_30 p_25">
                                <div className="testimonial_img">
                                    <img src={img2} alt="Testimonial"
                                         className="img-fluid rounded-circle"/>
                                </div>
                                <div className="testimonial_details ml_25">
                                    <div className="testimonial_author mb_10">
                                        <div className="name_title">
                                            <h6 className="author_name">Munir Hossain</h6>
                                            <p className="author_title">Web Developer</p>
                                        </div>
                                        <div className="author_reviews">
                                            <ul className="reviews_star_list">
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star"><i className="ion-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="testimonial_text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam magnam
                                            nemo unde sed necessitatibus tempora debitis voluptatem totam voluptates.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*Testimonial Item 02 */}
                            <div className="testimonial_item my_15 p_25">
                                <div className="testimonial_img">
                                    <img src={img3} alt="Testimonial"
                                         className="img-fluid rounded-circle"/>
                                </div>
                                <div className="testimonial_details ml_25">
                                    <div className="testimonial_author mb_10">
                                        <div className="name_title">
                                            <h6 className="author_name">Munir Hossain</h6>
                                            <p className="author_title">Web Developer</p>
                                        </div>
                                        <div className="author_reviews">
                                            <ul className="reviews_star_list">
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star mr_5"><i className="ion-star"></i></li>
                                                <li className="star"><i className="ion-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="testimonial_text">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam magnam
                                            nemo unde sed necessitatibus tempora debitis voluptatem totam voluptates.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;