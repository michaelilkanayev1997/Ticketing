import { Listener, OrderCreatedEvent, Subjects } from "@michaelil/common";
import { Message } from "node-nats-streaming";

import { queueGroupName } from "./queue-group-name";
import { expirationQueue } from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    await expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay: 15 * 60 * 1000, // 15 minutes
      }
    );

    msg.ack();
  }
}
