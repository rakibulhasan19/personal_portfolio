import React, {Component,Fragment} from 'react';

class Project extends Component {
    render() {
        return (
            <Fragment>
            <div className="my_stats py_30">
                <div className="container">
                    <div className="row">

                        {/*Stats -01*/}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="stats text-center my_15">
                                <div className="stats_icon mb_10">
                                    <i className="ion-coffee"></i>
                                </div>
                                <div className="stats_counter mb_5">
                                    <p>+<span className="counter">1,000</span></p>
                                </div>
                                <div className="stats_title">
                                    <h6>Project Done</h6>
                                </div>
                            </div>
                        </div>

                        {/*Stats -02*/}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="stats text-center my_15">
                                <div className="stats_icon mb_10">
                                    <i className="ion-ios-cloud-download"></i>
                                </div>
                                <div className="stats_counter mb_5">
                                    <p>+<span className="counter">1,000</span></p>
                                </div>
                                <div className="stats_title">
                                    <h6>Project Download</h6>
                                </div>
                            </div>
                        </div>

                         {/*Stats -03 */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="stats text-center my_15">
                                <div className="stats_icon mb_10">
                                    <i className="ion-android-happy"></i>
                                </div>
                                <div className="stats_counter mb_5">
                                    <p>+ <span className="counter">1,200</span></p>
                                </div>
                                <div className="stats_title">
                                    <h6>Happy Clients</h6>
                                </div>
                            </div>
                        </div>

                         {/*Stats -04 */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="stats text-center my_15">
                                <div className="stats_icon mb_10">
                                    <i className="ion-ribbon-b"></i>
                                </div>
                                <div className="stats_counter mb_5">
                                    <p><span className="counter">90</span></p>
                                </div>
                                <div className="stats_title">
                                    <h6>Award Win</h6>
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

export default Project;