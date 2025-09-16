import React, { useState } from "react";
import { getUser, searchUsers } from "../services/api";
import { fetchUserData, advancedSearchUsers } from "../services/githubService";
import UserCard from "./UserCard";

export default function Search() {
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Basic "Get User" handler
  const handleGetUser = async () => {
    const username = q.trim();
    if (!username) return;
    setLoading(true); setError(""); setResults([]); setUser(null);
    try {
      const res = await getUser(username);
      setUser(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) setError("User not found.");
      else setError("Request failed. Check console for details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Basic search handler
  const handleSearch = async () => {
    const query = q.trim();
    if (!query) return;
    setLoading(true); setError(""); setResults([]); setUser(null);
    try {
      const res = await searchUsers(query);
      setResults(res.data.items || []);
    } catch (err) {
      setError("Search failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Task 1: Fetch user via form submission
  const handleFetchUserData = async (e) => {
    e.preventDefault();
    const username = q.trim();
    if (!username) return;
    setLoading(true); setError(""); setResults([]); setUser(null);
    try {
      const res = await fetchUserData(username);
      setUser(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Looks like we cant find the user");
      } else {
        setError("Something went wrong. Try again.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Task 2: Advanced search handler
  const handleAdvancedSearch = async () => {
    const query = q.trim();
    if (!query) return;
    setLoading(true); setError(""); setResults([]); setUser(null);
    try {
      const res = await advancedSearchUsers({ query, location, minRepos });
      setResults(res.data.items || []);
    } catch (err) {
      setError("Advanced search failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Task 1 form */}
      <form onSubmit={handleFetchUserData} className="flex gap-2 mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="GitHub username"
          className="flex-1 border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">Fetch User</button>
      </form>

      {/* Advanced search inputs */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 rounded flex-1 min-w-[120px]"
        />
        <input
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          type="number"
          placeholder="Min Repositories"
          className="border p-2 rounded min-w-[120px]"
        />
        <button
          onClick={handleAdvancedSearch}
          className="bg-green-500 text-white px-4 rounded"
        >
          Advanced Search
        </button>
      </div>

      {/* Existing buttons */}
      <div className="flex gap-2 mb-4">
        <button onClick={handleGetUser} className="bg-gray-500 text-white px-4 rounded">Get User</button>
        <button onClick={handleSearch} className="bg-gray-500 text-white px-4 rounded">Search</button>
      </div>

      {/* Status messages */}
      {loading && <p className="text-blue-500">Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Single user display */}
      {user && (
        <div className="mt-4 border p-4 rounded flex items-center gap-4">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
          <div>
            <h3 className="font-bold text-lg">{user.name || user.login}</h3>
            <p>{user.location}</p>
            <p>Repos: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline">Visit Profile</a>
          </div>
        </div>
      )}

      {/* Results grid */}
      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Search Results</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.id} className="border p-3 rounded flex flex-col items-center">
                <img src={r.avatar_url} alt={r.login} className="w-16 h-16 rounded" />
                <h4 className="mt-2 font-semibold">{r.login}</h4>
                {r.location && <p>Location: {r.location}</p>}
                {r.public_repos != null && <p>Repos: {r.public_repos}</p>}
                <a href={r.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline mt-1">Profile</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
