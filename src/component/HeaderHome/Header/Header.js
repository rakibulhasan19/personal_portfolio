import React, {Component,Fragment} from 'react';
import '../../../Asset/css/google-fonts/poppins.css';
import '../../../Asset/css/google-fonts/Roboto.css';
import '../../../Asset/fontawesome/css/all.css';
import '../../../Asset/ionicons/css/ionicons.min.css'
import '../../../Asset/css/bootstrap-css/bootstrap.min.css';
import '../../../Asset/css/animated-css/style.css';
import '../../../Asset/css/magnific-popup/magnific-popup.css';
import '../../../Asset/css/custom.css'
import {NavLink} from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <nav className="my_navbar">
                        <div className="nav_toggle">
                            <span className="bar bar_1"/>
                            <span className="bar bar_2"/>
                            <span className="bar bar_3"/>
                        </div>

                        <div className="my_navbar_nav">
                            <ul className="text-center">
                                <li className="my_nav_item">
                                    <NavLink exact className="my_nav_link  py_10" to="/">
                                        <i className="fas fa-home"/>
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li className="my_nav_item">
                                    <NavLink exact className="my_nav_link py_10" to="/about">
                                        <i className="fas fa-user"/>
                                        <span>About</span>
                                    </NavLink>
                                </li>
                                <li className="my_nav_item">
                                    <NavLink exact className="my_nav_link py_10" to="/service">
                                        <i className="fas fa-briefcase-medical"/>
                                        <span>Service</span>
                                    </NavLink>
                                </li>
                                <li className="my_nav_item">
                                    <NavLink exact className="my_nav_link py_10" to="/work">
                                        <i className="fas fa-clone"/>
                                        <span>Works</span>
                                    </NavLink>
                                </li>
                                <li className="my_nav_item">
                                    <NavLink exact className="my_nav_link py_10" to="/blog">
                                    <i className="fas fa-blog"></i>
                                    <span>Blogs</span>
                                </NavLink>
                                </li>
                                <li className="my_nav_item">
                                    <NavLink  exact className="my_nav_link py_10" to="/contact">
                                        <i className="fas fa-address-book"></i>
                                        <span>Contact</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default Header;