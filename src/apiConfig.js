// src/apiConfig.js

const LOCAL_API = "http://localhost:5000";
const PROD_API = "https://fuel-ai-backend.onrender.com"; // ← apna actual backend URL

export const API_BASE_URL =
  window.location.hostname === "localhost"
    ? LOCAL_API
    : PROD_API;