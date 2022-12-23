import React from 'react'
import { Form } from 'semantic-ui-react'

export default function Contact() {
  return (
    <div>
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First Name' placeholder='First Name' />
                <Form.Input fluid label='Last Name' placeholder='Last Name' />
            </Form.Group>
            <Form.Group inline>
                <Form.Input fluid label='Company Name' placeholder='Company Name' />
            </Form.Group>
            <Form.TextArea label='Description' placeholder='Tell us a little bit about your issue' />
            <Form.Checkbox label='I agree to the Terms of this contact form' />
            <Form.Button>Submit</Form.Button>
        </Form>
        <h1>Connect with us!</h1>
        
    </div>
  )
}
