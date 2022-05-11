import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './layouts/Navbar';
const Example = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="container">
             
            </div>
        </Fragment>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
