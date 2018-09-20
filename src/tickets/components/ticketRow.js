import React from 'react';

import {Button, Table} from 'semantic-ui-react'

// The Ticket Row component is a simple stateless component, It simply takes the props 
// and maps the specific events to the methods of parent component 

const TicketRow = (props) => {
    return (

        // getClass Name assigns the class names of this element 

        <Table.Row className={getClassName(props)}>
            <Table.Cell>{props.ticket.summary}</Table.Cell>
            <Table.Cell>{props.ticket.description}</Table.Cell>
            <Table.Cell>{props.ticket.assignee}</Table.Cell>
            {/* <Table.Cell className="options">
                {props.ticket.status !== 'done' && <Button className="option-buttons" color='green' onClick={props.completeTicket}>
                    <i className="fa fa-check"></i>
                </Button>}
                <Button className="option-buttons" color='blue' onClick={props.startEditing}>
                    <i className="fa fa-pencil"></i>
                </Button>
                <Button className="option-buttons" color='red' onClick={props.deleteTicket}>
                    <i className="fa fa-trash"></i>
                </Button>
            </Table.Cell> */}
        </Table.Row>
    );
}

// Right now Updating, done and deleting these three states are represented with different Class Name

const getClassName = (props) => {
    return `
        ${props.ticket.updating
            ? "updating"
            : ""}
        ${props.ticket.status === 'done'
            ? "done"
            : ""}
        ${props.ticket.deleting
            ? "deleting"
            : ""}
        `
}
export default TicketRow;