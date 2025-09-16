// src/services/githubService.js
import axios from "axios";

// Base endpoint for GitHub user data
const BASE_URL = "https://api.github.com/users";

// --- Fetch single user by username ---
export const fetchUserData = (username) => {
  return axios.get(`${BASE_URL}/${username}`);
};

// --- Advanced search users ---
export const advancedSearchUsers = async ({ query, location, minRepos, page = 1 }) => {
  // Build search query
  let searchQuery = query ? `${query} in:login` : "";
  if (location) searchQuery += ` location:${location}`;
  if (minRepos) searchQuery += ` repos:>=${minRepos}`;

  // GitHub Search API endpoint
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}&page=${page}&per_page=30`;

  // Make API call
  return axios.get(url);
};
