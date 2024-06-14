import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GitHubUserInfo from './GithubUserInfo';
import Loader from './Loader.jsx';
import UserNotFound from './UserNotFound.jsx';

export default function DisplayUserInfo() {

    // Getting username from URL.
    const { username } = useParams();

    // Data state.
    const [Data, setData] = useState(null);

    // State for return value.
    const [returnValue, setReturnValue] = useState(<Loader />);

    useEffect(() => {

        // URL
        const url = `https://api.github.com/users/${username}`;
        
        // Fetching Data
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log('Error:', err));

    }, [username])

    useEffect(() => {

        // If Data value is not null, then display Data.
        if (Data) {
            if (Data['message']) {
                setReturnValue(<UserNotFound />);
            } else {
                setReturnValue(<GitHubUserInfo Data={Data} />);
            }
        }
    }, [Data])

    return (
        <>
        {returnValue}
        </>
    );
};