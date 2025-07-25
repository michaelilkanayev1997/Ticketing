import { Message } from "node-nats-streaming";

import { Listener } from "./base-listener";
import { TicketCreatedEvent } from "./ticket-created-event";
import { Subject } from "./subjects";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subject.TicketCreated = Subject.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: any, msg: Message) {
    console.log("Event data:", data);
    // Acknowledge the message
    msg.ack();
  }
}
