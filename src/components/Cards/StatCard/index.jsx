import { Box, Card, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

const StatCard = ({
  title,
  value,
  icon: Icon = AppsIcon,
  iconColor,
  iconBackground = (theme) => theme.palette.primary.main,
}) => {
  return (
    <Card sx={{ p: 2, borderRadius: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box>
          <Typography
            variant='subtitle2'
            fontWeight={700}
            // color={'GrayText'}
            sx={{ opacity: 0.65 }}
          >
            {title ?? 'Title'}
          </Typography>
          <Typography variant='h6' fontWeight={700}>
            {value ?? 'Value'}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '3rem',
            height: '3rem',
            background: iconBackground,
            ml: 'auto',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: iconColor ?? '#fff',
          }}
        >
          <Icon />
        </Box>
      </Box>
    </Card>
  );
};

export default StatCard;
