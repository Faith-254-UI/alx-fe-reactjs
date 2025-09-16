import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = token ? { Authorization: `token ${token}` } : {};

const API = axios.create({
  baseURL: "https://api.github.com",
  headers,
});

// Get one user by username
export const getUser = (username) => API.get(`/users/${username}`);

// Search users by query (returns items array)
export const searchUsers = (query, per_page = 30) =>
  API.get(`/search/users`, { params: { q: query, per_page } });

export default API;
