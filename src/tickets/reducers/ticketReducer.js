// Import the TicketAction Creators and TicketActionTypes

import * as TicketActions from '../actions/ticketActions'



// We are dividing the reducers using a technique called Reducer composition.
// By doing this we are seperating the reducer for the Collection and the Individual Item


//The collection Reducer, It handles only the collection

export function TicketListReducer(state=[], action) {
    switch (action.type) {

        // The cases for create and read.

        // Create
        case TicketActions.CREATE_TICKET_SUCCESS: {
            return ticket(state, action)
        }

        case TicketActions.CREATE_TICKET_ERROR: {
            // console.log('reducer didn\'t get tickets', action)
            return state
        }
            
        //Read    
        case TicketActions.GET_TICKETS_SUCCESS: {
            // console.log('reducer got tickets', action)
            return action.tickets.data;

        }

        case TicketActions.TOGGLE_MODAL:{
            return state
        }
            
        default:
            return state
    }
}


//The individual Reducer. It handles only one Ticket Object.


const ticket = (state, action) => {

    switch (action.type) {

        // Edit/modifies the individual Tickets using ES6 spread operator. The cases are self explanatory.

        case TicketActions.CREATE_TICKET_SUCCESS:
            {
                return [
                    ...state,
                    action.ticket
                ]
            }
        case TicketActions.CREATE_TICKET_ERROR: {
                return {...state}
        }

        default:
            {
                return state;
            }
    }
}