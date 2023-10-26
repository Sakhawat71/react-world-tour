/* eslint-disable*/
import { useState } from 'react';
import './Country.css';

const Country = ({ countrie }) => {
    const { name, flags } = countrie;
    const [visited,setVisited] = useState(false);

    const handelClick = () =>{
        setVisited(!visited);
    }

    console.log(countrie)
    return (
        <div className={`country ${visited ? 'bg-cyan-200' : 'bg-white'}`}>
            <figure className='h-[160px] border '>
                <img className='h-full w-full ' src={flags?.png} alt="" />
            </figure>
            <div className=' space-y-1 my-2'>
                <h2 className='text-2xl font-bold '>{name?.common}</h2>
                <p>{name?.official}</p>
                <button onClick={handelClick} className='btn bg-green-500 '>Visited</button>
                {visited ? ' I have visited the country.' : ' I want to visit this country.'}
            </div>
        </div>
    );
};

export default Country;