import React from 'react';

export default function Header() {

    return (
        <div className='
            my-4 mt-0 mx-auto
            max-w-4xl w-[95%]
            p-4
            flex justify-between items-center
            bg-slate-800
            rounded-b-md
            md:rounded-md md:mt-10
            text-xl font-normal tracking-wide'
        >
            <h1>
                DevFinder
            </h1>

            <a className='cursor-pointer' href='https://github.com/Aayush259' target='_blank'>
                <img 
                    src='https://avatars.githubusercontent.com/u/159794430?v=4' 
                    alt='Aayush' 
                    className='
                        h-9 rounded-full
                        hover:opacity-80'
                />
            </a>
        </div>
    );
};