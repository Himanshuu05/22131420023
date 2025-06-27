import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectHandler = ({ urls }) => {
  const { code } = useParams();

  useEffect(() => {
    const found = urls.find(u => u.shortcode === code);
    if (found) {
      window.location.href = found.longUrl;
    }
  }, [code, urls]);

  return <p>Redirecting...</p>;
};

export default RedirectHandler;
