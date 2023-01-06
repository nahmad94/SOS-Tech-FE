import React from 'react'
import emailjs from 'emailjs-com'
import { Form, Container, Input } from 'semantic-ui-react'

export default function Contact() {
    const SERVICE_ID = 'gmail';
    const TEMPLATE_ID = 'contact_form';
    const USER_ID = 'ulvl6LJHWKdeop1uh';
    function handleSubmit(e) {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
         .then((res) => {
            console.log(res.text)
            alert('Contact form submitted, a team member will reach out to you shortly.')
            e.target.reset()
         }, (err) => {
            console.log(err)
            alert('Sorry, your contact information was not sent. Please refresh the page and try again.')
         })
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
                        <Form.Input fluid label='First Name' placeholder='First Name' name='first_name'/>
                        <Form.Input fluid label='Last Name' placeholder='Last Name' name='last_name'/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Company Name' placeholder='Company Name' name='company_name'/>
                    </Form.Group>
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        fluid label='Email'
                        placeholder='email@email.com'
                        name='email'
                    />
                    <Form.TextArea label='Description' rows='6' name='description' placeholder='Tell us a little bit about your issue'/>
                    <Form.Button onSubmit={handleSubmit} content='Sumbit' />
                </Form>
            </Container>
        </div>
    )
}
