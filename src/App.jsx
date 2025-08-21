import { useState } from 'react';
import SignatureForm from './components/SignatureForm';
import SignaturePreview from './components/SignaturePreview';
import ExportButtons from './components/ExportButtons';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    social: '',
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