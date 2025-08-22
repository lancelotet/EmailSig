import React from 'react';
import '../styles/signature.css';

function SignaturePreview({ formData }) {
  const { name, title, phone, email, social } = formData;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
  <p className="text-xl font-bold text-gray-900">{name}</p>
  <p className="text-gray-600 italic">{title}</p>
  <p className="text-gray-700 mt-2">📞 {phone}</p>
  <p className="text-gray-700">✉️ {email}</p>
  {social && (
    <p className="text-gray-700">
      🔗 <a href={social} className="text-blue-600 underline">{social}</a>
    </p>
  )}
</div>

  );
}

export default SignaturePreview;