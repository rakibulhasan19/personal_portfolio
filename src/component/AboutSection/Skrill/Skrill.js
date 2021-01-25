import React, {Component} from 'react';

class Skrill extends Component {
    render() {
        return (
            <div className="my_skill py_30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="secondery_title pb_5">
                                <h3>My Skilled</h3>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="skills_bar">
                                <ul className="skills_bar_container">

                                 {/*Progress Bar 01*/}
                                    <li className="skill_bar my_30">
                                        <div className="progressbar_title">
                                            <h6>Photograpy</h6>
                                            <span className="percent" id="photograpy-pourcent"></span>
                                        </div>
                                        <div className="bar_container">
                                            <span className="progressbar progresstomatoes" id="photograpy"></span>
                                        </div>
                                    </li>

                                     {/*Progress Bar 02 */}
                                    <li className="skill_bar my_30">
                                        <div className="progressbar_title">
                                            <h6>Graphics Design</h6>
                                            <span className="percent" id="graphics-pourcent"></span>
                                        </div>
                                        <div className="bar_container">
                                            <span className="progressbar progresstomatoes" id="graphics"></span>
                                        </div>
                                    </li>

                                     {/*Progress Bar 03*/}
                                    <li className="skill_bar my_30">
                                        <div className="progressbar_title">
                                            <h6>Web Design</h6>
                                            <span className="percent" id="webdesign-pourcent"></span>
                                        </div>
                                        <div className="bar_container">
                                            <span className="progressbar progresstomatoes" id="webdesign"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="skills_bar">
                                <ul className="skills_bar_container">

                                     {/*Progress Bar 04 */}
                                    <li className="skill_bar my_30">
                                        <div className="progressbar_title">
                                            <h6>Development</h6>
                                            <span className="percent" id="development-pourcent"></span>
                                        </div>
                                        <div className="bar_container">
                                            <span className="progressbar progresstomatoes" id="development"></span>
                                        </div>
                                    </li>

                                    {/*Progress Bar 05 */}
                                    <li className="skill_bar my_30">
                                        <div className="progressbar_title">
                                            <h6>SEO</h6>
                                            <span className="percent" id="seo-pourcent"></span>
                                        </div>
                                        <div className="bar_container">
                                            <span className="progressbar progresstomatoes" id="seo"></span>
                                        </div>
                                    </li>

                                     {/*Progress Bar 06 */}
                                    <li className="skill_bar my_30">
                                        <div className="progressbar_title">
                                            <h6>Marketing</h6>
                                            <span className="percent" id="marketing-pourcent"></span>
                                        </div>
                                        <div className="bar_container">
                                            <span className="progressbar progresstomatoes" id="marketing"></span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skrill;