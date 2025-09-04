import { Publisher, OrderCancelledEvent, Subjects } from "@michaelil/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
