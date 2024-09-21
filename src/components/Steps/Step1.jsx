import React from "react";

export default function Step1({ formData, handleChange, nextStep}) {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Tournament Name:</label>
        <input
          type="text"
          name="tournamentName"
          value={formData.tournamentName}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Enter the tournament name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Enter the city"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Stadium:</label>
        <input
          type="text"
          name="stadium"
          value={formData.stadium}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Enter the stadium"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Organizer Name:</label>
        <input
          type="text"
          name="organizerName"
          value={formData.organizerName}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Enter the organizer's name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
}
