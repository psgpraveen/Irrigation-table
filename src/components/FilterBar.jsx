import React from "react";
import "../styles/FilterBar.css";

export default function FilterBar({ filters, setFilters, plots }) {
  const plotOptions = Array.from({ length: plots }, (_, i) => `D${i + 1}`);

  return (
    <div className="filter-bar">
      <div>
        <label>Plot:</label>
        <select
          value={filters.plot}
          onChange={(e) => setFilters({ ...filters, plot: e.target.value })}
        >
          <option value="All">All</option>
          {plotOptions.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Status:</label>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </div>
  );
}
