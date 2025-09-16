import React, { useState } from "react";
import { getUser, searchUsers } from "../services/api";
import { fetchUserData } from "../services/githubService"; // 🔹 Task 1 import
import UserCard from "./UserCard";

export default function Search() {
  const [q, setQ] = useState("");
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Existing "Get User" handler
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

  // Existing "Search" handler
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

  // 🔹 New Task 1 handler: Fetch a single user with githubService
  const handleFetchUserData = async () => {
    const username = q.trim();
    if (!username) return;
    setLoading(true); setError(""); setResults([]); setUser(null);
    try {
      const res = await fetchUserData(username);
      setUser(res.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Looks like we can’t find the user.");
      } else {
        setError("Something went wrong. Try again.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Enter GitHub username or search keywords"
          style={{ flex: 1, padding: "8px 10px" }}
        />
        <button onClick={handleGetUser}>Get User</button>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleFetchUserData}>Fetch User (Task 1)</button> {/* 🔹 New */}
      </div>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: 12 }}>
          {/* 🔹 Task 1 requires avatar, name, link */}
          <img src={user.avatar_url} alt={user.login} width={80} style={{ borderRadius: "50%" }} />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">Visit Profile</a>

          {/* Keep your existing UserCard for consistency */}
          <UserCard user={user} />
        </div>
      )}

      {results.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3>Search results</h3>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {results.map((r) => (
              <div key={r.id} style={{ border: "1px solid #eee", padding: 8, borderRadius: 6 }}>
                <img src={r.avatar_url} alt={r.login} width={60} style={{ borderRadius: 6 }} />
                <h4 style={{ margin: "6px 0" }}>{r.login}</h4>
                <a href={r.html_url} target="_blank" rel="noreferrer">Profile</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
