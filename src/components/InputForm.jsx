import React, { useState } from "react";
import "../styles/Form.css";

export default function InputForm({ onSubmit }) {
  const [form, setForm] = useState({
    plots: 4,
    motors: 2,
    startTime: "00000",
    endTime: "190000",
    motorRuntime: 5,
    interval: 20,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...form,
      plots: Number(form.plots),
      motors: Number(form.motors),
      motorRuntime: Number(form.motorRuntime),
      interval: Number(form.interval),
    });
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Number of Plots</label>
        <input
          type="number"
          name="plots"
          min="1"
          max="20"
          value={form.plots}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label>Motors in Parallel</label>
        <input
          type="number"
          name="motors"
          min="1"
          max="10"
          value={form.motors}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label>Start Time (HHMMSS)</label>
        <input
          type="text"
          name="startTime"
          value={form.startTime}
          onChange={handleChange}
          pattern="\d{6}"
          required
        />
      </div>
      <div className="form-field">
        <label>End Time (HHMMSS)</label>
        <input
          type="text"
          name="endTime"
          value={form.endTime}
          onChange={handleChange}
          pattern="\d{6}"
          required
        />
      </div>
      <div className="form-field">
        <label>Motor Runtime (minutes)</label>
        <input
          type="number"
          name="motorRuntime"
          min="1"
          max="60"
          value={form.motorRuntime}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label>Irrigation Cycle Interval (minutes)</label>
        <input
          type="number"
          name="interval"
          min="0"
          max="120"
          value={form.interval}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Generate Schedule</button>
    </form>
  );
}
