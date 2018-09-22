import React from 'react';
import {Table, Pagination} from 'semantic-ui-react';
import TicketRow from './ticketRow';


// TicketTable is a Stateless component

const TicketTable = (props) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Summary</Table.HeaderCell>
                    <Table.HeaderCell>Tag</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Options</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {/* This maps the tickets recieved as a prop */}

                {props
                    .tickets
                    .map(t => {
                            return <TicketRow
                                ticket={t}
                                key={t.id}
                                />
                    })}
            </Table.Body>
            <Table.Footer>
            {/* <Table.Row>
                <Table.HeaderCell colSpan='3'>
                <Pagination floated='right'
                    activePage={1}
                    size='mini'
                    totalPages={5}
                />
                </Table.HeaderCell>
            </Table.Row> */}
            </Table.Footer>
        </Table>
    )
}

export default TicketTable;