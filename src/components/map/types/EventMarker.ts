import { EventType } from "./EventType";
import { EventGenre } from "./EventGenre";
import { GeoLocation } from "./GeoLocation";

type EventMarker = {
    name: string;                   // String: Name of the event
    description: string;            // String: Description of the event
    type: EventType;                // String: Type of event (e.g., "Concert", "Workshop")
    genre: EventGenre;              // String: Genre (e.g., "Music", "Tech")
    location: GeoLocation;          // Object: { lat: number, lng: number } for coordinates
    datetime: Date;                 // Date: Date and Time of the event (e.g., 2024-11-03 18:00:00)
    formatDate: () => string;       // String: get the date formatted (e.g., "2024-11-03")
    formatTime: () => string;       // String: get the time formatted (e.g., "18:00")
    duration: number;               // Number: Duration in minutes
    formatDuration: () => string;   // String: get the duration formatted (e.g. "1 hour 30 minutes")
    tags: string[];                 // Array: Array of tags (e.g., ["Free", "Outdoor", "Family"])
}

function formatDate(ev: EventMarker): string {
    return ev.datetime.toDateString();
}

function formatTime(ev: EventMarker): string {
    return ev.datetime.toTimeString();
}

function formatDuration(ev: EventMarker): string {
    return (ev.duration / 60) + "h " + (ev.duration % 60) + "m";
}