export const crimeLookupUrl = (ori, offense, fromDate, toDate) => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const url = `https://api.usa.gov/crime/fbi/sapi/api/summarized/agencies/${ori}/${offense}/${fromDate}/${toDate}?API_KEY=${api_key}`;
  return url;
};

export const nationalStatsUrl = (summaryFromDate, summaryToDate) => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const url = `https://api.usa.gov/crime/fbi/sapi/api/estimates/national/${summaryFromDate}/${summaryToDate}?API_KEY=${api_key}`;
  return url;
};

export const oriLookupUrl = (stateAbbr) => {
  const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
  const url = `https://api.usa.gov/crime/fbi/sapi/api/agencies/byStateAbbr/${stateAbbr}?API_KEY=${api_key}`;
  return url;
};
