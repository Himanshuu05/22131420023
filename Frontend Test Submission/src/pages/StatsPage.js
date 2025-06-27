import React, { useEffect, useState } from 'react';

const StatsPage = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('urls');
    if (saved) setUrls(JSON.parse(saved));
  }, []);

  return (
    <div>
      <h2>URL Stats</h2>
      {urls.map((u, i) => (
        <div key={i}>
          <p>Short URL: /{u.shortcode}</p>
          <p>Clicks: (not tracked in demo)</p>
        </div>
      ))}
    </div>
  );
};

export default StatsPage;
