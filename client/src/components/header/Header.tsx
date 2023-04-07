import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { HeaderType } from '../types';

export const Header = ({ title, subTitle }: HeaderType) => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};
