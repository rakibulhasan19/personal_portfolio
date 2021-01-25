import React, {Component,Fragment} from 'react';
class Preloader extends Component {
    render() {
        return (
            <Fragment>
                <div className="preloader">
                    <div className="preloader_status">
                        <span></span>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Preloader;