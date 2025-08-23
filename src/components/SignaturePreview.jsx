import React from 'react';
import '../styles/signature.css';

function SignaturePreview({ formData }) {
  const { name, title, phone, email, social, location, imageUrl } = formData;

  const tableStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#333',
  };

  const imageStyle = {
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
  };

  const bestRegardsStyle = {
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0a66c2',
  };

  const nameStyle = {
    margin: '6px 0 0 0',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#0a66c2',
  };

  const titleStyle = {
    margin: '4px 0 8px 0',
    fontSize: '13px',
    color: '#444',
  };

  const linkStyle = {
      color: '#0a66c2',
      textDecoration: 'none',
  }

  const pStyle = {
      margin: '2px 0',
  }

  return (
    <div className="signature-preview-container bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300">
      <table cellPadding="6" cellSpacing="0" style={tableStyle}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'top' }}>
              {imageUrl && <img src={imageUrl} alt={name} width="120" style={imageStyle} />}
            </td>
            <td style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
              <p style={bestRegardsStyle}>
                Best regards,
              </p>
              <p style={nameStyle}>
                {name}
              </p>
              <p style={titleStyle}>
                {title}
              </p>
              <p style={pStyle}>
                📧 <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
              </p>
              <p style={pStyle}>📞 {phone}</p>
              {location && <p style={pStyle}>📍 {location}</p>}
              {social && (
                <p style={{ margin: '6px 0 0 0' }}>
                  🔗 <a href={social} style={linkStyle}>{social}</a>
                </p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SignaturePreview;