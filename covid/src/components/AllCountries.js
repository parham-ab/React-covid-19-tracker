import React from "react";
import { Link } from "react-router-dom";

const AllCountries = ({ countryData }) => {
  return (
    <div>
      <div className="all-countries">
        <Link to={`${countryData.country}`}>
          <div className="country-info">
            <img src={countryData.countryInfo.flag} alt="flag" />
            <h1>{countryData.country.toUpperCase()}</h1>
          </div>
        </Link>
        <p>{countryData.cases.toLocaleString()}</p>
        <p>{countryData.deaths.toLocaleString()}</p>
        <p>{countryData.recovered.toLocaleString()}</p>
        <p>{countryData.oneCasePerPeople.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default AllCountries;
