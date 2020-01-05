/**
 * Page Team
 * Render team of contributor to blog post view
 */
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../util/authors'
import { Card, CardBody, CardTitle, Button, Row, Col, CardText } from 'reactstrap'
import UmbuRambu from '../images/informers.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="team" />
    	    <div className="mb-5" style={{backgroundColor: '#343A40', color: '#FFFFFF', padding: '6rem', width: '100%'}}>
	    		<h2>Kumpulan Informers Unkriswina Sumba yang selalu berbagi informasi</h2>
			</div>
			<Row>
				<Col md="4">
				 	<Card>
				 		<img className="card-image-top" src={UmbuRambu} alt={authors[0].name} />
				 		<CardBody>
			 				<CardTitle className="text-center text-uppercase mb-3">{authors[0].name}</CardTitle>
			 				<CardText>{authors[0].bio}</CardText>
			 				<div className="author-social-links text-center">
			 					<ul>
			 						<li><a href={authors[0].facebook} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f fa-lg"></i></a></li>
			 						<li><a href={authors[0].twitter} target="_blank" rel="noopener noreferrer" className="twitter"><i className="fab fa-twitter fa-lg"></i></a></li>
			 						<li><a href={authors[0].instagram} target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram fa-lg"></i></a></li>
			 						<li><a href={authors[0].google} target="_blank" rel="noopener noreferrer" className="google"><i className="fab fa-google fa-lg"></i></a></li>
			 						<li><a href={authors[0].linkedin} target="_blank" rel="noopener noreferrer" className="linkendin"><i className="fab fa-linkendin fa-lg"></i></a></li>
			 					</ul>
			 				</div>
			 				<div className="text-right"> <Button classname="text-uppercase" style={{color: '#FFFFFF', backgroundColor: '#00B5D4'}} href={`/author/${slugify(authors[1].name)}`} >Lihat Postingan</Button> </div>
				 		</CardBody>
				 	</Card>
				</Col>
				<Col md="4">
				 	<Card>
				 		<img className="card-image-top" src={UmbuRambu} alt={authors[0].name} />
				 		<CardBody>
			 				<CardTitle className="text-center text-uppercase mb-3">{authors[0].name}</CardTitle>
			 				<CardText>{authors[0].bio}</CardText>
			 				<div className="author-social-links text-center">
			 					<ul>
			 						<li><a href={authors[0].facebook} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f fa-lg"></i></a></li>
			 						<li><a href={authors[0].twitter} target="_blank" rel="noopener noreferrer" className="twitter"><i className="fab fa-twitter fa-lg"></i></a></li>
			 						<li><a href={authors[0].instagram} target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram fa-lg"></i></a></li>
			 						<li><a href={authors[0].google} target="_blank" rel="noopener noreferrer" className="google"><i className="fab fa-google fa-lg"></i></a></li>
			 						<li><a href={authors[0].linkedin} target="_blank" rel="noopener noreferrer" className="linkendin"><i className="fab fa-linkendin fa-lg"></i></a></li>
			 					</ul>
			 				</div>
			 				<div className="text-right"> <Button classname="text-uppercase" style={{color: '#FFFFFF', backgroundColor: '#00B5D4'}} href={`/author/${slugify(authors[1].name)}`} >Lihat Postingan</Button> </div>
				 		</CardBody>
				 	</Card>
				</Col>
				<Col md="4">
				 	<Card>
				 		<img className="card-image-top" src={UmbuRambu} alt={authors[0].name} />
				 		<CardBody>
			 				<CardTitle className="text-center text-uppercase mb-3">{authors[0].name}</CardTitle>
			 				<CardText>{authors[0].bio}</CardText>
			 				<div className="author-social-links text-center">
			 					<ul>
			 						<li><a href={authors[0].facebook} target="_blank" rel="noopener noreferrer" className="facebook"><i className="fab fa-facebook-f fa-lg"></i></a></li>
			 						<li><a href={authors[0].twitter} target="_blank" rel="noopener noreferrer" className="twitter"><i className="fab fa-twitter fa-lg"></i></a></li>
			 						<li><a href={authors[0].instagram} target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram fa-lg"></i></a></li>
			 						<li><a href={authors[0].google} target="_blank" rel="noopener noreferrer" className="google"><i className="fab fa-google fa-lg"></i></a></li>
			 						<li><a href={authors[0].linkedin} target="_blank" rel="noopener noreferrer" className="linkendin"><i className="fab fa-linkendin fa-lg"></i></a></li>
			 					</ul>
			 				</div>
			 				<div className="text-right"> <Button classname="text-uppercase" style={{color: '#FFFFFF', backgroundColor: '#00B5D4'}} href={`/author/${slugify(authors[1].name)}`} >Lihat Postingan</Button> </div>
				 		</CardBody>
				 	</Card>
				</Col>
			</Row>
  </Layout>
)

export default TeamPage
