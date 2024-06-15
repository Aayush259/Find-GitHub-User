import React from 'react';

export default function Loader() {

    return (
        <div className='flex space-x-2 justify-center items-center bg-slate-800 h-[80vh] max-w-4xl w-[95%] rounded-b-2xl mb-4' role='status' aria-label='Loading'>
            <span className='sr-only'>Loading...</span>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce'></div>
        </div>
    );
};