import { Box, Typography } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { GridColDef } from '@mui/x-data-grid';

export const teamColumnDef = (colors: any) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }: any) => {
        const bgColor =
          access === 'admin'
            ? colors.greenAccent[600]
            : access === 'manager'
            ? colors.greenAccent[700]
            : colors.greenAccent[700];
        return (
          <Box
            width="100%"
            display="flex"
            borderRadius="4px"
            sx={{ backgroundColor: { bgColor } }}
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return columns;
};
