import {combineReducers} from 'redux'
import {TicketListReducer} from '../tickets/reducers/ticketReducer'
import {TagListReducer} from '../tickets/reducers/tagReducer'

//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.
 
const rootReducer = combineReducers({
    tickets: TicketListReducer,
    tags: TagListReducer
})

export default rootReducer