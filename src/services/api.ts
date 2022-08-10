import axios from "axios";

const api = axios.create({
  // baseURL: "https://fullstackchallengeserver.herokuapp.com/",
  baseURL: "http://localhost:3332/",
});

export default api;
