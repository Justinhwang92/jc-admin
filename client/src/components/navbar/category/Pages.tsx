import { Typography } from '@mui/material';
import { CategoryType } from '../../types';
import { NavbarItem } from '../NavbarItem';

export const Pages = ({ colors, selected, setSelected }: CategoryType) => {
  return (
    <>
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: '15px 0 5px 20px' }}
      >
        Pages
      </Typography>
      <NavbarItem
        colors={colors}
        title="Profile Form"
        to="/form"
        selected={selected}
        setSelected={setSelected}
      />
      <NavbarItem
        colors={colors}
        title="Calendar"
        to="/calendar"
        selected={selected}
        setSelected={setSelected}
      />
      <NavbarItem
        colors={colors}
        title="FAQ Page"
        to="/faq"
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};
