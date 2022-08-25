import http from "./http";

export const getAllCountriesList = () => {
  return http.get("/countries?sort=cases");
};
