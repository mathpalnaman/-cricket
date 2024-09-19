import React from "react";

export default function Step3({
  formData,
  predefinedRulesOptions,
  handleCheckboxChange,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div>
      <h2 className="text-2xl mb-4">Step 3: Add Rules</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Predefined Rules:</label>
        {predefinedRulesOptions.map((rule, index) => (
          <div key={index} className="mb-2">
            <input
              type="checkbox"
              checked={formData.predefinedRules.includes(rule)}
              onChange={() => handleCheckboxChange(rule)}
            />
            <label className="ml-2">{rule}</label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Custom Rules:</label>
        <textarea
          name="customRules"
          value={formData.customRules}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Add any custom rules"
        />
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
}
