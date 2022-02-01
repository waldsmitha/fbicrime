import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, transform } from "framer-motion";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = ({ data, dateRange, text }) => {
  useEffect(() => {
    console.log("bar chart rendered");
  }, []);

  const options = {
    chart: {
      type: "column",
      backgroundColor: "none",
    },
    xAxis: {
      categories: dateRange,
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
        text: "Years (2000 - 2020)",
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
      text: text.title,
      style: {
        color: "#53d126",
      },
    },
    series: [{ data: data, showInLegend: false, color: "#53d126" }],
  };

  return (
    <StyledBarChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledBarChart>
  );
};

const StyledBarChart = styled(motion.div)``;

export default BarChart;
