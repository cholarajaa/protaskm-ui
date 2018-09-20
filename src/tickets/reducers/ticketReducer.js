// Import the TicketAction Creators and TicketActionTypes

import * as TicketActions from '../actions/ticketActions'



// We are dividing the reducers using a technique called Reducer composition.
// By doing this we are seperating the reducer for the Collection and the Individual Item


//The collection Reducer, It handles only the collection

export function TicketListReducer(state = [], action) {
    switch (action.type) {

        // The cases ordered in CRUD order.

        // Create
        case TicketActions.CREATE_TICKET_SUCCESS: {
                return [
                    ...state,
                    action.ticket
                ];
        }
            
        //Read    
        case TicketActions.GET_TICKETS_SUCCESS: {
            
            return action.tickets.data;

        }
        
        // The following Cases handle the data by mapping it. Mostly because they are related with the modification of a single Data
        
        //Update    
        case TicketActions.START_EDITING: {
            
            return state.map(s => ticket(s, action))

        }
        case TicketActions.CANCEL_EDITING: {
            
            return state.map(s => ticket(s, action))

        }
        case TicketActions.UPDATE_TICKET: {

            return state.map(s => ticket(s, action))
            
        }
        case TicketActions.UPDATE_TICKET_SUCCESS: {

            return state.map(s => ticket(s, action))

        }
        
        //Delete    
        case TicketActions.DELETE_TICKET: {

            return state.map(s => ticket(s, action))

        }
        case TicketActions.DELETE_TICKET_SUCCESS: {

            return state.filter(s => ticket(s, action))

        }
            
        default:
            return state
    }
}


//The individual Reducer. It handles only one Ticket Object.


const ticket = (state, action) => {

    // If the mapped ticket of the previous state matches with the new ID of the action, 
    // Only then proceed to the Reducer Switch case

    if (state.id !== (action.id || action.ticket.id)) {
        return state;
    }

    switch (action.type) {

        // Edit/modifies the individual Tickets using ES6 spread operator. The cases are self explanatory.

        case TicketActions.START_EDITING:
            {
                return {
                    ...state,
                    editing: true
                }
            }

        case TicketActions.CANCEL_EDITING:
            {
                return {
                    ...state,
                    editing: false
                }
            }

        case TicketActions.UPDATE_TICKET:
            {
                return {
                    ...state,
                    editing: false,
                    updating: true
                }
            }

        case TicketActions.UPDATE_TICKET_SUCCESS:
            {
                return {
                    ...state,
                    ...action.ticket,
                    updating: false
                }
            }

        case TicketActions.DELETE_TICKET:
            {
                return {
                    ...state,
                    deleting: true
                }
            }

        case TicketActions.DELETE_TICKET_SUCCESS:
            {
                return false
            }

        default:
            {
                return state;
            }
    }
}