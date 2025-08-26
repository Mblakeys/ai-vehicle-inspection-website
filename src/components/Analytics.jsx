import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = 'G-0ZXD30SEW5';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;

