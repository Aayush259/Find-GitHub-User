import React, { useEffect, useState } from 'react';
import Loader from './Loader.jsx';

export default function Advice() {

    // State for keeping advice.
    const [advice, setAdvice] = useState(null);

    // This function fetch random advice from  advice slip API.
    const getAdvice = () => {

        // Fetching random advice.
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => setAdvice(data))
        .catch(err => console.log('Error:', err));

        // Clean advice when component unmounts.
        return () => {
            setAdvice(null);
        };
    };

    useEffect(getAdvice, []);

    return (
        <div className='
            p-4 text-center
            font-Manrope text-2xl font-semibold h-full'
        >
            {advice ? 
            <>
            <p className='mt-24'>
                <span className='text-4xl'>&ldquo;</span> {advice['slip']['advice']} <span className='text-4xl'>&rdquo;</span>
            </p>
            </> :
            <Loader />}
        </div>
    );
};
