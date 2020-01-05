/**
 * Page About
 * Render About view
 */
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardText } from 'reactstrap'
import ImageAbout from '../images/photo_2020-01-01_22-34-54.jpg'


const AboutPage = () => (
  <Layout pageTitle="About Us">
    <SEO title="About" />
	    <div className="mb-5" style={{backgroundColor: '#343A40', color: '#FFFFFF', padding: '6rem', width: '100%'}}>
			<h2 className="text-left" style={{marginRight: '8rem'}}>Tentang Unkriswina Informers</h2>
		</div>
		<img src={ImageAbout} className="img-fluid text-center" alt="Unkriswina Informers" />
		<Card>
			<CardBody>
				<h4 className="font-weight-bold"> Apa itu Unkriswina Informers ? </h4>
				<CardText className="text-left">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maxime repellendus, nobis voluptatibus repellat eaque sapiente laudantium. Eos nobis, iste temporibus quia. Expedita eveniet voluptate voluptatibus cumque nisi culpa exercitationem.
				</CardText> <br/>

				<h4 className="font-weight-bold">Tujuan Unkriswina Informers </h4>
				<CardText className="text-left">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maxime repellendus, nobis voluptatibus repellat eaque sapiente laudantium. Eos nobis, iste temporibus quia. Expedita eveniet voluptate voluptatibus cumque nisi culpa exercitationem.
				</CardText>

				<h4 className="font-weight-bold">Visi Misi Unkriswina Informers </h4>
				<CardText className="text-left">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maxime repellendus, nobis voluptatibus repellat eaque sapiente laudantium. Eos nobis, iste temporibus quia. Expedita eveniet voluptate voluptatibus cumque nisi culpa exercitationem.
				</CardText>
			</CardBody>
		</Card>


  </Layout>
)

export default AboutPage
