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
    function handleSubmit(e) {
        e.preventDefault()
        setfirstName('')
        setlastName('')
        setCompany('')
        setEmail('')
        setDescription('')
        alert('Contact form submitted, a team member will reach out to you shortly.')
    }
    return (
        
        <div className='contact-container'>
            <Container text>
                <div className='contact-greet'>
                    <h3>Please send us a message describing your issue <br />
                    and the appropriate team member will contact you.</h3>
                    
                </div>
                <Form onSubmit={handleSubmit}>
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
                        fluid label='Email'
                        placeholder='email@email.com'
                        // error={{
                        //     content: 'Please enter a valid email address',
                        //     pointing: 'below',
                        // }}
                        onChange={handleEmail}
                    />
                    <Form.TextArea label='Description' rows='6' placeholder='Tell us a little bit about your issue' onChange={handleDescription}/>
                    {/* <input ref='fileInput' type='file' /> */}
                    <Form.Checkbox label='I agree to the Terms of this contact form' />
                    <Form.Button content='Sumbit' />
                </Form>
            </Container>
        </div>
    )
}
