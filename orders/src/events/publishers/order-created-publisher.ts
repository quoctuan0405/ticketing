import {Publisher, OrderCreatedEvent, Subjects} from '@my-gittix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}