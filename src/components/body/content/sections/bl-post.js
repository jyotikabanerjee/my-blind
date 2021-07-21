import React from 'react';
// import PropTypes from 'prop-types';

const BlPost = ({title, text}) => {
    return (
        <div>
            <section>
                <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
                    <p className="text-l sm:text-l lg:text-3xl leading-none font-bold text-white-500 tracking-tight mb-4">
                        {title}
                    </p>
                    <p className="max-w-4xl text-md sm:text-md font-light sm:leading-10 space-y-6 mb-4">
                        {text}
                    </p>
                </div>
            </section>
        </div>
    );
};

BlPost.propTypes = {};
BlPost.defaultProps = {};

export default BlPost;
