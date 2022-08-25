import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
// API
import { getAllCountriesList } from "../services/fetcher";
// components
import AllCountries from "./AllCountries";
import Loading from "./Loading";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const { data } = await getAllCountriesList();
        setCountries(data);
      } catch (error) {
        toast.error("Something went wrong", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
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
      <ToastContainer />
    </div>
  );
};

export default Countries;