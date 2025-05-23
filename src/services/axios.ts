// import { useAuthStore } from "@/store/useAuthStore";
// import Axios from "axios";


// const axios = Axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const { response } = error;
//     if (response?.status === 401) {
//       useAuthStore.getState().clearUser();
//       localStorage.removeItem("authToken");

//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

// export default axios;
