import { Typography, colors } from '@mui/material';
import { CategoryType } from '../../types';
import { NavbarItem } from '../NavbarItem';

export const Data = ({ selected, setSelected }: CategoryType) => {
  return (
    <>
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: '15px 0 5px 20px' }}
      >
        Data
      </Typography>
      <NavbarItem
        colors={colors}
        title="Manage Team"
        to="/team"
        selected={selected}
        setSelected={setSelected}
      />
      <NavbarItem
        colors={colors}
        title="Contacts Information"
        to="/contacts"
        selected={selected}
        setSelected={setSelected}
      />
      <NavbarItem
        colors={colors}
        title="Invoices Balances"
        to="/invoices"
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};
