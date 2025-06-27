import React from 'react';
import { Typography, Box } from '@mui/material';

const UrlStats = ({ urls }) => {
  return (
    <Box>
      <Typography variant="h6">Shortened URLs:</Typography>
      {urls.map((u, i) => (
        <Box key={i} mt={1}>
          <Typography>Short: http://localhost:3000/{u.shortcode}</Typography>
          <Typography>Original: {u.longUrl}</Typography>
          <Typography>Valid Till: {new Date(u.timestamp + u.validity * 60000).toLocaleTimeString()}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default UrlStats;
