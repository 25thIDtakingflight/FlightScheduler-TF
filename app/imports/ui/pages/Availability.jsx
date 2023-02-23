import React from 'react';
import FullCalendar from "@fullcalendar/react";
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/StuffCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const Availability = () => {
    // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
    const { ready, stuffs } = useTracker(() => {
        // Note that this subscription will get cleaned up
        // when your component is unmounted or deps change.
        // Get access to Stuff documents.
        const subscription = Stuffs.subscribeStuff();
        // Determine if the subscription is ready
        const rdy = subscription.ready();
        // Get the Stuff documents
        const stuffItems = Stuffs.find({}, { sort: { name: 1 } }).fetch();
        return {
            stuffs: stuffItems,
            ready: rdy,
        };
    }, []);
    return (ready ? (
        <Container id={PAGE_IDS.AVAILABILITY} className="py-3">
            <Row className="justify-content-center">
                <Col md={7}>
                    <Col className="text-center">
                        <h2>AVAILABILITY</h2>
                    </Col>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="timeGridWeek"
                        headerToolbar={{
                            center: 'dayGridMonth,timeGridWeek,timeGridDay new',
                        }}
                        customButtons={{
                            new: {
                                text: 'new',
                                click: () => console.log(events.room),
                            },
                        }}
                        eventColor="red"
                        nowIndicator
                        dateClick={(e) => console.log(e.dateStr)}
                        eventClick={(e) => console.log(e.event.title)}
                        contentHeight={450}
                        timeZone="local"
                        selectable
                        selectMirror
                        dragScroll
                    />
                </Col>
            </Row>
        </Container>
    ) : <LoadingSpinner message="Loading Calendar" />);
};

export default Availability;
