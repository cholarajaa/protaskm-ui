import React from 'react';

import {Table} from 'semantic-ui-react'

// The Ticket Row component is a simple stateless component
const TicketRow = (props) => {
    return (

        // getClass Name assigns the class names of this element 
        <Table.Row>
            <Table.Cell>{props.ticket.summary}</Table.Cell>
            <Table.Cell>{props.ticket.tag}</Table.Cell>
            <Table.Cell>{props.ticket.assignee}</Table.Cell>
        </Table.Row>
    );
}
export default TicketRow;