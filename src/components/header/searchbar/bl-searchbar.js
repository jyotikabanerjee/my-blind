import React, {useState} from 'react';
import {BsSearch} from "react-icons/all";
import _ from "lodash";
import axios from "axios";

// import PropTypes from 'prop-types';
let tokenSource;

async function myHTTPGet(qry) {
    let url = `https://www.omdbapi.com/?apikey=6aeef859&s=${qry}`;
    try {
        if(typeof tokenSource !== typeof undefined) {
            tokenSource.cancel('Operation canceled as a new request has come in.')
        }

        tokenSource = axios.CancelToken.source();

        const { data } = await axios.get(url, {
            cancelToken: tokenSource.token
        });

        return {result: data};
    } catch (err) {
        if(axios.isCancel(err)) return {cancelPrevQuery: true};
        return [err];
    }
}

const BlSearchbar = () => {
    const [query, setQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState({});
    const [dataList, setDataList] = useState([]);


    let onChange = (ev) => {
        setQuery(ev.target.value);
        const search = _.debounce(getSearchQueryData, 300);

        setSearchQuery(prevStr => {
            if(prevStr.cancel) {
                prevStr.cancel();
            }
            return search;
        });

        search(ev.target.value);
    };

    async function getSearchQueryData (queryText)  {
        const {cancelPrevQuery, result} = await myHTTPGet(queryText);

        if (cancelPrevQuery) return;

        if (result['Response'] === 'True') {
            setDataList(result['Search']);
            console.log(dataList);
        } else {
            setDataList([]);
            console.log(result['Error']);
        }
    }

    return (
        <div className="inline items-start ml-4 w-full p-6 mt-4" style={{ 'position': 'relative'}}>
            <div style={{
                'position':'relative',
                'margin':'auto'
            }}>
                <span style={{'position': 'absolute', 'left': '55%', 'top':'3px'}}
                      className="p-2 rounded-lg bg-white-500 focus:outline-none">
                    <BsSearch style={{'color': 'gray'}}/>
                </span>
                <input className="inline-block rounded-3xl mx-auto w-96 p-2 bg-transparent text-white-700 border border-white-1 focus:outline-none"
                       value={query} onChange={onChange} placeholder="Find a post" type="text" name="searchbar" id="search"/>
            </div>
            <ul className="w-80 ml-5 rounded-md" style={{'position':'absolute', 'background-color':'#243339'}}>
                {dataList.map((elem, index) => (
                    <li className="border border-white rounded-sm" key={index}>{elem.Title}</li>
                ))}
            </ul>
        </div>
    );
};

BlSearchbar.propTypes = {};
BlSearchbar.defaultProps = {};

export default BlSearchbar;
