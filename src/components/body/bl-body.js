import React from 'react';
// import PropTypes from 'prop-types';
import BlContent from "./content/bl-content";
import BlSidebar from "./sidebar/bl-sidebar";

function BlBody(props)
{
    return (
        <div className="inline-flex box-content p-4 border-2 w-screen">
            <BlSidebar/>
            <BlContent/>
        </div>
    );
}

BlBody.propTypes = {};
BlBody.defaultProps = {};

export default BlBody;
