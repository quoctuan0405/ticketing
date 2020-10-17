import { PaymentCreatedEvent, Publisher, Subjects } from "@my-gittix/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}