import React from 'react';
// import PropTypes from 'prop-types';
import BlTopnav from "./topnav/bl-topnav";

function BlHeader(props)
{
    return (
        <div className="inline-flex box-content p-4 border-2 w-screen">
            <div className="w-20 h-20">
                <img src="./bl-logo.jpeg" alt="blind-logo"/>
            </div>
            <div className="w-3/4">
                <BlTopnav/>
            </div>
            <div> Btns </div>
        </div>
    );
}

BlHeader.propTypes = {};
BlHeader.defaultProps = {};

export default BlHeader;
