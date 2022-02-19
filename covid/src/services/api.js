import axios from "axios";

const GetCountriesData = async () => {
  const BASE_URL = "https://disease.sh/v3/covid-19/countries?sort=cases";
  const result = await axios.get(BASE_URL);
  return result.data;
};

export { GetCountriesData };
