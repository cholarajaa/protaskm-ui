import React, { Component } from 'react'
import { Button, Form, Image, Modal } from 'semantic-ui-react'


const options = [
    { key: 'CR', text: 'Critical', value: 'CR' },
    { key: 'HG', text: 'High', value: 'HG' },
    { key: 'NR', text: 'Normal', value: 'NR' },
    { key: 'LW', text: 'Low', value: 'LW' },
    { key: 'VL', text: 'Very Low', value: 'VL' },
]

class TicketModal extends Component {
    constructor(props, state) {
        super(props);
        this.state = {modalOpen: false};
    }
    handleChange = (e, { name, value }) =>{
        this.setState({ [name]: value })
    }
    
    handleSubmit = () => {
        this.props.createTicket(this.state);
        this.setState({ modalOpen: false })
    }

    render() {
        return (
        <Modal open={this.state.modalOpen}
            trigger={<Button onClick={()=>{
                this.setState({modalOpen: true})}}>
            {this.props.title}</Button>}
            onClose={this.handleSubmit}>
        <Modal.Header>{this.props.title}</Modal.Header>
            <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input name='summary' type='text' required label='summary'
                        placeholder='Summary' onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Select name='priority' label='priority'
                    onChange={this.handleChange}  
                    options={options} placeholder='Priority' />
                </Form.Group> 
                <Form.Group widths='equal'>
                    <Form.Input name='tag' label='tag' onChange={this.handleChange}
                        list='tags' placeholder='Tag' />
                    <datalist id='tags'>
                        {this.props.tags.map((item) =>
                            <option value={item.name} key={item.id}/>
                        )}
                        </datalist>
                </Form.Group>        
                    <Form.TextArea name='description' label='description'
                        placeholder='Description of the ticket...'
                        onChange={this.handleChange}
                    />
                <Form.Button>Submit</Form.Button>
            </Form>
            </Modal.Content>
        </Modal>
    )
}
}
export default TicketModal;