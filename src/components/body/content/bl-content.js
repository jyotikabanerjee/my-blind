import React, { useEffect, useContext} from 'react';
// import PropTypes from 'prop-types';
import BlPost from "./sections/bl-post";
import PostContext from "../../../PostContext";
async function myHTTPGet (url, reqOpt) {
    return await fetch(url, reqOpt);
}
const BlContent = () => {
    // todo: Put all data in context. useContext to fetch data as needed by ID in route param
    // const [allData, setAllData] = useState([]);
    const {allPosts, setAllPosts } = useContext(PostContext);

    useEffect(() => {
        async function getAllPosts() {
            let url =  'https://my-blind-98ebc-default-rtdb.firebaseio.com/bl-posts.json';
            let headers = new Headers();
            headers.append('Accept', 'application/json');
            // let url = '/posts.json';
            let res = await myHTTPGet(url, {headers});
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
            setAllPosts(posts);
         }
         getAllPosts();
    }, []);


    return (
        <div className="flex-column mx-auto">
             <BlPost posts={allPosts}/>
        </div>
    );
};

BlContent.propTypes = {};
BlContent.defaultProps = {};

export default BlContent;
