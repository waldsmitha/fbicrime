import React from "react";

//Styling
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <StyledAbout>
      <h2>About Menu</h2>
      <p>
        The FBI Crime Data API is a read-only web service that returns JSON or
        CSV data. It is broadly organized around the data reporting systems the
        FBI UCR program uses and their related entities. Agencies submit data
        using one of two reporting formats -- the Summary Reporting System
        (SRS), or the National Incident Based Reporting System (NIBRS). SRS data
        is the legacy format that provides aggregated counts of the reported
        crime offenses known to law enforcement by location.
      </p>
      <p>
        NIBRS is a newer format that provides an incident-based view of crime.
        It includes information about each offense, such as the time of day an
        incident occurred, the demographics of the offenders/victims, the known
        relationships between the offenders and victims, and many other details
        around how and where crime occurs. Neither format includes personally
        identifiable information (PII) about the offenders or victims. While
        many agencies submit SRS data, the FBI plans to transition all crime
        reporting to the NIBRS format by 2021.
      </p>
      <p>
        Other UCR data collection systems made available by this API include:
      </p>
      <ul>
        <li>Summarized Agency Data </li>
        <li>NIBRS Counts</li>
        <li>Police Employment Data State</li>
        <li>Agency Participation Data</li>
      </ul>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  padding: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin: 2rem 0;
  }
`;

export default About;
