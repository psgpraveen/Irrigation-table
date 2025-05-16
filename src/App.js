import React, { useState } from "react";
import InputForm from "./components/InputForm";
import FilterBar from "./components/FilterBar";
import IrrigationTable from "./components/IrrigationTable";
import useIrrigationChart from "./hooks/useIrrigationChart";
import { getCurrentTime } from "./utils";
import "./styles/App.css";

export default function App() {
  const [inputs, setInputs] = useState(null);
  const [filters, setFilters] = useState({ plot: "All", status: "All" });

  const chart = useIrrigationChart(
    inputs?.plots,
    inputs?.motors,
    inputs?.startTime,
    inputs?.endTime,
    inputs?.motorRuntime,
    inputs?.interval
  );

  // Status calculation
  function getStatus(row) {
    const now = getCurrentTime();
    if (now < row.startTime) return "Pending";
    if (now >= row.startTime && now <= row.endTime) return "In Progress";
    return "Done";
  }

  return (
    <div className="header-bg">
      <h1 className="main-title">Irrigation Cycle Scheduler</h1>
      <div className="main-card">
        <InputForm onSubmit={setInputs} />
        {inputs && (
          <>
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              plots={inputs.plots}
            />
            <IrrigationTable
              chart={chart}
              filters={filters}
              getStatus={getStatus}
            />
          </>
        )}
      </div>
    </div>
  );
}
