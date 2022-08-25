import http from "./http";

export const getAllCountriesList = () => {
  return http.get("/countries?sort=cases");
};
export const getSingleCountry = (countryId) => {
  return http.get(`/countries/${countryId}`);
};
export const getCountryStatics = () => {
  return http.get(`/all`);
};