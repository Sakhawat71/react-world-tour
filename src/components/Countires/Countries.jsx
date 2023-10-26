/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const [visitedCounties, setVisitedCountries] = useState([]);
    const hendelAddToVisited = () => {
        console.log("added to list");
    }

    return (
        <div>
            <h2 className='text-center font-semibold'>Country: {countries.length}</h2>
            <div className='all-country'>
                {
                    countries.map(countrie => 
                    <Country 
                        key={countrie.cca3} 
                        countrie={countrie}
                        hendelAddToVisited={hendelAddToVisited}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;