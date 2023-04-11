import { EventApi, formatDate } from '@fullcalendar/core';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { CalendarSidebarType } from '../types';

export const CalendarSidebar = ({
  colors,
  currentEvents,
}: CalendarSidebarType) => {
  return (
    <Box
      sx={{
        flex: '1 1 20%',
        backgroundColor: `${colors.primary[400]}`,
        p: '15px',
        borderRadius: '4px',
      }}
    >
      <Typography variant="h5">Events</Typography>
      <List>
        {currentEvents.map((event: EventApi) => (
          <ListItem
            key={event?.id}
            sx={{
              backgroundColor: colors.greenAccent[500],
              margin: '10px 0',
              borderRadius: '2px',
            }}
          >
            <ListItemText
              primary={event?.title}
              secondary={
                <Typography>
                  {formatDate(event?.start || event?.startStr, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
