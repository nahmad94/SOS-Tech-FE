import React, {useState} from 'react'
import { Form, Container, Input } from 'semantic-ui-react'

export default function Contact() {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    function handleFirstName(e) {
        e.preventDefault();
        setfirstName(e.target.value)
    }
    function handleLastName(e) {
        e.preventDefault();
        setlastName(e.target.value)
    }
    function handleCompany(e) {
        e.preventDefault();
        setCompany(e.target.value)
    }
    function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value)
    }
    function handleDescription(e) {
        e.preventDefault();
        setDescription(e.target.value)
    }
    console.log(description)
    // console.log(email)
    return (
        
        <div>
            <Container text>
            <h3>Please send us a message describing your issue</h3>
            <h4>and the appropriate team member will contact you.</h4>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='First Name' placeholder='First Name' onChange={handleFirstName}/>
                        <Form.Input fluid label='Last Name' placeholder='Last Name' onChange={handleLastName}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Company Name' placeholder='Company Name' onChange={handleCompany}/>
                    </Form.Group>
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        placeholder='joe@schmoe.com'
                        error={{
                            content: 'Please enter a valid email address',
                            pointing: 'below',
                        }}
                        onChange={handleEmail}
                    />
                    <Form.TextArea label='Description' placeholder='Tell us a little bit about your issue' onChange={handleDescription}/>
                    <Form.Checkbox label='I agree to the Terms of this contact form' />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        </div>
    )
}
