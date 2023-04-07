import { useState } from 'react';
import { ProSidebar, Menu } from 'react-pro-sidebar';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { NavbarItem, NavbarTitle, UserProfile } from '../../components/navbar';
import { Data, Charts, Pages } from '../../components/navbar/category';
import 'react-pro-sidebar/dist/css/styles.css';

export const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      pr="16px"
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <NavbarTitle
            colors={colors}
            collapsed={isCollapsed}
            setCollapsed={setIsCollapsed}
          />

          {/* User profile */}
          {!isCollapsed && <UserProfile colors={colors} />}

          {/* Sidebar Items */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <NavbarItem
              colors={colors}
              title="Dashboard"
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Data selected={selected} setSelected={setSelected} />
            <Pages selected={selected} setSelected={setSelected} />
            <Charts selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
