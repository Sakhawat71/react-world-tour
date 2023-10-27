
import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {

    const { countrie} = props;

    return (
        <div>
            <h3>Country Details</h3>
            <small className={countrie.independent ? 'text-green-900' : 'text-red-700'}>{countrie.independent ? 'Independent' : 'Not Independent'}</small>

            {/* <CountryData
                countrie={countrie}
                hendelAddToVisited={hendelAddToVisited}
                handelAddFlagForVisitedCountry={handelAddFlagForVisitedCountry}
            ></CountryData> */}

            {/* prop drilling */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;