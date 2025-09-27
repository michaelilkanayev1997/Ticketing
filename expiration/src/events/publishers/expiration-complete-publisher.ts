import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@michaelil/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
