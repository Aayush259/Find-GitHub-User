import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GitHubUserInfo from './GithubUserInfo';
import Loader from './Loader.jsx';

export default function DisplayUserInfo() {

    // Getting username from URL.
    const { username } = useParams();

    // Data state.
    const [Data, setData] = useState(null);

    useEffect(() => {

        // URL
        const url = `https://api.github.com/users/${username}`;
        
        // Fetching Data
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log('Error:', err));

    }, [username])

    return (
        <>
        {Data ? <GitHubUserInfo Data={Data} /> : <Loader />}
        </>
    );
};