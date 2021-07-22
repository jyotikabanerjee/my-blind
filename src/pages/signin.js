import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
// import PropTypes from 'prop-types';

const SignIn = ({}) => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let history = useHistory();
    // let [formErrors, setFormErrors] = useState({
    //    username: '', password: ''
    // });
    const goBack = (ev) => {
        history.push( `/my-blind`);
    };

    return (
        <div>
            <div className="mx-auto mt-5 w-full max-w-xs">
                <form className=" bg-gray-400  shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" value={username} placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" value={password} placeholder="******************"/>
                            <p className="text-red-300 text-xs italic">Please enter a password.</p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button
                            className="sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                            type="button">
                            Sign In
                        </button>
                        <button className="sm:w-auto ml-2 flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                                onClick={goBack}>
                            Go Back
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <a className="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800"
                           href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 MY-BLIND Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

SignIn.propTypes = {};
SignIn.defaultProps = {};

export default SignIn;
