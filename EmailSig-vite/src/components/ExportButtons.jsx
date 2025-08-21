import React from 'react';
import html2canvas from 'html2canvas';

function ExportButtons({ formData }) {
  const generateHTML = () => {
    const { name, title, phone, email, social } = formData;
    return `
      <div style="font-family: Arial, sans-serif;">
        <p style="font-weight: bold; font-size: 1.2em;">${name}</p>
        <p style="font-style: italic; color: #666;">${title}</p>
        <p style="color: #444;">📞 ${phone}</p>
        <p style="color: #444;">✉️ ${email}</p>
        ${social ? `<p style="color: #444;">🔗 <a href="${social}">${social}</a></p>` : ''}
      </div>
    `;
  };

  const copyToClipboard = () => {
    const html = generateHTML();
    navigator.clipboard.writeText(html)
      .then(() => alert('Signature HTML copied to clipboard!'))
      .catch(() => alert('Failed to copy. Try again.'));
  };

  const exportAsPNG = () => {
    const preview = document.querySelector('.signature-block');
    if (!preview) return;

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
    onClick={exportAsPNG}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
  >
    🖼️ Export as PNG
  </button>
</div>
  );
}

export default ExportButtons;