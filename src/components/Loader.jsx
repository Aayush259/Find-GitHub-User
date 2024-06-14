import React from 'react';

export default function Loader() {

    return (
        <div class='flex space-x-2 justify-center items-center bg-transparent h-[80vh]'>
            <span class='sr-only'>Loading...</span>
            <div class='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-8 w-8 bg-white rounded-full animate-bounce'></div>
        </div>
    );
};