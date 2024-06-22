import React, { useContext } from 'react';
import { HistoryContext } from '../historyContext/HistoryContext.jsx';
import GoBackButton from './GoBackButton.jsx';
import { Link } from 'react-router-dom';

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
    };

    // This function deletes the history using its id.
    const handleRemoveHistoryBtnClick = (id) => {
        const updatedHistory = userHistory.filter((history) => history.id !== id);
        setUserHistory(updatedHistory);
    };

    // This function clears the complete history.
    const clearHistory = () => {
        setUserHistory([]);
    }

    return (
        <>
        <GoBackButton backURL={'/Find-GitHub-User/'} />
        <div className='
            flex flex-col items-center mb-4 p-2 pt-4 mx-auto
            max-w-4xl w-[95%] h-[65vh]
            relative
            overflow-y-auto
            bg-slate-800
            rounded-b-2xl'
        >
            {
                userHistory.length > 0 ?
                userHistory.map((history) => <div
                    key={history.id}
                    className='
                        text-sm w-full flex justify-between items-center
                        border-b border-slate-500 p-1
                        md:text-lg md:p-3'
                >
                    <Link
                        to={`/Find-GitHub-User/username/${history['name']}`}
                    >
                        <p className='w-full'><span className=''>{formatDate(history['id'])}</span><span className='pl-4 md:pl-7'>{history['name']}</span></p>
                    </Link>
                    <button 
                        className='
                            hover:opacity-80 hover:bg-slate-900 p-2 rounded'
                        onClick={() => {
                            handleRemoveHistoryBtnClick(history.id);
                        }}
                    >
                        <img src='https://raw.githubusercontent.com/Aayush259/Dictionary/c4256ba868a07d677bcc25ff861a58f8606969d8/src/images/xmark-light.svg' alt='Remove item' width={15} />
                    </button>
                </div>) :
                <span 
                    className='
                        text-2xl block m-auto'
                >
                    Your search history will appear here. 😊
                </span>
            }
            {
                userHistory.length > 0 && (<button
                    className='
                        sticky bottom-4 ml-auto mr-4 mt-auto
                        bg-sky-800 py-1 px-2 rounded-md
                        hover:bg-sky-600
                        active:bg-sky-400
                        focus:outline-sky-400 focus:outline-4 focus:outline'
                    onClick={clearHistory}
                >
                    Clear All
                </button>)
            }
        </div>
        </>
    );
};
