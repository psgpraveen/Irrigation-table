import React from "react";
import "../styles/StatusBadge.css";

export default function StatusBadge({ status }) {
  let className = "status-badge";
  
  if (status === "Done") {
    className += " done";
  } else if (status === "In Progress") {
    className += " inprogress";
  } else {
    className += " pending";
  }
  
  return <span className={className}>{status}</span>;
}
