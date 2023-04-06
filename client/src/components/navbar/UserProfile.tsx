import { Box, Typography } from '@mui/material';
import { UserProfileProps } from '../types';

export const UserProfile = ({ colors }: UserProfileProps) => {
  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src={`../../assets/user.png`}
          style={{ cursor: 'pointer', borderRadius: '50%' }}
        />
      </Box>
      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: '10px 0 0 0' }}
        >
          Justin
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          CEO
        </Typography>
      </Box>
    </Box>
  );
};
