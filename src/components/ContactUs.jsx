import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {formSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank you for your request!</h2>
          <p>We will call you shortly.</p>
        </div>
      ) : (
        <form onSubmit={submitForm}>
          <h2 className="text-2xl font-bold mb-6 text-center">Request a Call</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="Your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="Your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="Additional details (optional)"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded w-full hover:bg-blue-600"
          >
            Request a Call
          </button>
        </form>
      )}
    </div>
  );
}
