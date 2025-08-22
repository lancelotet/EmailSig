import React from 'react';

function SignatureForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Email Signature Details</h2>
      
      <label className="block">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Title</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Phone</span>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Social Link</span>
        <input
          type="url"
          name="social"
          value={formData.social}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Image URL</span>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>
    </form>
  );
}

export default SignatureForm;