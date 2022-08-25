import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// components
import Loading from "./Loading";
import { getSingleCountry } from "../services/fetcher";

const CountryDetails = () => {
  const [countrydetails, setCountryDetails] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const { data } = await getSingleCountry(id);
        setCountryDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div className="details-container">
      {countrydetails.country ? (
        <div className="container">
          <div className="details-container">
            <div className="img-container">
              <img src={countrydetails.countryInfo.flag} alt="flag" />
            </div>
            <h1>
              {countrydetails.country.toUpperCase()}{" "}
              <span>{countrydetails.countryInfo.iso2}</span>
            </h1>
            <p>
              <span className="info">Continent:</span>{" "}
              {countrydetails.continent}
            </p>
            <p>
              <span className="info">Population:</span>{" "}
              {countrydetails.population.toLocaleString()}
            </p>
            <p>
              <span className="info">Cases:</span>{" "}
              {countrydetails.cases.toLocaleString()}
            </p>
            <p>
              <span className="info">Deaths:</span>{" "}
              {countrydetails.deaths.toLocaleString()}
            </p>
            <p>
              <span className="info">Active:</span>{" "}
              {countrydetails.active.toLocaleString()}
            </p>
            <p>
              <span className="info">Critical:</span>{" "}
              {countrydetails.critical.toLocaleString()}
            </p>
            <p>
              <span className="info">Recovered:</span>{" "}
              {countrydetails.recovered.toLocaleString()}
            </p>
            <p>
              <span className="info">Case per people:</span>{" "}
              {countrydetails.oneCasePerPeople.toLocaleString()}
            </p>
            <p>
              <span className="info">Case per million:</span>{" "}
              {countrydetails.casesPerOneMillion.toLocaleString()}
            </p>
            <p>
              <span className="info">Deaths per people:</span>{" "}
              {countrydetails.oneDeathPerPeople.toLocaleString()}
            </p>
            <p>
              <span className="info">Deaths per million:</span>{" "}
              {countrydetails.deathsPerOneMillion.toLocaleString()}
            </p>
            <p>
              <span className="info">Tests:</span>{" "}
              {countrydetails.tests.toLocaleString()}
            </p>
            <div className="btn-container">
              <Link to="/countries">Back to country list</Link>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {/* animation */}
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default CountryDetails;