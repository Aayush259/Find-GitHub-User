import React from 'react';

export default function Loader() {

    return (
        <div className='flex space-x-2 justify-center items-center bg-transparent h-[80vh]'>
            <span className='sr-only'>Loading...</span>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-6 w-6 bg-white rounded-full animate-bounce'></div>
        </div>
    );
};