import React, { useState } from 'react';
import ShortenerForm from '../components/ShortenerForm';
import UrlStats from '../components/UrlStats';

const HomePage = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (data) => {
    data.timestamp = Date.now();
    setUrls(prev => [...prev, data]);
    localStorage.setItem('urls', JSON.stringify([...urls, data]));
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <ShortenerForm onShorten={handleShorten} />
      <UrlStats urls={urls} />
    </div>
  );
};

export default HomePage;
