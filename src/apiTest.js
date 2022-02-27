const useUrls = () => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const base_url = "https://api.usa.gov/crime/fbi/sapi";

  function sum(a, b) {
    return a + b;
  }

  const crimeSearchURL = (
    ori = "MA0092700",
    offense = "arson",
    fromDate = 2000,
    toDate = 2020
  ) => {
    const url_extension = `/api/summarized/agencies/${ori}/${offense}/${fromDate}/${toDate}`;
    const full_url = `${base_url}${url_extension}?API_KEY=${api_key}`;
    return full_url;
  };

  const nationalStatsURL = (summaryFromDate = 2000, summaryToDate = 2020) => {
    const url_extension = `/api/estimates/national/${summaryFromDate}/${summaryToDate}`;
    const full_url = `${base_url}${url_extension}?API_KEY=${api_key}`;
    return full_url;
  };

  const oriSearchURL = (stateAbbr) => {
    const url_extension = `/api/agencies/byStateAbbr/${stateAbbr}`;
    const full_url = `${base_url}${url_extension}?API_KEY=${api_key}`;
    return full_url;
    // console.log("test");
  };

  return { sum, crimeSearchURL, nationalStatsURL, oriSearchURL };
};

export default useUrls;
