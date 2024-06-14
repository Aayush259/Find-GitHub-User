import React from 'react';
import userSlash from '../images/user-slash-light.svg';

export default function UserNotFound() {

    return (
        <div className='
            max-w-xl w-[97%] min-h-[80vh]
            flex flex-col items-center'
        >
            <img 
                src={userSlash} 
                alt='User not found' 
                className='
                    block
                    mx-auto mt-20
                    w-64 h-64
                    rounded-full
                    border-4 border-slate-500'
            />
            <p className='text-2xl mt-4 font-semibold tracking-wide'>User not found</p>
        </div>
    );
};