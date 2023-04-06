import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

export const useNavbarIcon = (title: string) => {
  switch (title) {
    case 'Dashboard':
      return <HomeOutlinedIcon />;
    case 'Manage Team':
      return <PeopleOutlinedIcon />;
    case 'Contacts Information':
      return <ContactsOutlinedIcon />;
    case 'Invoices Balances':
      return <ReceiptOutlinedIcon />;
    case 'Profile Form':
      return <PersonOutlinedIcon />;
    case 'Calendar':
      return <CalendarTodayOutlinedIcon />;
    case 'FAQ Page':
      return <HelpOutlineOutlinedIcon />;
    case 'Bar Chart':
      return <BarChartOutlinedIcon />;
    case 'Pie Chart':
      return <PieChartOutlineOutlinedIcon />;
    case 'Line Chart':
      return <TimelineOutlinedIcon />;
    case 'Geography Chart':
      return <MapOutlinedIcon />;
  }
};
