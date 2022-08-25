import React, { useEffect, useState } from "react";
// react-google-charts
import { Chart } from "react-google-charts";
import { getCountryStatics } from "../services/fetcher";
import Loading from "./Loading";

const CovidWorldWide = () => {
  const [worlWide, setWorlWide] = useState([]);
  // fetch data function
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const { data } = await getCountryStatics();
        setWorlWide(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  const data = [
    ["data", "statics"],
    ["Cases", worlWide.cases],
    ["Deaths", worlWide.deaths],
    ["Recovered", worlWide.recovered],
    ["Active", worlWide.active],
    ["Critical ", worlWide.critical],
    ["Affected Countries", worlWide.affectedCountries],
  ];

  const options = {
    pieHole: 0.4,
    is3D: true,
    colors: ["#3a00da", "#a03232", "#ddc700", "#208130", "#da7400"],
  };

  return (
    <div>
      {worlWide.cases ? (
        <div>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CovidWorldWide;