import React, { Component } from 'react';
import * as TicketActions from '../actions/ticketActions'
import * as TagActions from '../actions/tagActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'
import TicketTable from '../components/ticketTable';
import TicketModal from '../components/modalTicket';

export class TicketContainer extends Component {

    // Ticket Container methods dispatch the actions to the reducer functions. Ordered by CRUD Order
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    //Create
    createTicket = (ticket) => {
        this.props.actions.CreateTicket(ticket)
    }


    // No methods for reading, the first loading of data is done in App.js where the
    // getTicket Action is dispatched

    //Update
    startEditing = (id) => {
        this.props.actions.StartEditing(id)
    }
    cancelEditing = (id) => {
        this.props.actions.CancelEditing(id)
    }
    editTicket = (ticket) => {
        this.props.actions.UpdateTicket(ticket)
    }
    completeTicket = (ticket) => {
        this.props.actions.UpdateTicket({...ticket, status: 'done'})
    }

    //Delete
    deleteTicket = (ticket) => {
        this.props.actions.DeleteTicket(ticket)
    }
    updateSearch(event, {value}) {
        this.setState({
            search: value.substr(0, 20)
        });
    }
    
    
    render() {
        let filteredTickets = this.props.tickets.filter(
            (ticket) => {
                return ticket.summary.indexOf(this.state.search) !== -1 || ticket.description.indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div className="ticket-container">
                <div className="container">
                    <TicketModal createTicket={this.createTicket}
                        tactions={this.props.tactions} title={'Create Ticket'}/>
                    <Input type='text' value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                        icon='search' placeholder='Search...'
                        floated='right'/>
                </div>
                <TicketTable
                    tickets={filteredTickets}
                    createTicket={this.createTicket}
                    startEditing={this.startEditing}
                    cancelEditing={this.cancelEditing}
                    editTicket={this.editTicket}
                    completeTicket = {this.completeTicket}
                    deleteTicket = {this.deleteTicket}
                />
            </div>
        );
    }
}

// Define the property types of this Container Component

TicketContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    tactions: PropTypes.object.isRequired,
    tickets: PropTypes.array.isRequired
}

// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
    return {
        tickets: state.tickets
    }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TicketActions, dispatch),
        tactions: bindActionCreators(TagActions, dispatch)
    }
}

// The connect function connects the Redux Dispatch and state to the Ticket Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps, mapDispatchToProps)(TicketContainer);