import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { FormExampleSubcomponentControl } from './formTicket'

class TicketModal extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log('test', this.props.tactions.GetTags());
        var promise = this.props.tactions.GetTags();
    }

    render() {
        return (
        <Modal trigger={<Button>{this.props.title}</Button>}>
        <Modal.Header>{this.props.title}</Modal.Header>
        <Modal.Content>
        <FormExampleSubcomponentControl createTicket={this.props.createTicket}/>
        </Modal.Content>
        </Modal>
    )
}
}
export default TicketModal;