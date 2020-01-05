import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button, Row, Col } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'
import Sidebar from '../components/Sidebar'



const tagsPage = ({ pageContext }) => {
	const { tags, tagPostCounts } = pageContext; // descturinc
	return (
		<Layout pageTitle="App tags">
			<SEO title="All tags" keywords={['tags, topics']} />
				<Row>
					<Col md="12">
					    <div className="mb-5" style={{backgroundColor: '#343A40', color: '#FFFFFF', padding: '6rem'}}>
					      <h3>Kumpulan Informasi Menarik dari Informers Unkriswina Sumba</h3>
					      <p>Carilah informasi yang kamu inginkan berdasarkan tag</p>
					    </div>
					    </Col>
					<Col md="8">
						<ul>
							{tags.map(tag => (
								<li key={tag} style={{marginBottom: '10px'}}>
									<Button color="primary" href={`/tag/${slugify(tag)}`}>
										{tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
									</Button>
								</li>
							))}
						</ul>		
					</Col>
					<Col md="4">
			            <Sidebar />
					</Col>
				</Row>
		</Layout>
	)
}

export default tagsPage