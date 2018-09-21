//Import the Ticket API 

import { TicketApi } from "../../api/ticketApi";


// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 



//Create
export const CREATE_TICKET = '[Ticket] CREATE_TICKET' 
export const CREATE_TICKET_SUCCESS = '[Ticket] CREATE_TICKET_SUCCESS' 
export const CREATE_TICKET_ERROR = '[Ticket] CREATE_TICKET_ERROR' 
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

//Read
export const GET_TICKETS = '[Ticket] GET_TICKETS' 
export const GET_TICKETS_SUCCESS = '[Ticket] GET_TICKETS_SUCCESS' 
export const GET_TICKETS_ERROR = '[Ticket] GET_TICKETS_ERROR' 

 
//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTicket(ticket){
    return (dispatch, getState) => {
        return TicketApi.createTicket(ticket)
            .then((res) => {
                dispatch(CreateTicketSuccess(res.data))
            })
            .catch((err) => {
                dispatch(CreateTicketError(err))
            })
    }
}

export function CreateTicketSuccess(ticket){
    return {
        type:CREATE_TICKET_SUCCESS,
        ticket
    }
}

export function CreateTicketError(error){
    return {
        type:CREATE_TICKET_ERROR,
        error
    }
}


//Read
export function GetTickets(){
    return (dispactch, getState) => {
        return TicketApi.getTicket().then(res => {
            dispactch(GetTicketSuccess(res))
        })
    }
}

export function GetTicketSuccess(tickets){
    return {
        type:GET_TICKETS_SUCCESS,
        tickets
    }
}
