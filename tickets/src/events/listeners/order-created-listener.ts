import { Listener, OrderCreatedEvent, Subjects } from "@michaelil/common";
import { Message } from "node-nats-streaming";

import { queueGroupName } from "./queue-group-name";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    console.log("Event data:", data);

    console.log(data.id);
    console.log(data.ticket);
    console.log(data.status);
    // Acknowledge the message
    msg.ack();
  }
}
