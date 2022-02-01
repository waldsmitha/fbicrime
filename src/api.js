import axios from "axios";

export const fetchSelectionApi = async (ori, offense, fromDate, toDate) => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const base_url = "https://api.usa.gov/crime/fbi/sapi";
  const url_extension = `/api/summarized/agencies/${ori}/${offense}/${fromDate}/${toDate}?API_KEY=${api_key}`;
  const full_url = `${base_url}${url_extension}`;

  const data = await axios.get(full_url);
  return data.data.results;
};

export const fetchSummaryApi = async (summaryFromDate, summaryToDate) => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const base_url = "https://api.usa.gov/crime/fbi/sapi";
  const url_extension = `/api/estimates/national/${summaryFromDate}/${summaryToDate}?API_KEY=${api_key}`;
  const full_url = `${base_url}${url_extension}`;

  const data = await axios.get(full_url);
  return data.data.results;
};

export const fetchOriApi = async (stateAbbr) => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const base_url = "https://api.usa.gov/crime/fbi/sapi";
  const url_extension = `/api/agencies/byStateAbbr/${stateAbbr}?API_KEY=${api_key}`;
  const full_url = `${base_url}${url_extension}`;

  const data = await axios.get(full_url);
  return data.data.results;
};
