import { EventApi } from '@fullcalendar/core';

export type NavbarItemProps = {
  colors: any;
  title: string;
  to: string;
  selected: string;
  setSelected: any;
};

export type NavbarTitleProps = {
  colors: any;
  collapsed: boolean;
  setCollapsed: any;
};

export type UserProfileProps = {
  colors: any;
};

export type CategoryType = {
  colors: any;
  selected: string;
  setSelected: any;
};

export type HeaderType = {
  title: string;
  subTitle: string;
};

export type CalendarSidebarType = {
  colors: any;
  currentEvents: EventApi[];
};

export type CalendarMainType = {
  setCurrentEvents: React.Dispatch<React.SetStateAction<EventApi[]>>;
};
