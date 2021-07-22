import React from 'react';
// import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import {BsSearch} from "react-icons/all";
import BlSearchbar from "../searchbar/bl-searchbar";

const BlTopnav = () => {
    return (
        <div className="inline ml-2 mt-4">
            <BlSearchbar/>
        {/*<div className="inline-flex w-full p-5">*/}
        {/*    <Router>*/}
        {/*        <Link className="p-2" to="/">Home</Link>*/}
        {/*        <Link className="p-2" to="/company">Company Reviews </Link>*/}
        {/*        <Link className="p-2" to="/salaries">Salaries </Link>*/}
        {/*        <Switch>*/}
        {/*            <Route path="/">*/}

        {/*            </Route>*/}
        {/*            <Route path={`/company`}>*/}

        {/*            </Route>*/}
        {/*            <Route path={`/salaries`}>*/}

        {/*            </Route>*/}
        {/*        </Switch>*/}
        {/*    </Router>*/}
        {/*</div>*/}
        </div>
    );
};

BlTopnav.propTypes = {};
BlTopnav.defaultProps = {};

export default BlTopnav;
