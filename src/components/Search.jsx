import React, { useRef } from 'react';
import searchIcon from '../images/search-light.svg';

export default function Search() {

    // Reference to input element.
    const inputRef = useRef();

    return (
        <div 
            className='
                flex flex-col justify-center 
                max-w-xl w-[97%] 
                mx-auto mt-8'
        >
            <label 
                htmlFor='searchInput' 
                className='
                    text-white text-lg tracking-wide 
                    m-4 ml-6'
            >
                Enter GitHub username:
            </label>

            <div 
                className='
                    w-full 
                    flex items-center justify-center'
            >
                <input 
                    type='text' 
                    id='searchInput' 
                    ref={inputRef} 
                    className='
                        bg-white 
                        w-4/5 h-5 p-5
                        rounded-l-lg 
                        focus:outline-sky-400 focus:outline-4 focus:outline focus:z-10'
                />

                <button
                    type='button' 
                    className='
                        bg-sky-700
                        p-[10.5px] rounded-r-lg focus:outline-sky-400 focus:outline-4 focus:outline
                        hover:opacity-80'
                >
                    <img className='h-5' src={searchIcon} alt='Search' />
                </button>
            </div>
        </div>
    );
};