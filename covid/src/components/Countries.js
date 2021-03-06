import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
// API
import { GetCountriesData } from "../services/api";
// components
import AllCountries from "./AllCountries";
import Loading from "./Loading";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await GetCountriesData());
    };
    fetchAPI();
  }, []);

  return (
    <div className="countries-container">
      {countries.length ? (
        <div>
          <div className="guide-container">
            <ul>
              <li>Country</li>
              <li>Cases</li>
              <li>Deaths</li>
              <li>Recovered</li>
              <li>Case per people</li>
            </ul>
          </div>
          {countries.map((item) => (
            <AllCountries key={v4()} countryData={item} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Countries;
