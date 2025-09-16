import React from "react";

export default function UserCard({ user }) {
  if (!user) return null;
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6, maxWidth: 720 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <img src={user.avatar_url} alt={user.login} width={90} style={{ borderRadius: 8 }} />
        <div>
          <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
          <p style={{ margin: "6px 0" }}>
            <strong>@{user.login}</strong> · <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
          </p>
          {user.bio && <p style={{ margin: "6px 0" }}>{user.bio}</p>}
          <p style={{ margin: "6px 0", fontSize: 13 }}>
            {user.public_repos ?? 0} repos · {user.followers ?? 0} followers · {user.following ?? 0} following
          </p>
        </div>
      </div>
    </div>
  );
}
