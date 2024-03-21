import { useContext, useState } from 'react';
import { ColorModeContext } from '../../theme';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(https://picsum.photos/seed/picsum/1920/1080)`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              py: 8,
              px: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              position: 'relative',
            }}
          >
            <Box
              component={Paper}
              variant='outlined'
              sx={{
                borderRadius: '50%',
                position: 'absolute',
                top: '1rem',
                right: '1rem',
              }}
            >
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </Box>

            <Box maxWidth={440}>
              <Stack spacing={1.5} mb={4}>
                <Typography variant='h4' fontWeight={600}>
                  Sign in
                </Typography>
                <Typography variant='body1'>
                  Please login to access your account.
                </Typography>
              </Stack>
              <Box
                component='form'
                autoComplete='off'
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  //   error={emailError}
                  margin='normal'
                  // required
                  fullWidth
                  id='email'
                  label='E-mail Address'
                  name='email'
                  autoComplete='off'
                  //   autoComplete='email'
                  type='email'
                  autoFocus
                  //   helperText={emailError ? 'invalid E-mail' : null}
                />
                <TextField
                  //   error={passwordError}
                  margin='normal'
                  // required
                  fullWidth
                  name='password'
                  label='Password'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  autoComplete='off'
                  //   autoComplete='current-password'
                  //   helperText={passwordError ? 'Invalid Password' : null}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {showPassword ? (
                            <VisibilityOffOutlinedIcon />
                          ) : (
                            <VisibilityOutlinedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Grid container>
                  <Grid item xs>
                    <Link to={'#'}>
                      <Typography
                        color='primary'
                        variant='body1'
                        fontWeight={500}
                      >
                        Forgot password?
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log In
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
