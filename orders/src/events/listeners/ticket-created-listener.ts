import { Message } from "node-nats-streaming";
import { Listener, Subjects, TicketCreatedEvent } from "@michaelil/common";

import { Ticket } from "../../models/ticket";
import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {}
}
