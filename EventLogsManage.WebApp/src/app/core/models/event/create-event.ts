export class CreateEvent {
  description: string;
  eventDate: Date;
  eventType: number;
  constructor(
    description: string,
    eventDate: Date
  ) {
    this.description = description;
    this.eventDate = eventDate;
    this.eventType = 2;
  }
}