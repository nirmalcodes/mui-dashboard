import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
}));

const BorderLinearProgress = ({ value = 50 }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography color={'primary'} fontWeight={600}>
        {value}%
      </Typography>
      <StyledLinearProgress variant='determinate' value={value} />
    </Box>
  );
};

export default BorderLinearProgress;
