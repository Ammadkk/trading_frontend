
import React, { useState } from 'react';

const ProfileDetailsForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the submitted data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-white text-center mb-6">Enter Profile Details</h2>

      {/* Form Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Email", name: "email" },
          { label: "Full Name", name: "fullName" },
          { label: "DOB", name: "dob" },
          { label: "Nationality", name: "nationality" },
          { label: "Address", name: "address" },
          { label: "City", name: "city" },
          { label: "Postcode", name: "postcode" },
          { label: "Country", name: "country" },
        ].map(({ label, name }) => (
          <div className="flex flex-col" key={name}>
            <label className="mb-2 text-sm font-medium text-gray-300">{label}:</label>
            <input
              type={name === 'dob' ? 'date' : 'text'}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="bg-gray-800 text-gray-300 border border-gray-600 rounded focus:ring focus:ring-blue-500 focus:outline-none transition duration-200 w-full p-4"
              required
            />
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="bg-white hover:bg-gray-400 text-black font-semibold p-2 rounded-md transition duration-200 text-lg w-full max-w-xs"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProfileDetailsForm;

