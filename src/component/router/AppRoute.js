import React, {Component,Fragment} from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/service";
import Portfolio from "../Pages/Portfolio";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Cursor from "../Cursor/Cursor";
import Preloader from "../HeaderHome/Preloader/Preloader";
class AppRoute extends Component {
    render() {

        return (
           <Fragment>
               <Cursor/>
               <Preloader/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/service" component={Service}/>
                    <Route exact path="/work" component={Portfolio}/>
                    <Route exact path="/blog" component={Blogs}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
           </Fragment>
        );
    }
}

export default AppRoute;