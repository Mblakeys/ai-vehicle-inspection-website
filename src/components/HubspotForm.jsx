import React, { useEffect } from 'react';

const HubspotForm = ({ portalId, formId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: portalId,
          formId: formId,
          target: '#hubspotForm'
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, [portalId, formId]);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubspotForm;

