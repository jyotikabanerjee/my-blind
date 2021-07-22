import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import BlTopnav from "./topnav/bl-topnav";
import AddPostModal from "../body/content/sections/addpostmodal/bl-add-post";
// import { BsSearch } from  'react-icons/bs'
import { useHistory } from 'react-router-dom';

function BlHeader(props)
{
    let history = useHistory();
    let [openModal, setOpenModal] = useState(false);

    const handleSignUp = () => {
        console.log('Sign up btn clicked');
        history.push('/my-blind-signup');
    };

    const handleSignIn = () => {
        console.log('Sign up btn clicked');
        history.push('/my-blind-signin');
    };

    const addPostHandler = () => {
        setOpenModal(true);
        console.log('Add post btn clicked')
    };

    return (
        <div className="inline-flex box-content p-4 border-2 w-screen">
            <div style={{'marginTop': '25px', 'padding': '0', 'width': '200px', 'fontSize': '2em',}}>
                <span style={{'fontFamily': 'Zen Tokyo Zoo'}}>MYBLIND</span>
            </div>
            <div className="w-1/2">
                <BlTopnav/>
            </div>
            <div className="mt-5">
                <button className="mr-2 sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                    onClick={handleSignUp}>Sign Up</button>
                <button className="mr-2 sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                   onClick={addPostHandler}>Write a Post</button>
                <button className="sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                        onClick={handleSignIn}>Log In</button>
            </div>
            {openModal && <AddPostModal setOpenModal={setOpenModal}/>}
        </div>
    );
}

BlHeader.propTypes = {};
BlHeader.defaultProps = {};

export default BlHeader;
