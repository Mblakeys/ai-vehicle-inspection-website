import React from 'react';

const Calendly = ({ url }) => {
  return (
    <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Calendly Schedule"
      ></iframe>
    </div>
  );
};

export default Calendly;

