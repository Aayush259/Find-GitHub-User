import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../images/search-light.svg';

export default function Search() {

    const navigate = useNavigate();

    // Reference to input element.
    const inputRef = useRef();

    const handleSearchBtnClick = () => {
        if (inputRef.current.value) {
            navigate(`/Find-GitHub-User/username/${inputRef.current.value}`);
        }
    };

    return (
        <div 
            className='
                flex flex-col 
                max-w-xl w-[97%] min-h-[80vh]
                mx-auto mt-8'
        >
            <label 
                htmlFor='searchInput' 
                className='
                    text-lg tracking-wide 
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
                        bg-white text-slate-950
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
                    onClick={handleSearchBtnClick}
                >
                    <img className='h-5' src={searchIcon} alt='Search' />
                </button>
            </div>
        </div>
    );
};