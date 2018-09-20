import React, {Component} from 'react';

import {Button, Table} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'


class EditTicket extends Component {

    constructor(props) {
        super(props);
        // If props.ticket exists this component is used to  Edit a Ticket, 
        // else this is a Create New Ticket Component

        if (this.props.ticket) {
            this.state = {
                ...this.props.ticket
            }
        } else {
            this.state = {
                ...this.emptyTicket()
            }
        }
    }

    //Initializes a Empty Ticket Object

    emptyTicket = () => {
        return {summary: "", description: "", date: ""}
    }


    // Input change handling methods

    changeNewTitle = (event) => {
        this.setState({summary: event.target.value})
    }

    changeNewDescription = (event) => {
        this.setState({description: event.target.value})
    }

    changeNewDate = (event) => {
        this.setState({date: event})
    }

    // Form submission methods

    createTicket = (event) => {
        this.resetTicket()
        this.props.createTicket(this.state)
    }
    editTicket = (event) => {
        this.props.editTicket(this.state)
    }


    // Modifying the inputs indirectly methods

    resetTicket = () => {
        this.setState({summary: "", description: "", date: ""})
    }
    cancelEditing = () => {
        this.props.cancelEditing();
    }

    // Convert the date to moment object for the React DatePicker

    getDateForDatePicker() {
        return ""
    }

    render() {
        return (
            <Table.Row>

                <Table.Cell>

                    {/* The Value flows the data from the state to the control */}
                    {/* The onChange method pass the value from the Control to the State, It takes a method reference */}
                    {/* In this way a controlled two way binding is established */}

                    <Input                        
                        placeholder='Title'
                        value={this.state.summary}
                        onChange={this.changeNewTitle}/>
                </Table.Cell>

                <Table.Cell>
                    <Input
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.changeNewDescription}/>
                </Table.Cell>

                <Table.Cell>

                    {/* React Datepicker gets the moment date from the class method */}

                    <Input
                        selected={this.getDateForDatePicker()}
                        onChange={this.changeNewDescription}/>
                </Table.Cell>

                {/* The options component takes the inputs and decide if It's an option for a Edit Ticket or Add New Ticket */}

                <Options
                    ticket={this.props.ticket}    
                    editTicket={this.editTicket}
                    createTicket={this.createTicket}
                    resetTicket={this.resetTicket}
                    cancelEdit={this.cancelEditing}
                />

            </Table.Row>
        )
    }
}

export default EditTicket;


// The option component decides the component usage

const Options = (props) => {
    if (props.ticket && props.ticket.editing) {
        return EditOptions(props);
    } else {
        return AddOptions(props);
    }
}

// The two local components - EditOptions and AddOptions simply maps their events 
// to the state events of their parent compoent through the props


const EditOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.editTicket}>
                Edit
            </Button>
            < Button color='blue' onClick={props.cancelEdit}>
                Cancel
            </Button>
        </Table.Cell>
    );
}

const AddOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.createTicket}>
                Create
            </Button>
            < Button color='blue' onClick={props.resetTicket}>
                Reset
            </Button>
        </Table.Cell>
    );
}

