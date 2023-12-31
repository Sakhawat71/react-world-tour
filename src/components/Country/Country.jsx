/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ countrie , hendelAddToVisited,handelAddFlagForVisitedCountry}) => {
    const { name, flags , cca3} = countrie;
    const [visited,setVisited] = useState(false);

    const handelClick = () =>{
        setVisited(!visited);
    }

    // console.log(countrie)
    return (
        <div className={`country ${visited ? 'bg-cyan-200' : 'bg-white'}`}>
            <figure className='h-[160px] border '>
                <img className='h-full w-full ' src={flags?.png} alt="" />
            </figure>
            <div className=' space-y-1 my-2'>
                <h2 style={{color: visited && 'red'}} className='text-2xl font-bold '>{name?.common}</h2>
                <p>{name?.official}</p>
                <button onClick={handelClick} className='btn bg-green-500 '>Visited</button>
                {visited ? ' I have visited the country.' : ' I want to visit this country.'}
            </div>
            <button onClick={() => hendelAddToVisited(countrie)} className='btn  normal-case'>Add to Visited</button>
            <button onClick={()=> handelAddFlagForVisitedCountry(countrie.flags?.png)} className='btn normal-case mb-2'>Add country Flag</button>
            <hr />
            <CountryDetail
            countrie={countrie}
            hendelAddToVisited={hendelAddToVisited}
            handelAddFlagForVisitedCountry={handelAddFlagForVisitedCountry}
            ></CountryDetail>
        </div>
    );
};

export default Country;