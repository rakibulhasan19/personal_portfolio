import React, {Component} from 'react';
import ServiceItem from "./ServiceItem/ServiceItem";

class ServiceSection extends Component {
    render() {
        return (
            <div className="service_section section py_60" id="/service">
                <ServiceItem/>
            </div>
        );
    }
}

export default ServiceSection;