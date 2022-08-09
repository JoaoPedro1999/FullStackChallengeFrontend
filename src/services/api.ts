import axios from "axios";

const api = axios.create({
  baseURL: "https://fullstackchallengeserver.herokuapp.com/",
});

export default api;
