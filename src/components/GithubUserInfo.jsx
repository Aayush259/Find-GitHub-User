import React from 'react';
import locationIcon from '../images/location-dot-light.svg';
import buildingIcon from '../images/building-light.svg';
import linkIcon from '../images/link-light.svg';
import xIcon from '../images/x-twitter-light.svg';

export default function GitHubUserInfo({ Data }) {

    return (
        <>
        <div className='
            bg-slate-800 
            mx-auto max-w-4xl w-[95%] p-4 mb-8
            flex flex-col 
            md:flex-row md:items-center md:justify-center md:gap-5
            tracking-wide rounded-2xl'
        >
            <div className='
                mt-8 mx-auto
                w-full
                md:w-9/12'
            >
                <img 
                    src={Data['avatar_url']} 
                    alt={`${Data['login']} GitHub avatar`}
                    className='
                        block
                        mx-auto
                        w-64
                        rounded-full
                        border-4 border-slate-500'
                />

                <div className='text-center mt-4'>
                    <p className='text-2xl'>{Data["name"]}</p>
                    <p className='mt-2 text-lg text-sky-300 font-semibold'>{Data['login']}</p>
                </div>

            </div>

            <div className='mt-4 mx-auto'>
                <p>{Data['bio'] ? Data['bio'] : 'Bio not available' }</p>

                <div className='
                    mt-5 py-3
                    flex flex-row justify-evenly 
                    w-full rounded-md
                    bg-slate-900'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='flex gap-1 items-center text-lg'>
                            Repos
                        </p>
                        <p className='font-bold text-2xl'>
                            {Data['public_repos']}
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='flex gap-1 items-center text-lg'>
                            Followers
                        </p>
                        <p className='font-bold text-2xl'>
                            {Data['followers']}
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <p className='flex gap-1 items-center text-lg'>
                            Following
                        </p>
                        <p className='font-bold text-2xl'>
                            {Data['following']}
                        </p>
                    </div>
                </div>

                <div className='
                    mt-8 
                    flex flex-col gap-3 
                    md:grid md:grid-cols-2 md:mt-6 md:p-2 
                    text-lg break-words break-all'>
                    <div className='flex items-center gap-3'>
                        <img src={locationIcon} alt='Location' width={20} /> {Data['location'] ? Data['location'] : <span className='opacity-80'>Not available</span>}
                    </div>

                    <div className='flex items-center gap-3'>
                        <img src={linkIcon} alt='Blog' width={20} /> {Data['blog'] ? <a href={Data['blog']} target='_blank'>Blog</a> : <span className='opacity-80'>Not available</span>}
                    </div>

                    <div className='flex items-center gap-3'>
                        <img src={xIcon} alt='Twitter/X' width={20} /> {Data['twitter_username'] ? Data['twitter_username'] : <span className='opacity-80'>Not available</span>}
                    </div>

                    <div className='flex items-center gap-3'>
                        <img src={buildingIcon} alt='Company' width={20} /> {Data['company'] ? Data['company'] : <span className='opacity-80'>Not available</span>}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};