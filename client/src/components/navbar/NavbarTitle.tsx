import { MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { NavbarTitleProps } from '../types';

export const NavbarTitle = ({
  colors,
  collapsed,
  setCollapsed,
}: NavbarTitleProps) => {
  return (
    <MenuItem
      onClick={() => setCollapsed(!collapsed)}
      icon={collapsed ? <MenuOutlinedIcon /> : undefined}
      style={{
        margin: '10px 0 20px 0',
        color: colors.grey[100],
      }}
    >
      {!collapsed && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          ml="15px"
        >
          <Typography variant="h3" color={colors.grey[100]}>
            JC-ADMIN
          </Typography>
          <IconButton onClick={() => setCollapsed(!collapsed)}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      )}
    </MenuItem>
  );
};
