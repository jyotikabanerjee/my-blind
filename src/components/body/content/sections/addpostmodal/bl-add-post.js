import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { BsFileEarmarkPlus } from  'react-icons/bs'

const AddPostModal = ({setOpenModal}) => {
    let [topic, setTopic] = useState('Tech');
    let [title, setTitle] = useState('');
    let [text, setText] = useState('');
    let ttext = '';
    const closeModal = () => {
        setOpenModal(false);
    };

    const submitPost = () => {
        setOpenModal(false);
        console.log(topic);
        console.log(title);
        console.log(text);
        // Make POST Request
    };

    const handleTitleSubmit = (ev) => {
        console.log('Title blur');
        // console.log(ev.target.value);
        setTitle(ev.target.value);
        // Text area changed;
    };

    const handleTextSubmit = (ev) => {
        console.log('Text blur');
        // console.log(ev.target.value);
       setText(ev.target.value);
    };

    const handleTextValidation = (ev) => {
        console.log('Text on change');
        console.log(ev.target.value);
    };

    const handleSelection = (ev) => {
        console.log('Selection');
        // console.log(ev.target.value);
        setTopic(ev.target.value);
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto"  role="dialog">
            <div className="flex items-end justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="bg-black-500 sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <BsFileEarmarkPlus />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4  sm:text-left">
                                <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900" id="modal-title">
                                    Write a Post
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        <select name="category" id="selectCat" onChange={handleSelection} value={'Tech'} className="text-sm mx-auto rounded-md w-96 p-3 border border-lightgray-600 text-gray-700">
                                            <option> Tech </option>
                                            <option> S/W </option>
                                            <option> Immigration </option>
                                            <option> Investments </option>
                                            <option> Misc. </option>
                                            <option> Layoffs </option>
                                            <option> COVID-19 </option>
                                            <option> WFH </option>
                                            <option> Return to office </option>
                                            <option> IT </option>
                                        </select>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <input className="rounded-md  focus:outline-none mx-auto w-96 p-4 m-3 shadow-inner border border-lightgray-600 text-gray-700"
                                               type="text"
                                               required={true}
                                               name="title"
                                               placeholder="Add a title"
                                               onBlur={handleTitleSubmit}
                                        />
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <textarea className="resize-none text-gray-600 focus:outline-none border rounded-md mx-auto h-64 w-96 p-4 m-3 shadow-inner border border-lightgray-600 break-normal"
                                                  type="text"
                                                  required={true}
                                                  name="textarea-name"
                                                  value={text} placeholder="Start writing here..."
                                                  onBlur={handleTextSubmit} onChange={handleTextValidation} >
                                            {ttext}
                                        </textarea>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" onClick={submitPost} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Submit
                        </button>
                        <button type="button" onClick={closeModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddPostModal.propTypes = {};
AddPostModal.defaultProps = {};

export default AddPostModal;
