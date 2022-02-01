import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, transform } from "framer-motion";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ResultsSummaryChart = ({ crimeData }) => {
  const [dates, setDates] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    console.log("summary chart rendered");
    setDates(crimeData.map((data) => data.data_year));
    setCount(crimeData.map((data) => data.actual));
  }, [crimeData]);

  const options = {
    chart: {
      type: "column",
      backgroundColor: "none",
    },
    xAxis: {
      categories: dates,
      labels: {
        style: {
          color: "#efefef",
        },
      },
      crosshair: true,
      style: {
        color: "#53d126",
      },
      title: {
        text: "Year",
        style: {
          color: "#53d126",
        },
      },
    },
    yAxis: {
      min: 0,
      labels: {
        style: {
          color: "#efefef",
        },
      },
      title: {
        text: "Incidents",
        style: {
          color: "#53d126",
        },
      },
    },

    title: {
      text: crimeData[0].offense,
      style: {
        color: "#53d126",
      },
    },
    series: [{ data: count, showInLegend: false, color: "#53d126" }],
  };

  return (
    <StyledBarChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledBarChart>
  );
};

const StyledBarChart = styled(motion.div)`
  width: 100vw;
`;

export default ResultsSummaryChart;
