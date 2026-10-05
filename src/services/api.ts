import axios from "axios";

export const api = axios.create({
  baseURL: "https://tu-api.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  // Aquí se puede agregar el token de sesión antes de cada request.
  console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API] Error de respuesta", error.response?.status ?? error.message);
    return Promise.reject(error);
  },
);
