import React, { useState } from "react";
import { getUser, searchUsers } from "../services/api";
import { fetchUserData, advancedSearchUsers } from "../services/githubService";

export default function Search() {
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  // --- Basic Fetch Single User ---
  const handleFetchUserData = async (e) => {
    e.preventDefault();
    const username = q.trim();
    if (!username) return;
    setLoading(true);
    setError("");
    setUser(null);
    setResults([]);
    try {
      const res = await fetchUserData(username);
      setUser(res.data);
    } catch (err) {
      setError(err.response?.status === 404 ? "User not found." : "Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // --- Basic Search ---
  const handleSearch = async () => {
    const query = q.trim();
    if (!query) return;
    setLoading(true);
    setError("");
    setResults([]);
    setUser(null);
    try {
      const res = await searchUsers(query);
      setResults(res.data.items || []);
      setPage(1);
    } catch (err) {
      setError("Search failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // --- Advanced Search ---
  const handleAdvancedSearch = async () => {
    const query = q.trim();
    if (!query) return;
    setLoading(true);
    setError("");
    setResults([]);
    setUser(null);
    try {
      const res = await advancedSearchUsers({ query, location, minRepos, page: 1 });
      setResults(res.data.items || []);
      setPage(1);
    } catch (err) {
      setError("Advanced search failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // --- Load More Results (Pagination) ---
  const loadMore = async () => {
    const query = q.trim();
    if (!query) return;
    setLoading(true);
    try {
      const res = await advancedSearchUsers({ query, location, minRepos, page: page + 1 });
      setResults(prev => [...prev, ...(res.data.items || [])]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError("Failed to load more users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Fetch Single User */}
      <form onSubmit={handleFetchUserData} className="flex gap-2 mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="GitHub username"
          className="flex-1 border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">Fetch User</button>
      </form>

      {/* Advanced Search Inputs */}
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

      {/* Existing Buttons */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => handleSearch()} className="bg-gray-500 text-white px-4 rounded">Search</button>
      </div>

      {/* Status Messages */}
      {loading && <p className="text-blue-500">Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Single User Display */}
      {user && (
        <div className="mt-4 border p-4 rounded flex items-center gap-4">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
          <div>
            <h3 className="font-bold text-lg">{user.name || user.login}</h3>
            {user.location && <p>📍 {user.location}</p>}
            <p>Repos: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline">Visit Profile</a>
          </div>
        </div>
      )}

      {/* Search Results Grid */}
      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Search Results</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.id} className="border p-3 rounded flex flex-col items-center">
                <img src={r.avatar_url} alt={r.login} className="w-16 h-16 rounded" />
                <h4 className="mt-2 font-semibold">{r.login}</h4>
                {r.location && <p>📍 {r.location}</p>}
                {r.public_repos != null && <p>Repos: {r.public_repos}</p>}
                <a href={r.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline mt-1">Profile</a>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {results.length >= 30 && (
            <button
              onClick={loadMore}
              className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}
