import axios from "axios"

const axiosInstance = axios.create({
  //Local instance of firebase functionsgi
  // baseURL: "http://127.0.0.1:5001/clone-a1e6b/us-central1/api",

  //deployed version of firebase function
  baseURL: import.meta.env.VITE_FUNCTIONS_BASE_URL,

  //deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-tjtq.onrender.com",
});

export {axiosInstance};