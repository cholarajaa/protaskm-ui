import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.

const API = 'https://protaskapi.herokuapp.com/api'

//Setting the tickets URI

const TICKET_API = `${API}/tickets/`

// The CRUD Operations of the Todo Resource.


//Create
const createTicket = ticket => {
    return HttpClient.post(TICKET_API, ticket)
}

//Read
const getTicket = () => {
    return HttpClient.get(TICKET_API)
}

//Update
const updateTicket = ticket => {
    return HttpClient.put(`${TICKET_API}${ticket.id}/`, ticket)
}

//Delete
const removeTicket = ticket => {
    return HttpClient.delete(`${TICKET_API}${ticket.id}/`)
}


//Encapsulating in a JSON object

const TicketApi = {createTicket, getTicket, updateTicket, removeTicket}
export {TicketApi}