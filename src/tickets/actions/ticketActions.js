//Import the Ticket API 

import { TicketApi } from "../../api/ticketApi";


// These are the action type constants. Ordered by CRUD order. 
// There is a pattern of Action, Action_Success, Action_Error action types for the Async actions. 



//Create
export const CREATE_TICKET = '[Ticket] CREATE_TICKET' 
export const CREATE_TICKET_SUCCESS = '[Ticket] CREATE_TICKET_SUCCESS' 
export const CREATE_TICKET_ERROR = '[Ticket] CREATE_TICKET_ERROR' 


//Read
export const GET_TICKETS = '[Ticket] GET_TICKETS' 
export const GET_TICKETS_SUCCESS = '[Ticket] GET_TICKETS_SUCCESS' 
export const GET_TICKETS_ERROR = '[Ticket] GET_TICKETS_ERROR' 


//Update
export const START_EDITING ='[Ticket] START_EDITING'
export const CANCEL_EDITING = '[Ticket] CANCEL_EDITING'

export const UPDATE_TICKET = '[Ticket] UPDATE_TICKET' 
export const UPDATE_TICKET_SUCCESS = '[Ticket] UPDATE_TICKET_SUCCESS' 
export const UPDATE_TICKET_ERROR = '[Ticket] UPDATE_TICKET_ERROR' 

export const COMPLETE_TICKET = 'COMPLETE_TICKET'


//Delete
export const DELETE_TICKET = '[Ticket] DELETE_TICKET' 
export const DELETE_TICKET_SUCCESS = '[Ticket] DELETE_TICKET_SUCCESS' 
export const DELETE_TICKET_ERROR = '[Ticket] DELETE_TICKET_ERROR' 



 
//These are the action types Also ordered in CRUD Order.

//Create

//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateTicket(ticket){
    return (dispatch, getState) => {
        return TicketApi.createTicket(ticket).then(res => {
            dispatch(CreateTicketSuccess(res.data))
        })
    }
}

export function CreateTicketSuccess(ticket){
    return {
        type:CREATE_TICKET_SUCCESS,
        ticket
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


//Update
export function StartEditing(id) {
    return {
        type: START_EDITING,
        id
    }
}
export function CancelEditing(id) {
    return {
        type: CANCEL_EDITING,
        id
    }
}

export function UpdateTicket(ticket) {
    return (dispatch, getState) => {
        
        //Multiple actions can be sent usign the Redux-Thunk middleware

        dispatch({
            type: UPDATE_TICKET,
            ticket
        })
        TicketApi.updateTicket(ticket).then(res => {
            dispatch(UpdateTicketSuccess(res.data))
        })
    }
}
export function UpdateTicketSuccess(ticket) {
    return {
        type: UPDATE_TICKET_SUCCESS,
        ticket,
        id: ticket.id
    }
}


//Delete
export function DeleteTicket(ticket) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_TICKET,
            ticket
        })
        TicketApi.removeTicket(ticket).then(res => {
            if (res.status === 204) {
                dispatch(DeleteTicketSuccess(ticket))
            }
        })
    }
}
export function DeleteTicketSuccess(ticket) {
    return {
        type: DELETE_TICKET_SUCCESS,
        ticket,
        id: ticket.id
    }
}