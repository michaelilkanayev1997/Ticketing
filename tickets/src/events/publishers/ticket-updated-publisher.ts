import { Publisher, Subjects, TicketUpdatedEvent } from "@michaelil/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
