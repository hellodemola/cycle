import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

interface eventProps {
  events: {
    id: number;
    title: string;
    start: Date;
    end: Date;
  }[];
}

function ResultCalendar({ events }: eventProps) {
  return (
    <Calendar
      localizer={localizer}
      style={{ height: 500 }}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  );
}

export default ResultCalendar;
