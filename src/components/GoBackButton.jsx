import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowLeft from '../images/arrow-left-light.svg';

export default function GoBackButton( {backURL} ) {

    // Getting navigate function from useNavigateHook.
    const navigate = useNavigate();

    // THis function navigates to the back URL when button is clicked.
    const handleBackBtnClick = () => {
        navigate(backURL);
    };

    return (
        <div className='
            max-w-4xl w-[95%] p-4
            bg-slate-800
            rounded-t-2xl'
        >
            <button
                type='button'
                onClick={handleBackBtnClick}
                className='
                    bg-sky-800
                    py-1 px-4
                    rounded-lg
                    hover:bg-sky-600
                    active:bg-sky-400'
            >
                <img src={arrowLeft} alt='Go back' width={30} />
            </button>
        </div>
    );
};