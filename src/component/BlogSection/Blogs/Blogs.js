import React, {Component} from 'react';
import b1 from './../../../Asset/img/blog-img/b-1.jpg';
import b2 from './../../../Asset/img/blog-img/b-2.jpg';
import b3 from './../../../Asset/img/blog-img/b-3.jpg';
import {Link} from "react-router-dom";
class Blogs extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="all_section_title py_10">
                            <h6 className="second_title">My Latest News!</h6>
                            <h2 className="first_title">New Blogs</h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">

                   {/*Blogs Post 01*/}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="blog_item my_15">
                            <div className="blog_img">
                                <img src={b1} alt="Blog Post" className="img-fluid"/>
                            </div>
                            <div className="blog_details p_20">
                                <div className="date_comment mb_5">
                                    <div className="post_date">
                                        <p><span className="cln_icon"><i
                                            className="ion-ios-calendar-outline"></i></span>
                                            20-08-2020</p>
                                    </div>
                                    <div className="post_comment">
                                        <p><span className="comment_icon"><i className="ion-ios-chatboxes-outline"></i></span>
                                            <span className="comment_quantity">10k</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="blog_title mb_5">
                                        <h6>About Our Creative Website </h6>
                                    </div>
                                    <div className="post_article mb_5">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maiores omnis.
                                            Enim,
                                            nulla. Ipsa, quidem! <Link  className="readmore_btn" to=""> Read More...</Link>
                                        </p>
                                    </div>
                                    <hr/>
                                        <div className="post_author">
                                            <p><label>Post by :</label> <span>Rakibul Hasan</span></p>
                                        </div>
                            </div>
                        </div>
                    </div>

                    {/*Blogs Post 02 */}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="blog_item my_15">
                            <div className=" blog_img">
                                <img src={b2} alt="Blog Post" className="img-fluid"/>
                            </div>
                            <div className="blog_details p_20">
                                <div className="date_comment mb_5">
                                    <div className="post_date">
                                        <p> <span className="cln_icon post_icon"><i
                                            className="ion-ios-calendar-outline"></i></span>
                                            20-08-2020</p>
                                    </div>
                                    <div className="post_comment">
                                        <p> <span className="comment_icon post_icon"><i
                                            className="ion-ios-chatboxes-outline"></i></span>
                                            <span className="comment_quantity">10k</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="blog_title mb_5">
                                        <h6>About Our Creative Website </h6>
                                    </div>
                                    <div className="post_article mb_5">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maiores omnis.
                                            Enim,
                                            nulla. Ipsa, quidem! <Link className="readmore_btn" to=""> Read More...</Link>
                                        </p>
                                    </div>
                                    <hr/>
                                        <div className="post_author">
                                            <p><label>Post by :</label> <span>Rakibul Hasan</span></p>
                                        </div>
                            </div>
                        </div>
                    </div>

                    {/*Blogs Post 03 */}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="blog_item my_15">
                            <div className="blog_img">
                                <img src={b3} alt="Blog Post" className="img-fluid"/>
                            </div>
                            <div className="blog_details p_20">
                                <div className="date_comment mb_5">
                                    <div className="post_date">
                                        <p> <span className="cln_icon post_icon"><i
                                            className="ion-ios-calendar-outline"></i></span>
                                            20-08-2020</p>
                                    </div>
                                    <div className="post_comment">
                                        <p> <span className="comment_icon post_icon"><i
                                            className="ion-ios-chatboxes-outline"></i></span>
                                            <span className="comment_quantity">10k</span></p>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="blog_title mb_5">
                                        <h6>About Our Creative Website </h6>
                                    </div>
                                    <div className="post_article mb_5">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maiores omnis.
                                            Enim,
                                            nulla. Ipsa, quidem! <Link className="readmore_btn" to=""> Read More...</Link>
                                        </p>
                                    </div>
                                    <hr/>
                                        <div className="post_author">
                                            <p><label>Post by :</label> <span>Rakibul Hasan</span></p>
                                        </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Blogs;