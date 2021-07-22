import React from 'react';
// import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
const SignUp = (props) => {
    let history = useHistory();
    const goToSignInPage = () => {
        history.push('/my-blind-signin')
    };
    return (
        <div>
            <div className="mx-auto h-full mt-5 w-3/4 ">
                <div>
                   <span className="text-gray-300"> Already have an account?</span>
                    <button onClick={goToSignInPage} className="sm:w-auto ml-2 mb-4 flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200">
                        Log In
                    </button>
                </div>
                <form className="bg-gray-400  shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-full-name">
                                Pick a Username
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name" type="text" value="jane.doe"/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-work-email">
                                Enter work email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                type="email"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-work-email" value="jane.doe@company.com"/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password" type="password" placeholder="******************"/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-password">
                               Re-enter Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password" type="password" placeholder="******************"/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                                type="button">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;
