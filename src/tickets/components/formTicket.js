import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'CR', text: 'Critical', value: 'CR' },
  { key: 'HG', text: 'High', value: 'HG' },
  { key: 'NR', text: 'Normal', value: 'NR' },
  { key: 'LW', text: 'Low', value: 'LW' },
  { key: 'VL', text: 'Very Low', value: 'VL' },
]

export class FormExampleSubcomponentControl extends Component {
    constructor(props) {
        super(props);
        this.state = {summary: '', assignee: '',
        description: '', priority: 'NR'}
    }
    searchTags = (e, {name, value}) => {
        
    }

  handleChange = (e, { name, value }) =>{
      console.log(this.state);
       this.setState({ [name]: value })}
  handleSubmit = () => {
      this.props.createTicket(this.state);
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input name='summary' label='summary'
            placeholder='Summary' onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select name='priority' label='priority'
          onChange={this.handleChange}  
          options={options} placeholder='Priority' />
        </Form.Group> 
        <Form.Group widths='equal'>
          <Form.Input name='tag' label='tag'
            onChange={this.searchTags} list='languages'
            placeholder='Tag' />
            <datalist id='languages'>
                <option value='English' />
                <option value='Chinese' />
                <option value='Dutch' />
            </datalist>
        </Form.Group>        
        <Form.TextArea name='description' label='description'
            placeholder='Description of the ticket...'
            onChange={this.handleChange}
        />
        <Form.Group widths='equal'>
          <Form.Input name='assignee' label='assignee'
            placeholder='Assignee' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl;
