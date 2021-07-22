import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import {useHistory} from "react-router-dom";
//import BlPost from "../components/body/content/sections/bl-post";
import PostContext from "../PostContext";

const SelectedPost = () => {
    // todo: read the selected post from context
    const {post} = useContext(PostContext);
    let displayDate =  moment(post.createdAt).calendar();
    // let match = useRouteMatch();
    // post =  {
    //     'title': 'This is some title',
    //     'text': 'Integer ullamcorper malesuada enim at ultrices. Sed eu urna dictum, consectetur magna eget, tincidunt massa. Pellentesque sed aliquam massa. Praesent commodo, quam et mattis rhoncus, enim lacus pretium quam, sed convallis velit elit id velit. Vivamus in magna odio. Vivamus lectus mauris, porttitor et leo at, cursus convallis nulla. Nam sit amet purus ultricies est auctor tempus non ac eros. Fusce vitae massa urna.',
    //     'id': '764786394873947019801209',
    //     'topic': 'Tech'
    // };
    let history = useHistory();
    // console.log(displayDate);
    const goBack = (ev) => {

        // console.log('Ready to navigate to post ', post.id);
        history.push( `/my-blind`);
    };

    return (
        <div className="mx-auto justify-center items-center mt-10" style={{'backgroundColor':'#243339'}}>
            <div  id={post.id} className="mx-auto bg-gray-400 rounded-lg shadow-xl w-3/4">
                <div className="w-full py-4 px-6 text-gray-800 ">
                    <h3 className="font-semibold text-lg leading-tight truncate">{post.title}</h3>
                    <p className="text-sm text-gray-700  tracking-wide mt-2">
                        Created {displayDate}
                    </p>
                    <p className="mt-2">
                        {post.text}
                    </p>
                    <p className="text-sm text-gray-700 tracking-wide mt-2">
                        topic: {post.topic}
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-5 w-80">
                <button className="sm:w-auto flex-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-md leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                        style={{'marginLeft': '45%'}}
                        onClick={goBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

SelectedPost.propTypes = {
    post: PropTypes.object
};
SelectedPost.defaultProps = {
    post: {}
};

export default SelectedPost;
