import {Publisher, OrderCancelledEvent, Subjects} from '@my-gittix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}