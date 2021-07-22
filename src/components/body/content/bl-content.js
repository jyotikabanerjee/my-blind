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
            let url =  'https://my-blind-98ebc-default-rtdb.firebaseio.com/bl-posts.json';
            // let url = '/posts.json';
            let res = await myHTTPGet(url);
            if(!res.ok) {
                throw new Error(`Error with GET Posts - Status ${res.status}`);
            }
            let data = await res.json();
            let posts = Object.keys(data).map(k => {
               return  data[k];
            });
            console.log(posts);
            posts.sort((a,b) => {
               return new Date(b.createdAt) - new Date(a.createdAt);
            });
            setAllData(posts);
         }
         getAllPosts();
    }, []);


    return (
        <div className="flex-column mx-auto">
            {allData.length > 0 && allData.map((post) => {
                return <BlPost key={post.id} post={post}/>
            })}
        </div>
    );
};

BlContent.propTypes = {};
BlContent.defaultProps = {};

export default BlContent;
