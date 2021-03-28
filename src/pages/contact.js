import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <p>Phone: 1234567890</p>
            <p>Email: 123@gmail.com</p>
            <p><Link to='https://www.twitter.com' target='_blank'>Twitter</Link></p>
        </Layout>
    )
}

export default ContactPage