import React from "react";
import StatusBadge from "./StatusBadge";
import "../styles/Table.css";

export default function IrrigationTable({ chart, filters, getStatus }) {
  const filtered = chart.filter((row) => {
    const status = getStatus(row);
    let plotMatch = 
      filters.plot === "All" || row.plot === filters.plot;
    let statusMatch =
      filters.status === "All" || status === filters.status;
    return plotMatch && statusMatch;
  });

  return (
    <div>
      <div className="table-header">
        <span>Your Irrigation Cycles</span>
        <span className="total-count">Total: {filtered.length}</span>
      </div>
      <div className="table-container">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Plot</th>
              <th>Motor</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.index}>
                <td>{row.index + 1}</td>
                <td>{row.plot}</td>
                <td>{row.RunBy}</td>
                <td>{row.startTime}</td>
                <td>{row.endTime}</td>
                <td>
                  <StatusBadge status={getStatus(row)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length > 0 && (
        <div className="pagination">
          <span>1-{filtered.length} of {filtered.length}</span>
          <div className="pagination-controls">
            <button disabled>«</button>
            <button disabled>‹</button>
            <span className="current-page">1</span>
            <button disabled>›</button>
            <button disabled>»</button>
          </div>
        </div>
      )}
    </div>
  );
}
