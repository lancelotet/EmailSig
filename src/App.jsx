import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import SignatureForm from './components/SignatureForm';
import SignaturePreview from './components/SignaturePreview';
import ExportButtons from './components/ExportButtons';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    name: 'Lance Terrill',
    title: 'Project Leader | GIS & Python Specialist | AI & DevOps Innovator | Modular Solutions Architect',
    email: 'lance.terrill@gmail.com',
    phone: '',
    location: '',
    linkedin: 'https://www.linkedin.com/in/lanceterrill',
    profileImage: 'SIGNATURE.png',
  });

  const getSignatureHTML = () => {
    // This is a simplified version for demonstration.
    // For a real-world scenario, you would use a more robust templating solution.
    const signatureComponent = <SignaturePreview formData={formData} />;
    const html = ReactDOMServer.renderToStaticMarkup(signatureComponent);
    // A simple regex to clean up some of the React-specific attributes.
    return html.replace(/ data-reactroot=""/g, '');
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Email Signature Generator</h1>
        <p className="text-lg text-gray-600">Create your professional email signature</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SignatureForm formData={formData} setFormData={setFormData} />
        <div>
          <SignaturePreview formData={formData} />
          <ExportButtons getSignatureHTML={getSignatureHTML} />
        </div>
      </main>
    </div>
  );
}

export default App;