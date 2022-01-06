import axios from "axios";

export const fetchApi = async (full_url) => {
  try {
    const data = await axios.get(full_url);
    console.log(data);
    return data.data.results;
  } catch (e) {
    console.log(e);
  }
};
