import React from 'react';

function SignaturePreview({ formData }) {
  const { name, title, email, phone, location, linkedin, profileImage } = formData;

  return (
    <div className="p-4 border rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Signature Preview</h2>
      <div className="signature-block">
        <table cellPadding="6" cellSpacing="0" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top' }}>
                <img
                  src={profileImage || 'https://via.placeholder.com/120'}
                  alt={name}
                  width="120"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
                  }}
                />
              </td>
              <td style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
                <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold', color: '#0a66c2' }}>
                  Best regards,
                </p>
                <p style={{ margin: '6px 0 0 0', fontSize: '15px', fontWeight: 'bold', color: '#0a66c2' }}>
                  {name || 'Lance Terrill'}
                </p>
                <p style={{ margin: '4px 0 8px 0', fontSize: '13px', color: '#444' }}>
                  {title || 'Project Leader | GIS & Python Specialist | AI & DevOps Innovator | Modular Solutions Architect'}
                </p>
                <p style={{ margin: '2px 0' }}>
                  📧 <a href={`mailto:${email}`} style={{ color: '#0a66c2', textDecoration: 'none' }}>{email || 'lance.terrill@gmail.com'}</a>
                </p>
                <p style={{ margin: '2px 0' }}>📞 {phone || '123-456-7890'}</p>
                <p style={{ margin: '2px 0' }}>📍 {location || 'City, State'}</p>
                <p style={{ margin: '6px 0 0 0' }}>
                  🔗 <a href={linkedin} style={{ color: '#0a66c2', textDecoration: 'none' }}>LinkedIn</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '10px 0' }} />
        <p
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '11px',
            color: '#777',
            lineHeight: '1.4',
            maxWidth: '700px',
          }}
        >
          CONFIDENTIALITY NOTICE: This email and any attachments are intended solely for the use of the recipient(s) and may contain confidential or privileged information. Any unauthorized review, use, disclosure, or distribution is prohibited. If you have received this email in error, please notify the sender immediately and delete it from your system. The sender accepts no liability for any errors or omissions in the contents of this message or for any damage caused by viruses transmitted via email.
        </p>
      </div>
    </div>
  );
}

export default SignaturePreview;
