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
    constructor(props, state) {
        super(props);
        this.state = {
            search: ''
        };
    }
    //Create Ticket
    createTicket = (ticket) => {
        this.props.actions.CreateTicket(ticket)
    }

    //Create tag
    createTag = (tag) => {
        this.props.actions.CreateTag(tag)
    }

    // No methods for reading, the first loading of data is done in App.js where the
    // getTicket Action is dispatched

    updateSearch(event, {value}) {
        this.setState({
            search: value.substr(0, 20)
        });
    }

    render() {

        let filteredTickets = this.props.tickets.filter(
            (ticket) => {
                return ticket.summary.indexOf(
                    this.state.search) !== -1 ||
                    ticket.tag.indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div className="ticket-container">
                <div className="container">
                    <TicketModal createTicket={this.createTicket}
                        tags={this.props.tags} toggleModal={this.props.toggleModal}
                        ToggleModal={this.openModal}
                        title={'Create Ticket'} />
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
    tickets: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired 
}

// This maps the state to the property of the component

function mapStateToProps(store, ownProps) {
    return {
        tickets: store.tickets,
        tags: store.tags,
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