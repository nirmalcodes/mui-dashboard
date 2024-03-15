import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        width={720}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src='https://i.imgur.com/qIufhof.png'
          loading='eager'
          height={500}
          style={{
            display: 'block',
            margin: 0,
            border: 'none',
          }}
        />
        <Typography align='center' variant='h1'>
          404
        </Typography>
        <Typography align='center' variant='h5' mb={4}>
          The page you're looking for was not found.
        </Typography>
        <Button variant='contained'>
          <Link to={'/'} replace>
            Back to Dashboard
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
