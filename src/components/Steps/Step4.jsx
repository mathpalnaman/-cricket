import React from "react";

export default function Step4({ formData, handleBannerUpload, prevStep, submitForm }) {
  return (
    <div>
      <h2 className="text-2xl mb-4">Step 4: Upload Banner</h2>

      <div className="mb-4">
        <input type="file" onChange={handleBannerUpload} />
        {formData.banner && (
          <div className="mt-4">
            <img src={URL.createObjectURL(formData.banner)} alt="Tournament Banner" className="max-w-full h-auto" />
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={submitForm} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
