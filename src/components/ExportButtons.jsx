import React from 'react';
import html2canvas from 'html2canvas';

function ExportButtons({ getSignatureHTML }) {
  const copyToClipboard = () => {
    const html = getSignatureHTML();
    // Use the Clipboard API to write the HTML as text
    navigator.clipboard.writeText(html)
      .then(() => {
        alert('Signature HTML copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy HTML: ', err);
        alert('Failed to copy HTML. See console for details.');
      });
  };

  const exportAsPNG = () => {
    const signatureElement = document.querySelector('.signature-block');
    if (signatureElement) {
      html2canvas(signatureElement, { useCORS: true, allowTaint: true }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'email-signature.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
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
