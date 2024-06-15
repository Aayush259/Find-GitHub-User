import React from 'react';
import PropTypes from 'prop-types';

Error.propTypes = {
    retry: PropTypes.func.isRequired
};

export default function Error({ retry }) {

    return (
        <div className='
            max-w-4xl w-[95%] min-h-[80vh] mb-4
            flex flex-col items-center
            bg-slate-800
            rounded-b-2xl
            text-2xl'
        >
            <p className='mt-40'>Something went wrong 😬</p>
            <button 
                onClick={retry}
                className='
                    mt-4 py-1 px-4
                    rounded-md text-xl
                    bg-sky-800 hover:bg-sky-600 active:bg-sky-400'
            >
                Retry
            </button>
        </div>
    );
};