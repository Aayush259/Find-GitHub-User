import React from 'react';
import userSlash from '../images/user-slash-light.svg';

export default function UserNotFound() {

    return (
        <>
        <div className='
            max-w-4xl w-[95%] min-h-[65vh] mb-4
            flex flex-col items-center
            bg-slate-800
            rounded-b-2xl'
        >
            <img 
                src={userSlash} 
                alt='User not found' 
                className='
                    block
                    mx-auto mt-20
                    md:mt-8
                    w-64 h-64
                    rounded-full
                    border-4 border-slate-500'
            />
            <p className='text-2xl mt-4 font-semibold tracking-wide'>User not found</p>
        </div>
        </>
    );
};