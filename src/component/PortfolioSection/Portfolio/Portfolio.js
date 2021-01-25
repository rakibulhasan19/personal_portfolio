import React, {Component} from 'react';
import project1 from './../../../Asset/img/portfolio-img/project-1.jpg';
import project2 from './../../../Asset/img/portfolio-img/project-2.jpg';
import project3 from './../../../Asset/img/portfolio-img/project-3.jpg';
import project4 from './../../../Asset/img/portfolio-img/project-4.jpg';
import project5 from './../../../Asset/img/portfolio-img/project-5.jpg';
import project6 from './../../../Asset/img/portfolio-img/project-6.jpg';
import {Link} from "react-router-dom";

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="all_section_title py_10">
                            <h6 className="second_title">My Latest Works!</h6>
                            <h2 className="first_title">My Portfolio</h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="portfolio_items">
                            <div className="row">

                                 {/*Poject 01 */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="portfolio_item my_15">
                                        <div className="portfolio_img">
                                            <div className="project_overly"></div>
                                            <img src={project1} alt="Project" className="img-fluid"/>

                                                <div className="project_details text-center">
                                                    <div className="project_name mb_5">
                                                        <h5>Photograpy</h5>
                                                    </div>
                                                    <div className="project_icon">
                                                        <ul>
                                                            <li className="poject_icon_item"><Link to=""><i
                                                                className="ion-heart"></i></Link></li>
                                                            <li className="poject_icon_item ml_20"><Link to=""><i
                                                                className="ion-android-share-alt"></i></Link></li>
                                                            <li className="poject_icon_item ml_20">
                                                                <Link className="image-link"
                                                                   to={project1}><i
                                                                    className="ion-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>

                                 {/*Poject 02*/}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="portfolio_item my_15">
                                        <div className="portfolio_img">
                                            <div className="project_overly"></div>
                                            <img src={project2} alt="Project" className="img-fluid"/>

                                                <div className="project_details text-center">
                                                    <div className="project_name mb_5">
                                                        <h5>Graphics Design</h5>
                                                    </div>
                                                    <div className="project_icon">
                                                        <ul>
                                                            <li className="poject_icon_item"><Link to=""><i
                                                                className="ion-heart"></i></Link></li>
                                                            <li className="poject_icon_item ml_20"><Link to=""><i
                                                                className="ion-android-share-alt"></i></Link></li>
                                                            <li className="poject_icon_item ml_20">
                                                                <Link className="image-link"
                                                                   to={project2}><i
                                                                    className="ion-eye"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>


                                 {/*Poject 03 */}
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="portfolio_item my_15">
                                        <div className="portfolio_img">
                                            <div className="project_overly"></div>
                                            <img src={project3} alt="Project" className="img-fluid"/>

                                                <div className="project_details text-center">
                                                    <div className="project_name mb_5">
                                                        <h5>Web Design</h5>
                                                    </div>
                                                    <div className="project_icon">
                                                        <ul>
                                                            <li className="poject_icon_item"><Link to=""><i
                                                                className="ion-heart"></i></Link></li>
                                                            <li className="poject_icon_item ml_20"><Link to=""><i
                                                                className="ion-android-share-alt"></i></Link></li>
                                                            <li className="poject_icon_item ml_20">
                                                            <Link className="image-link"
                                                                  to={project3}><i
                                                                className="ion-eye"></i></Link></li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                           {/*Poject 04 */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="portfolio_item my_15">
                                    <div className="portfolio_img">
                                        <div className="project_overly"></div>
                                        <img src={project4} alt="Project" className="img-fluid"/>

                                            <div className="project_details text-center">
                                                <div className="project_name mb_5">
                                                    <h5>Development</h5>
                                                </div>
                                                <div className="project_icon">
                                                    <ul>
                                                        <li className="poject_icon_item"><Link to=""><i
                                                            className="ion-heart"></i></Link></li>
                                                        <li className="poject_icon_item ml_20"><Link to=""><i
                                                            className="ion-android-share-alt"></i></Link></li>
                                                        <li className="poject_icon_item ml_20">
                                                            <Link className="image-link" to={project4}><i
                                                                className="ion-eye"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>


                             {/*Poject 05*/}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="portfolio_item my_15">
                                    <div className="portfolio_img">
                                        <div className="project_overly"></div>
                                        <img src={project5} alt="Project" className="img-fluid"/>

                                            <div className="project_details text-center">
                                                <div className="project_name mb_5">
                                                    <h5>Web Design</h5>
                                                </div>
                                                <div className="project_icon">
                                                    <ul>
                                                        <li className="poject_icon_item"><Link to=""><i
                                                            className="ion-heart"></i></Link></li>
                                                        <li className="poject_icon_item ml_20"><Link to=""><i
                                                            className="ion-android-share-alt"></i></Link></li>
                                                        <li className="poject_icon_item ml_20">
                                                            <Link className="image-link" to={project5}><i className="ion-eye"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>


                             {/*Poject 06 */}
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="portfolio_item my_15">
                                    <div className="portfolio_img">
                                        <div className="project_overly"></div>
                                        <img src={project6} alt="Project"
                                             className="img-fluid image-link"/>

                                            <div className="project_details text-center">
                                                <div className="project_name mb_5">
                                                    <h5>Photograpy</h5>
                                                </div>
                                                <div className="project_icon">
                                                    <ul>
                                                        <li className="poject_icon_item"><Link to=""><i
                                                            className="ion-heart"></i></Link></li>
                                                        <li className="poject_icon_item ml_20"><Link to=""><i
                                                            className="ion-android-share-alt"></i></Link></li>
                                                        <li className="poject_icon_item ml_20">
                                                            <Link className="image-link"
                                                               to={project6}><i
                                                                className="ion-eye"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
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

export default Portfolio;