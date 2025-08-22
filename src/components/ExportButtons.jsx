import React from 'react';
import html2canvas from 'html2canvas';
import template from '../../SIGNATURE_TEMPLATE.html?raw';

function ExportButtons({ formData }) {
  const generateHTML = () => {
    const { name, title, phone, email, social, imageUrl } = formData;

    let processedTemplate = template;
    processedTemplate = processedTemplate.replace(/{{name}}/g, name || '');
    processedTemplate = processedTemplate.replace(/{{title}}/g, title || '');
    processedTemplate = processedTemplate.replace(/{{email}}/g, email || '');
    processedTemplate = processedTemplate.replace(/{{phone}}/g, phone || '');
    processedTemplate = processedTemplate.replace(/{{social}}/g, social || '');
    // Use a default image if imageUrl is not provided
    processedTemplate = processedTemplate.replace(/{{imageUrl}}/g, imageUrl || 'SIGNATURE.png');

    return processedTemplate;
  };

  const copyToClipboard = () => {
    const html = generateHTML();
    // Use the Clipboard API to copy rich text
    try {
      const blob = new Blob([html], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({ 'text/html': blob });
      navigator.clipboard.write([clipboardItem]).then(() => {
        alert('Signature copied to clipboard!');
      }, (err) => {
        console.error('Failed to copy rich text, falling back to plain text.', err);
        navigator.clipboard.writeText(html)
          .then(() => alert('Signature HTML (source code) copied to clipboard! This is a fallback.'))
          .catch(err => alert('Failed to copy.', err));
      });
    } catch (e) {
      console.error('Clipboard API not supported, falling back to plain text.', e);
      navigator.clipboard.writeText(html)
        .then(() => alert('Signature HTML (source code) copied to clipboard! This is a fallback.'))
        .catch(err => alert('Failed to copy.', err));
    }
  };

  const downloadHTML = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'email_signature.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportAsPNG = () => {
    const preview = document.querySelector('.signature-preview-container');
    if (!preview) {
        console.error('Preview element not found');
        return;
    }

    html2canvas(preview).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'email_signature.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <button
        onClick={copyToClipboard}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        📋 Copy HTML
      </button>
      <button
        onClick={downloadHTML}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        💾 Download HTML
      </button>
      <button
        onClick={exportAsPNG}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        🖼️ Export as PNG
      </button>
    </div>
  );
}

export default ExportButtons;