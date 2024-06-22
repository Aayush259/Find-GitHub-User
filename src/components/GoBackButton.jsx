import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../images/arrow-left-light.svg';
import { HistoryContext } from '../historyContext/HistoryContext.jsx';

export default function GoBackButton() {

    // Getting route for going back when link is clicked.
    const { goBackRoute } = useContext(HistoryContext);

    return (
        <div className='
            max-w-4xl w-[95%] p-4
            bg-slate-800
            rounded-t-2xl'
        >
            <Link
                to={goBackRoute}
                className='
                    block w-fit
                    bg-sky-800
                    py-1 px-4
                    rounded-lg
                    hover:bg-sky-600
                    active:bg-sky-400
                    focus:outline-sky-400 focus:outline-4 focus:outline'
            >
                <img src={arrowLeft} alt='Go back' width={30} />
            </Link>
        </div>
    );
};