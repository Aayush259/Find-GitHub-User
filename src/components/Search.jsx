import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../images/search-light.svg';
import historyIcon from '../images/clock-rotate-left-light.svg';
import Advice from './Advice.jsx';

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
                flex flex-col mb-4 p-1 mx-auto mt-1
                max-w-4xl w-[95%] min-h-[75vh]
                bg-slate-800
                rounded-2xl'
        >
            <div className='m-4 mb-0 ml-auto'>
                <button className='
                    p-[10.5px] rounded
                    focus:outline-sky-400 focus:outline-4 focus:outline
                    hover:bg-sky-700'
                >
                    <img src={historyIcon} alt='history' width={20} />
                </button>
            </div>
            <label 
                htmlFor='searchInput' 
                className='
                    text-lg tracking-wide 
                    m-4 mt-0 ml-6'
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
                    aria-label="Enter GitHub username"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchBtnClick();
                        }
                    }}
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
            <Advice />
        </div>
    );
};