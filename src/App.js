import React from 'react';
// import logo from './logo.svg';

//Import the modified App.css
import './App.css';

// Import the Routes component, which contains our Route setup

import { Routes } from './Routes'


// Provider component is a react-redux component for setting up the Redux Store

import { Provider } from 'react-redux'

// Import the ConfigureStore that holds the initial Configuration

import { configureStore } from './store/configureStore'

import * as TicketActions from './tickets/actions/ticketActions'
import * as TagActions from './tickets/actions/tagActions'

// import AppBar from 'material-ui/AppBar';


// Create a Store from the Configuration, we can pass a Initial State here

const store = configureStore()

// At first dispatch a Get Tickets Actions, So we'll recieve the Tickets 
// fetched from the server at the start of the app

store.dispatch(TicketActions.GetTickets())
store.dispatch(TagActions.GetTags())

const App = (props) => {
  return (
    
    //Provider needs to contain all the Containers/Components it will give access to the Store

      <Provider store={store} >
        <Routes />
      </Provider>
  )
}
export default App;