
const CountryData = (props) => {
    
    const{countrie} = props;

    return (
        <div>
            <h4>Country Data</h4>
            <small>Area: {countrie.area} km<sup>2</sup> </small>
        </div>
    );
};

export default CountryData;