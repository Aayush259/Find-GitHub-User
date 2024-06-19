import React, { useEffect, useState } from 'react';
import Loader from './Loader.jsx';

export default function History() {

    // State for userHistory.
    const [userHistory, setUserHistory] = useState(null);

    // Getting history from local storage.
    useEffect(() => {
        const history = JSON.parse(localStorage.getItem('history')) || [{id: null, name: 'Your search history will appear here. 😊'}];
        setUserHistory(history);
    }, []);

    // This function returns the date in the format day-month-year.
    const formatDate = (milliseconds) => {
        if (!milliseconds) return;

        const date = new Date(milliseconds);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}-${month}-${year}`;
    }

    return (
        <div className='
            flex flex-col items-center mb-4 p-2 mx-auto mt-1
            max-w-4xl w-[95%] min-h-[75vh]
            bg-slate-800
            rounded-2xl'
        >
            {
                userHistory ?
                userHistory.map((history) => <p
                    key={history.id}
                    className='
                        text-lg'
                >
                    <span>{formatDate(history['id'])}</span><span>{history['name']}</span>
                </p>) :
                <Loader />
            }
        </div>
    );
};