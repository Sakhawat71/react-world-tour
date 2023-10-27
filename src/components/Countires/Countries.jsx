/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCounties, setVisitedCountries] = useState([]);
    const [visitedCountryFlag, setVisitedCountryFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const hendelAddToVisited = (country) => {
        const newVisitedCounties = [...visitedCounties, country];
        setVisitedCountries(newVisitedCounties);
    }
    const handelAddFlagForVisitedCountry = (countryFlag) => {
        const newVisitedCountryFlag = [...visitedCountryFlag, countryFlag]
        setVisitedCountryFlag(newVisitedCountryFlag);
    }

    return (
        <div>
            <h2 className='text-center font-semibold'>Country: {countries.length}</h2>
            <div>
                <h2>Total Visited Country: {visitedCounties.length}</h2>
                <ul>
                    {
                        visitedCounties.map(country =>
                            <li key={country.cca3}>
                                {country.name.common}</li>)
                    }
                </ul>
            </div>
            <div >
                <h3>All visited Country Flags</h3>
                <figure className='flex flex-wrap'>
                    {
                        visitedCountryFlag.map(flag => <img className='w-[100px] h-[50px] m-2' key={flag} src={flag}></img>)
                    }
                </figure>
            </div>
            <div className='all-country'>
                {
                    countries.map(countrie =>
                        <Country
                            key={countrie.cca3}
                            countrie={countrie}
                            hendelAddToVisited={hendelAddToVisited}
                            handelAddFlagForVisitedCountry={handelAddFlagForVisitedCountry}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

