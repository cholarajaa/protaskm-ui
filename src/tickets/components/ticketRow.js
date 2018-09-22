import React from 'react';

import {Table, Button} from 'semantic-ui-react'
import ViewModal from './viewModal';

// The Ticket Row component is a simple stateless component
const TicketRow = (props) => {
    return (

        // getClass Name assigns the class names of this element 
        <Table.Row>
            <Table.Cell>{props.ticket.summary}</Table.Cell>
            <Table.Cell>{props.ticket.tag}</Table.Cell>
            <Table.Cell>{props.ticket.description}</Table.Cell>
            {/* <Button className="option-buttons" color='blue' >
                <i className="fa fa-eye"></i>
            </Button> */}
            <Table.Cell><ViewModal ticket={props.ticket}/></Table.Cell>
        </Table.Row>
    );
}
export default TicketRow;