import React from "react";
import { format } from "date-fns";
import { Emojione } from "react-emoji-render";
import { Timeline, TimelineEvent } from "react-event-timeline";

type Duration = [Date] | [Date, undefined] | [Date, Date];

export type Event = {
  title: string;
  location?: string;
  duration: Duration | Duration[];
  details?: string[];
  icon?: string;
};

const formatMonth = (date: Date): string => format(date, "LLLL yyyy");
const isDate = (duration: Duration | Date | undefined): duration is Date =>
  duration && !Array.isArray(duration);

const createdAt = (duration: Duration | Duration[]): string[] => {
  const [start, end] = duration;
  if (isDate(start)) {
    return [
      `${formatMonth(start)} - ${isDate(end) ? formatMonth(end) : "present"}`,
    ];
  }
  return (duration as Duration[]).map((event) => createdAt(event)).flat();
};

const CustomTimeline: React.FC<{ events: Event[] }> = ({ events }) => (
  <Timeline>
    {events.reverse().map((event) => (
      <TimelineEvent
        key={event.title + event.location}
        title={
          <h4>
            {event.title}
            {event.location && ` - ${event.location}`}
          </h4>
        }
        createdAt={
          <div>
            {createdAt(event.duration).map((duration) => (
              <div key={duration}>{duration}</div>
            ))}
          </div>
        }
        icon={<Emojione text={event.icon ?? ":handshake:"} />}
        iconStyle={{ fontSize: "1.5rem" }}
      >
        {event.details?.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </TimelineEvent>
    ))}
  </Timeline>
);

export default CustomTimeline;
