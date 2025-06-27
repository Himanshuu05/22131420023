import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Log } from '../utils/logMiddleware';

const ShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;

    const newUrl = {
      longUrl: url,
      validity: validity || 30,
      shortcode: shortcode || Math.random().toString(36).substring(2, 7)
    };

    Log('frontend', 'info', 'component', 'New URL submitted');
    onShorten(newUrl);
    setUrl('');
    setShortcode('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField label="Long URL" fullWidth value={url} onChange={(e) => setUrl(e.target.value)} />
      <TextField label="Validity (minutes)" type="number" value={validity} onChange={(e) => setValidity(e.target.value)} />
      <TextField label="Custom Shortcode (optional)" value={shortcode} onChange={(e) => setShortcode(e.target.value)} />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Shorten</Button>
    </Box>
  );
};

export default ShortenerForm;
