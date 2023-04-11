import { useState } from 'react';
import { EventApi } from '@fullcalendar/core';
import { Box, useTheme } from '@mui/material';
import { Header } from '../../components/header/Header';
import { CalendarMain, CalendarSidebar } from '../../components/calendar';
import { tokens } from '../../theme';

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  return (
    <Box m="20px">
      <Header title="Calendar" subTitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        <CalendarSidebar colors={colors} currentEvents={currentEvents} />
        <CalendarMain setCurrentEvents={setCurrentEvents} />
      </Box>
    </Box>
  );
};
