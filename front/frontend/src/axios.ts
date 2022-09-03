import axios from "axios";

const instatnce = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instatnce;
