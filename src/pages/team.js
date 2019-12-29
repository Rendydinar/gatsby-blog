/**
 * Page Team
 * Render team of contributor to blog post view
 */
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../util/authors'
import { Card, CardBody, CardTitle, Button, Row } from 'reactstrap'
// import JohnImage from '../images/john.jpg'
// import JaneImage from '../images/jane.jpg'
import AntiKangenImage from '../images/rendy-dinar.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="team" />
    <Row className="mb-4">
    	<div className="col-md-3">
			<img src={AntiKangenImage} style={{ maxWidth: '100%'}} alt="John profile" /> 
    	</div>	
    	<div className="col-md-8">
			<Card style={{minHeight: '100%'}}>
				<CardBody>
					<CardTitle>{authors[2].name}</CardTitle>
					<CardTitle>{authors[2].bio}</CardTitle>
					<Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[2].name)}`}>View posts</Button>
				</CardBody>
			</Card>
    	</div>	
    </Row>
  </Layout>
)

export default TeamPage
