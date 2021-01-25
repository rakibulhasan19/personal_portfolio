import React, {Component} from 'react';

class ServiceItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="all_section_title py_10">
                            <h6 className="second_title">What I Do ?</h6>
                            <h2 className="first_title">My Services</h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">

                     {/*Service Item 01*/}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service_item text-center my_15 p_20">
                            <div className="service_icon mb_10">
                                <i className="ion-images"></i>
                            </div>
                            <div className="service_title mb_15">
                                <h5>Photograpy</h5>
                            </div>
                            <div className="service_details">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore saepe.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*Service Item 02 */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service_item text-center my_15 p_20">
                            <div className="service_icon mb_10">
                                <i className="ion-android-desktop"></i>
                            </div>
                            <div className="service_title mb_15">
                                <h5>Web Design</h5>
                            </div>
                            <div className="service_details">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore saepe.
                                </p>
                            </div>
                        </div>
                    </div>

                     {/*Service Item 03 */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service_item text-center my_15 p_20">
                            <div className="service_icon mb_10">
                                <i className="ion-code"></i>
                            </div>
                            <div className="service_title mb_15">
                                <h5>Development</h5>
                            </div>
                            <div className="service_details">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore saepe.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*Service Item 04*/}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service_item text-center my_15 p_20">
                            <div className="service_icon mb_10">
                                <i className="ion-social-chrome"></i>
                            </div>
                            <div className="service_title mb_15">
                                <h5>Browser</h5>
                            </div>
                            <div className="service_details">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore saepe.
                                </p>
                            </div>
                        </div>
                    </div>

                     {/*Service Item 05 */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service_item text-center my_15 p_20">
                            <div className="service_icon mb_10">
                                <i className="ion-compose"></i>
                            </div>
                            <div className="service_title mb_15">
                                <h5>Conten Writing</h5>
                            </div>
                            <div className="service_details">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore saepe.
                                </p>
                            </div>
                        </div>
                    </div>

                     {/*Service Item 06*/}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="service_item text-center my_15 p_20">
                            <div className="service_icon mb_10">
                                <i className="ion-heart"></i>
                            </div>
                            <div className="service_title mb_15">
                                <h5>24/7 Support</h5>
                            </div>
                            <div className="service_details">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore saepe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceItem;