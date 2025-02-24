import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Heading () {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
        </Box>
      );
}
export default Heading
