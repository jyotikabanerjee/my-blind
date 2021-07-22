import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory, useRouteMatch } from 'react-router-dom';

const BlPost = ({post}) => {
    let displayDate = moment(post.createdAt).calendar();
    // let match = useRouteMatch();
    let history = useHistory();
    // console.log(displayDate);
    const navigateToPost = (ev) => {
        console.log('Ready to navigate to post ', post.id);
        history.push( `/my-blind/${post.id}`);
    };

    return (
        <div>
            {/*<section>*/}
            {/*    <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">*/}
            {/*        <p className="text-l sm:text-l lg:text-3xl leading-none font-bold text-white-500 tracking-tight mb-4">*/}
            {/*            {title}*/}
            {/*        </p>*/}
            {/*        <p className="max-w-4xl text-md sm:text-md font-light sm:leading-10 space-y-6 mb-4">*/}
            {/*            {text}*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <div onClick={navigateToPost} id={post.id} className="flex cursor-pointer flex-col md:flex-row overflow-hidden
                                        bg-gray-400 rounded-lg shadow-xl  mt-4 w-2/3 mx-2">

                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
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
        </div>
    );
};

BlPost.propTypes = {
    post: PropTypes.object
};
BlPost.defaultProps = {
   post: {}
};

export default BlPost;
