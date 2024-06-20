import React, { useContext } from 'react';
import { HistoryContext } from '../historyContext/HistoryContext.jsx';

export default function History() {

    // Getting history from context.
    const { userHistory, setUserHistory } = useContext(HistoryContext);

    // This function returns the date in the format day-month-year.
    const formatDate = (milliseconds) => {
        if (!milliseconds) return;

        const date = new Date(milliseconds);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return `${day}-${month}-${year}`;
    }

    // This function deletes the history using its id.
    const handleRemoveHistoryBtnClick = (id) => {
        const updatedHistory = userHistory.filter((history) => history.id !== id);
        setUserHistory(updatedHistory);
    };

    return (
        <div className='
            flex flex-col items-center mb-4 p-2 pt-4 mx-auto mt-1
            max-w-4xl w-[95%] min-h-[75vh]
            bg-slate-800
            rounded-2xl'
        >
            {
                userHistory.length > 0 ?
                userHistory.map((history) => <div
                    key={history.id}
                    className='
                        text-lg w-full flex justify-between
                        border-b border-slate-500 p-3'
                >
                    <p className='w-full'><span className=''>{formatDate(history['id'])}</span><span className='pl-7'>{history['name']}</span></p>
                    <button 
                        className='
                            hover:opacity-80'
                        onClick={() => {
                            handleRemoveHistoryBtnClick(history.id);
                        }}
                    >
                        <img src='https://raw.githubusercontent.com/Aayush259/Dictionary/c4256ba868a07d677bcc25ff861a58f8606969d8/src/images/xmark-light.svg' alt='Remove item' width={20} />
                    </button>
                </div>) :
                <span 
                    className='
                        text-2xl block m-auto'
                >
                    Your search history will appear here. 😊
                </span>
            }
        </div>
    );
};