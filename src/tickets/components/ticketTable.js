import React from 'react';
import {Table, Pagination, Icon} from 'semantic-ui-react';
import TicketRow from './ticketRow';
// import EditTicket from './editTicket'


// TicketTable is a Stateless component

const TicketTable = (props) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Summary</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Assignee</Table.HeaderCell>
                    {/* <Table.HeaderCell>Options</Table.HeaderCell> */}
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {/* This maps the tickets recieved as a prop */}

                {props
                    .tickets
                    .map(t => {

                        // If the ticket is being edited, EditTicket Component is rendered here

                        // if (t.editing) {
                        //     return <EditTicket
                        //         editTicket={props.editTicket}
                        //         cancelEditing={e => props.cancelEditing(t.id)}
                        //         key={t.id}
                        //         ticket={t}/>
                        // } else {

                            // Is the ticket is not being edited the TicketRow stateless component is returned

                            return <TicketRow
                                ticket={t}
                                key={t.id}
                                />
                                {/*completeTicket={e => props.completeTicket(t)}
                                startEditing={e => props.startEditing(t.id)}
                                deleteTicket={e=> props.deleteTicket(t)}
                                */}
                        // }
                    })}
                
                {/* This EditTicket component is used as a Create new Ticket Component */}
                {/* Thus by using the same component for both use, we can reuse a lot of the codes */}
                
                {/* <EditTicket createTicket={props.createTicket} /> */}
            </Table.Body>
            <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='3'>
                <Pagination floated='right'
                    activePage={1}
                    size='mini'
                    totalPages={5}
                />
                </Table.HeaderCell>
            </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default TicketTable;