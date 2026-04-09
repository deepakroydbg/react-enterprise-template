import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Optional: interceptors (future)
apiClient.interceptors.request.use((config) => {
  // attach token if needed
  return config;
});