import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import BlTopnav from "./topnav/bl-topnav";
import AddPostModal from "../body/content/sections/addpostmodal/bl-add-post";

function BlHeader(props)
{
    let [openModal, setOpenModal] = useState(false);

    const btnClickHandler = () => {
        console.log('Sign up btn clicked');
    };

    const addPostHandler = () => {
        setOpenModal(true);
        console.log('Add post btn clicked')
    };

    return (
        <div className="inline-flex box-content p-4 border-2 w-screen">
            <div className="w-20 h-20">
                <img src="./bl-logo.jpeg" alt="blind-logo"/>
            </div>
            <div className="w-2/3">
                <BlTopnav/>
            </div>
            <div className="mt-8">
                <button className="w-full mr-2 sm:w-auto flex-none bg-red-900 hover:bg-red-700 text-black text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                    onClick={btnClickHandler}>Sign Up</button>
                <button className="w-full sm:w-auto flex-none bg-red-900 hover:bg-red-700 text-black text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                   onClick={addPostHandler}>Write a Post</button>
            </div>
            {openModal && <AddPostModal setOpenModal={setOpenModal}/>}
        </div>
    );
}

BlHeader.propTypes = {};
BlHeader.defaultProps = {};

export default BlHeader;
