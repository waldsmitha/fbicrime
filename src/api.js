import axios from "axios";

export const Urls = () => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const base_url = "https://api.usa.gov/crime/fbi/sapi";

  const fetchCrimeSearchApi = async (ori, offense, fromDate, toDate) => {
    const url_extension = `/api/summarized/agencies/${ori}/${offense}/${fromDate}/${toDate}`;
    const full_url = `${base_url}${url_extension}?API_KEY=${api_key}`;
    const data = await axios.get(full_url);
    return data.data.results;
  };

  const nationalStatsUrl = (summaryFromDate = 2000, summaryToDate = 2020) => {
    const url_extension = `/api/estimates/national/${summaryFromDate}/${summaryToDate}`;
    const full_url = `${base_url}${url_extension}?API_KEY=${api_key}`;
    return full_url;
  };

  const fetchOriApi = async (stateAbbr) => {
    const url_extension = `/api/agencies/byStateAbbr/${stateAbbr}`;
    const full_url = `${base_url}${url_extension}?API_KEY=${api_key}`;
    const data = await axios.get(full_url);
    return data.data.results;
  };

  return {
    fetchOriApi,
    fetchCrimeSearchApi,
    nationalStatsUrl,
  };
};
