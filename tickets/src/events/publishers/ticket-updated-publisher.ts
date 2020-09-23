import {Publisher, Subjects, TicketUpdatedEvent} from '@my-gittix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}