<<<<<<< HEAD
export const crimeLookupUrl = (ori, offense, fromDate, toDate) => {
=======
import axios from "axios";

const api_key = "RnB11smJPJgbMz12xdd3ahybuWdmif2ZsUsaWy8p";
const base_url = "https://api.usa.gov/crime/fbi/sapi";

export const fetchSelectionApi = async (ori, offense, fromDate, toDate) => {
>>>>>>> 21d4c68247b97b56b2f7458329450c2d0f0b381f
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
