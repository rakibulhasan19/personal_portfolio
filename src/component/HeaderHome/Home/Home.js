import React, {Component} from 'react';
import userProfile from '../../../Asset/img/user.png';
import {Link} from "react-router-dom";
import Particles from 'react-particles-js';
import {connect} from "react-redux";
import {fetchData} from "../../../Actions";

class Home extends Component {
    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        return (
                <div className="home_section" id="/" >
                    <div className="home_overly" >
                        <Particles
                            params={{
                                particles: {
                                    number: {
                                        value:50,
                                        density: {
                                            enable: true,
                                            value_area: 1000,
                                        }
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="home_table">
                                    <div className="home_table_cell">

                                        <div className="home_img mb_25">
                                            <img src={userProfile} alt="" className="img-fluid rounded-circle"/>
                                        </div>

                                        <div className="home_title_01 mb_5">
                                            <h5 className="home_first_title">Welcome!</h5>
                                        </div>

                                        <div className="home_title_01 img_heading_style mb_10">
                                            <h1 className="home_second_title cd-headline clip">
                                                <span className="second_title_first_span">I'm </span>
                                                <span className="cd-words-wrapper">
                                            <b className="is-visible"> Rakibul Hasan</b>
                                            <b>a Freelancer</b>
                                            <b>a Developer</b>
                                        </span>
                                            </h1>
                                        </div>
                                        <div className="home_button_group mt_15">
                                            <Link className="btn my_custom_btn contact_btn" to="/contact">Contact Me
                                                <span className="fas fa-phone-alt">

                                                </span>
                                            </Link>
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
const mapStateToProps = state =>{
    console.log(state)
    return state
}

export default connect(mapStateToProps,{fetchData}) (Home);