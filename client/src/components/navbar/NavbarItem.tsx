import { Link } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';
import { Typography } from '@mui/material';
import { NavbarItemProps } from '../types';
import { useNavbarIcon } from './useNavbarIcon';

export const NavbarItem = ({
  colors,
  title,
  to,
  selected,
  setSelected,
}: NavbarItemProps) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={useNavbarIcon(title)}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
