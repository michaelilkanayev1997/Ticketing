import { Publisher, Subjects, TicketCreatedEvent } from "@michaelil/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
