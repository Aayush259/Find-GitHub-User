import React from 'react';
import PropTypes from 'prop-types';
import locationIcon from '../images/location-dot-light.svg';
import buildingIcon from '../images/building-light.svg';
import linkIcon from '../images/link-light.svg';
import xIcon from '../images/x-twitter-light.svg';

GitHubUserInfo.propTypes = {
    Data: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
        name: PropTypes.string,
        bio: PropTypes.string,
        public_repos: PropTypes.number,
        followers: PropTypes.number,
        following: PropTypes.number,
        location: PropTypes.string,
        blog: PropTypes.string,
        twitter_username: PropTypes.string,
        company: PropTypes.string,
    }).isRequired
};

export default function GitHubUserInfo({ Data }) {

    return (
        <>
        <div className='
            bg-slate-800 
            mx-auto max-w-4xl w-[95%] p-4 mb-8
            flex flex-col 
            md:flex-row md:items-center md:justify-between md:gap-5
            tracking-wide rounded-b-2xl'
        >
            <div className='
                mx-auto
                min-w-[40%]
                md:w-fit'
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
                    <p className='mt-2 text-lg text-sky-300 font-semibold'>
                        <a 
                            href={`https://github.com/${Data['login']}`} 
                            target='_blank'
                            className='hover:opacity-80 hover:underline hover:underline-offset-4'
                        >
                            {Data['login']}
                        </a>
                    </p>
                </div>
            </div>

            <div className='mt-4 mx-auto w-full min-w-[50%]'>
                <p>{Data['bio'] ? Data['bio'] : 'Bio not available' }</p>

                <div className='
                    mt-5 py-3
                    px-2
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
                        <img src={linkIcon} alt='Blog' width={20} /> {Data['blog'] ? <a href={Data['blog']} target='_blank' className='hover:opacity-80 hover:underline hover:underline-offset-4'>Blog</a> : <span className='opacity-80'>Not available</span>}
                    </div>

                    <div className='flex items-center gap-3'>
                        <img src={xIcon} alt='Twitter/X' width={20} /> {Data['twitter_username'] ? <a href={`https://x.com/${Data['twitter_username']}`} target='_blank' className='hover:opacity-80 hover:underline hover:underline-offset-4'>{Data['twitter_username']}</a> : <span className='opacity-80'>Not available</span>}
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