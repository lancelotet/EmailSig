// src/App.jsx

import React, { useState } from 'react';
import SignatureForm from './components/SignatureForm.jsx';
import SignaturePreview from './components/SignaturePreview.jsx';
import ExportButtons from './components/ExportButtons.jsx';

function App() {
  const [formData, setFormData] = useState({
    name: 'Lance Terrill',
    title: 'Project Leader | GIS & Python Specialist | AI & DevOps Innovator | Modular Solutions Architect',
    phone: '123-456-7890',
    email: 'lance.terrill@gmail.com',
    social: 'https://www.linkedin.com/in/lanceterrill',
    location: 'Houston, TX',
    imageUrl: '/SIGNATURE.png',
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6">
        <SignatureForm formData={formData} setFormData={setFormData} />
        <div>
          <SignaturePreview formData={formData} />
          <ExportButtons formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </div>
  );
}

export default App;