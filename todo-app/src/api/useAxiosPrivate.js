// Axios
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useAxios = () => {
  const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  return axiosPrivate;
};

export default useAxios;
