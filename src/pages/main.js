import React from 'react';
import PropTypes from 'prop-types';
import BlHeader from "../components/header/bl-header";
import BlBody from "../components/body/bl-body";

const Main = (props) => {
    return (
        <div>
            <BlHeader/>
            <BlBody/>
        </div>
    );
};

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
