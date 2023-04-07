import { Box } from '@mui/material';
import { Header } from '../../components/header/Header';

export const Dashboard = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subTitle="Welcome to the Dashboard" />
    </Box>
  );
};
