/* eslint-disable*/
import './Country.css';

const Country = ({ countrie }) => {
    const { name, flags } = countrie;

    console.log(countrie)
    return (
        <div className='country'>
            <figure className='h-[160px] border '>
                <img className='h-full w-full' src={flags?.png} alt="" />
            </figure>
            <div className=' space-y-1 my-2'>
                <h2 className='text-2xl font-bold'>{name?.common}</h2>
                <p>{name?.official}</p>
            </div>
        </div>
    );
};

export default Country;