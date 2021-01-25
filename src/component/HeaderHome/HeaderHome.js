import React, {Component,Fragment} from 'react';
import Header from "./Header/Header";
import Home from "./Home/Home";

class HeaderHome extends Component {
    render() {
        return (
            <Fragment >
                <Header/>
                <Home/>
            </Fragment>
        );
    }
}

export default HeaderHome;