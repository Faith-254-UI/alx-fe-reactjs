// src/services/githubService.js
import axios from "axios";

// Base endpoint for GitHub user data
const BASE_URL = "https://api.github.com/users";

// Function to fetch user details by username
export const fetchUserData = (username) => {
  return axios.get(`${BASE_URL}/${username}`);
};
