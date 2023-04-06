import { Typography, colors } from '@mui/material';
import { CategoryType } from '../../types';
import { NavbarItem } from '../NavbarItem';

export const Charts = ({ selected, setSelected }: CategoryType) => {
  return (
    <>
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: '15px 0 5px 20px' }}
      >
        Charts
      </Typography>
      <NavbarItem
        colors={colors}
        title="Bar Chart"
        to="/bar"
        selected={selected}
        setSelected={setSelected}
      />
      <NavbarItem
        colors={colors}
        title="Pie Chart"
        to="/pie"
        selected={selected}
        setSelected={setSelected}
      />
      <NavbarItem
        colors={colors}
        title="Line Chart"
        to="/line"
        selected={selected}
        setSelected={setSelected}
      />
      <NavbarItem
        colors={colors}
        title="Geography Chart"
        to="/geography"
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};
