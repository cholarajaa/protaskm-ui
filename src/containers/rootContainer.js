import React, { Component } from 'react';
import AppHeader from '../components/appHeader';
import TicketContainer from '../tickets/containers/ticketContainer';


class RootContainer extends Component {
    render() {
        return (
            <div className="root-container">
                <AppHeader/>
                <TicketContainer/>
            </div>
        );
    }
}

export default RootContainer;