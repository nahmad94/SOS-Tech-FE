import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import { Form, Container, Input } from 'semantic-ui-react'

export default function Contact() {
    const SERVICE_ID = 'gmail';
    const TEMPLATE_ID = 'contact_form';
    const USER_ID = 'ulvl6LJHWKdeop1uh';
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
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
         .then((res) => {
            console.log(res.text)
            e.target.reset()
         })
        // setfirstName('')
        // setlastName('')
        // setCompany('')
        // setEmail('')
        // setDescription('')
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
                        <Form.Input fluid label='First Name' placeholder='First Name' name='first_name' onChange={handleFirstName}/>
                        <Form.Input fluid label='Last Name' placeholder='Last Name' name='last_name' onChange={handleLastName}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Company Name' placeholder='Company Name' name='company_name' onChange={handleCompany}/>
                    </Form.Group>
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        fluid label='Email'
                        placeholder='email@email.com'
                        name='email'
                        // error={{
                        //     content: 'Please enter a valid email address',
                        //     pointing: 'below',
                        // }}
                        onChange={handleEmail}
                    />
                    <Form.TextArea label='Description' rows='6' name='description' placeholder='Tell us a little bit about your issue' onChange={handleDescription}/>
                    {/* <input ref='fileInput' type='file' /> */}
                    <Form.Checkbox label='I agree to the Terms of this contact form' />
                    <Form.Button onSubmit={handleSubmit} content='Sumbit' />
                </Form>
            </Container>
        </div>
    )
}
