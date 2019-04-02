import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DwvComponent from './DwvComponent'

const SecondPage = () => (
  
  <Layout>
    <DwvComponent />
    <SEO title="Page two" />
    <h3>Drag and drop radiology scan above</h3>
    <p>RapidRads</p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  
)

export default SecondPage
