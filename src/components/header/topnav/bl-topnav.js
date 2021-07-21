import React from 'react';
// import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {BsSearch} from "react-icons/all";

const BlTopnav = () => {
    return (
        <div className="inline-flex ml-2">
        <div className="inline items-start ml-4 w-full p-6">
            <input className="inline-block rounded-lg mx-auto w-96 p-2 text-gray-700" placeholder="Find a post" type="text" name="searchbar" id="search"></input>
            <button className="p-2 mt-4 h-10 w-10 rounded-lg border border-white-400 bg-white-500"><span className="inline-block mx-auto mr-2 "><BsSearch className="stroke-current text-darkgray-600"/></span></button>
        </div>
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
