import React, {Component} from 'react';
import Portfolio from "./Portfolio/Portfolio";

class PortfolioSection extends Component {
    render() {
        return (
            <div className="portfolio_section section py_60" id="/work" >
                <Portfolio/>
            </div>
        );
    }
}

export default PortfolioSection;