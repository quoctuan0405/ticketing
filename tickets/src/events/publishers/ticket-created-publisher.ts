import {Publisher, Subjects, TicketCreatedEvent} from '@my-gittix/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated
}