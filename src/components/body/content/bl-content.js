import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import BlPost from "./sections/bl-post";

async function myHTTPGet (url) {
    return await fetch(url);
}
const BlContent = () => {
    /**
     * GET all posts
     * Create one section per post
     */
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        async function getAllPosts() {
            let res = await myHTTPGet('/posts.json');
            if(!res.ok) {
                throw new Error(`Error with GET Posts - Status ${res.status}`);
            }
            let data = await res.json();
            console.log(data);
            setAllData(data);
         }
         getAllPosts();
    }, []);


    // let allData = [
    //     {
    //         idx:0,
    //         title: 'An API for your design system',
    //         text: ' Utility classes help you work within the constraints of a system instead of littering your stylesheets' +
    //             '   with arbitrary values. They make it easy to be consistent with color choices, spacing,' +
    //             '   typography, shadows, and everything else that makes up a well-engineered design system.'
    //     },
    //     {
    //         idx:1,
    //         title: 'An API for your design system',
    //         text: ' Utility classes help you work within the constraints of a system instead of littering your stylesheets' +
    //             '   with arbitrary values. They make it easy to be consistent with color choices, spacing,' +
    //             '   typography, shadows, and everything else that makes up a well-engineered design system.'
    //     },
    //     {
    //         idx:2,
    //         title: 'An API for your design system',
    //         text: ' Utility classes help you work within the constraints of a system instead of littering your stylesheets' +
    //             '   with arbitrary values. They make it easy to be consistent with color choices, spacing,' +
    //             '   typography, shadows, and everything else that makes up a well-engineered design system.'
    //     },
    //     {
    //         idx:3,
    //         title: 'An API for your design system',
    //         text: ' Utility classes help you work within the constraints of a system instead of littering your stylesheets' +
    //             '   with arbitrary values. They make it easy to be consistent with color choices, spacing,' +
    //             '   typography, shadows, and everything else that makes up a well-engineered design system.'
    //     },
    //     {
    //         idx:4,
    //         title: 'An API for your design system',
    //         text: ' Utility classes help you work within the constraints of a system instead of littering your stylesheets' +
    //             '   with arbitrary values. They make it easy to be consistent with color choices, spacing,' +
    //             '   typography, shadows, and everything else that makes up a well-engineered design system.'
    //     }
    // ];

    return (
        <div className="flex-column mx-auto">
            {allData.length > 0 && allData.map((post) => {
                return <BlPost title={post.title} text={post.text} key={post.id}/>
            })}
        </div>
    );
};

BlContent.propTypes = {};
BlContent.defaultProps = {};

export default BlContent;
