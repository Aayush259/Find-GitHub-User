import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import GitHubUserInfo from './GithubUserInfo.jsx';
import Loader from './Loader.jsx';
import UserNotFound from './UserNotFound.jsx';
import GoBackButton from './GoBackButton.jsx';
import Error from './Error.jsx';

export default function DisplayUserInfo() {

    // Getting username from URL.
    const { username } = useParams();

    // Data state.
    const [Data, setData] = useState(null);

    // Controller reference to abort the fetch request when required.
    const controllerRef = useRef(null);

    // State for return value.
    const [returnValue, setReturnValue] = useState(<Loader />);

    // This function fetches the github user data and update the Data state.
    const fetchGithubUserData = () => {

        // Initialize abort controller.
        const controller = new AbortController();
        controllerRef.current = controller;

        // URL
        const url = `https://api.github.com/users/${username}`;
        
        // Fetching Data
        fetch(url, { signal: controller.signal })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => {
            console.log('Error:', err);
            if (err.name === 'AbortError') return;  // Ignore abort errors.
            setData('error')
        });

        // Cleanup and abort fetch if component unmounts.
        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
        };
    };

    useEffect(() => {
        return fetchGithubUserData();
    }, [username]);

    useEffect(() => {

        // If Data value is not null, then display Data.
        if (Data) {
            if (Data['message']) {
                setReturnValue(<UserNotFound />);
            } else if (Data === 'error') {
                setReturnValue(<Error retry={fetchGithubUserData} />)
            } else {
                setReturnValue(<GitHubUserInfo Data={Data} />);
            }
        }
    }, [Data]);

    return (
        <>
        <GoBackButton />
        {returnValue}
        </>
    );
};