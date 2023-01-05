import React from 'react'
import About from './About'
import Home from './Home'
import Project from './Project'
import Contact from './Contact'
import {HashLink} from 'react-router-hash-link'

export default function MainPage() {
    return (
        <div>
            <section id="home">
                <Home/>
            </section>
            <section id="about">
                <About id="about"/>
            </section>
            <section id='projects'>
                <Project id="projects"/>
            </section> 
            <section id='contact'>
                <Contact id="contact"/>
            </section>
        </div>
    )
}
