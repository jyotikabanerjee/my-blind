import React from 'react';
// import PropTypes from 'prop-types';
import BlContent from "./content/bl-content";
// import BlSidebar from "./sidebar/bl-sidebar";

function BlBody(props)
{
    return (
        <div className=" box-content p-4 border-2 w-screen mx-auto">
            <BlContent/>
        </div>
    );
}

BlBody.propTypes = {};
BlBody.defaultProps = {};

export default BlBody;
