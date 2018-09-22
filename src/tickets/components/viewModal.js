import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form, Input } from 'semantic-ui-react'

export default class ViewModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    let ticket = Object.entries(this.props.ticket)
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}><i className="fa fa-eye"></i> View Ticket</Button>}
        open={this.state.modalOpen} onClose={this.handleClose} size='small'>
        <Header icon='th' content='Ticket Detail'/>
        <Modal.Content>
            <Form>
            {Object.entries(this.props.ticket).map(([key, value]) => 
                <Form.Field fluid inline readOnly control={Input} label={key} placeholder={value} key={value}>
                </Form.Field>)
            }
            </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}