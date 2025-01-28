import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : '');

    const onsearchHandler = (e) => {
        e.preventDefault();
        navigate('/course-list/' + input);
    };

    return (
        <form onSubmit={onsearchHandler} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-md shadow-sm">
            {/* Search Icon */}
            <img
                src={assets.search_icon}
                alt="search_icon"
                className="md:w-auto w-10 px-3"
            />

            {/* Input Field */}
            <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Search for Courses"
                className="flex-1 h-full px-2 text-gray-500 placeholder-gray-500/80 focus:outline-none"
            />

            {/* Search Button */}
            <button
                type="submit"
                className="bg-green-600 text-white rounded-md md:px-10 px-7 md:py-3 py-2 mx-2"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;



