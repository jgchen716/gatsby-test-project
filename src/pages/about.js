import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>Jonathan Chen is a sophomore studying CS at Penn. He enjoys weightlifting and reading in his free time.</p>
            <p>If you'd like to get in touch, contact me <Link to="/contact">here</Link></p>
        </Layout>
    )
}

export default AboutPage