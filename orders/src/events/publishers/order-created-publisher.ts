import { Publisher, OrderCreatedEvent, Subjects } from "@michaelil/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
