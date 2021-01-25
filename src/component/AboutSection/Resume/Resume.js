import React, {Component} from 'react';

class Resume extends Component {
    render() {
        return (
            <div className="my_resume py_30">
                <div className="container">
                    <div className="row">
                         {/*Education */}
                        <div className="col-lg-6 col-12">
                            <div className="secondery_title pb_5">
                                <h3>Education</h3>
                            </div>
                            <div className="education my_15 mt-5">
                                {/*Diploma */}
                                <div className="education_item my_30 p_25">
                                    <div className="study_date mb_5">
                                        <h6><span><i className="far fa-calendar-alt"></i></span> 2010-2014 </h6>
                                    </div>
                                    <div className="study_title">
                                        <p>Diploma In Computer</p>
                                    </div>
                                    <div className="study_institute mb_5">
                                        <p>IBIT In Chittagong</p>
                                    </div>
                                    <div className="study_text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque
                                            quasi
                                            minus
                                            veniam temporibus deserunt cupiditate molestias voluptatum delectus debitis.
                                        </p>
                                    </div>
                                </div>

                                {/*Bs.c */}
                                <div className="education_item my_30 p_25">
                                    <div className="study_date mb_5">
                                        <h6><span><i className="far fa-calendar-alt"></i></span> 2014-2018 </h6>
                                    </div>
                                    <div className="study_title">
                                        <p>Bs.c In Computer</p>
                                    </div>
                                    <div className="study_institute mb_5">
                                        <p>IIUC In Chittagong</p>
                                    </div>
                                    <div className="study_text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque
                                            quasi
                                            minus
                                            veniam temporibus deserunt cupiditate molestias voluptatum delectus debitis.
                                        </p>
                                    </div>
                                </div>

                                 {/*Master"s */}
                                <div className="education_item my_30 p_25">
                                    <div className="study_date mb_5">
                                        <h6><span><i className="far fa-calendar-alt"></i></span> 2018-2019 </h6>
                                    </div>
                                    <div className="study_title">
                                        <p>Master's In Computer</p>
                                    </div>
                                    <div className="study_institute mb_5">
                                        <p>Iiuc In Chittagong</p>
                                    </div>
                                    <div className="study_text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque
                                            quasi
                                            minus
                                            veniam temporibus deserunt cupiditate molestias voluptatum delectus debitis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/*Experience */}
                        <div className="col-lg-6 col-12">
                            <div className="secondery_title pb_5">
                                <h3>Experience</h3>
                            </div>
                            <div className="experience my_15 mt-5">
                                {/*Front End */}
                                <div className="education_item my_30 p_25">
                                    <div className="work_date mb_5">
                                        <h6><span><i className="far fa-calendar-alt"></i></span> 2014-2016 </h6>
                                    </div>
                                    <div className="work_title">
                                        <p>Front End Developer</p>
                                    </div>
                                    <div className="work_company mb_5">
                                        <p>Glory Technologies</p>
                                    </div>
                                    <div className="study_text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque
                                            quasi
                                            minus
                                            veniam temporibus deserunt cupiditate molestias voluptatum delectus debitis.
                                        </p>
                                    </div>
                                </div>
                                <div className="education_item my_30 p_25">
                                    <div className="work_date mb_5">
                                        <h6><span><i className="far fa-calendar-alt"></i></span> 2014-2018 </h6>
                                    </div>
                                    <div className="work_title">
                                        <p>Front End Developer</p>
                                    </div>
                                    <div className="work_company mb_5">
                                        <p>Glory Technologies</p>
                                    </div>
                                    <div className="study_text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque
                                            quasi
                                            minus
                                            veniam temporibus deserunt cupiditate molestias voluptatum delectus debitis.
                                        </p>
                                    </div>
                                </div>

                                {/*Back End */}
                                <div className="education_item my_30 p_25">
                                    <div className="work_date mb_5">
                                        <h6><span><i className="far fa-calendar-alt"></i></span> 2014-Current </h6>
                                    </div>
                                    <div className="work_title">
                                        <p>Back End Developer</p>
                                    </div>
                                    <div className="work_company mb_5">
                                        <p>Glory Technologies</p>
                                    </div>
                                    <div className="study_text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo atque
                                            quasi
                                            minus
                                            veniam temporibus deserunt cupiditate molestias voluptatum delectus debitis.
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

export default Resume;