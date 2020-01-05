import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import PaginationLinks from '../components/PaginationLinks'
import { Row, Col } from 'reactstrap'
import Welcome from '../components/Welcome'


const postList = (props) => {
	const posts = props.data.allMarkdownRemark.edges
	const { currentPage, numberOfPages } = props.pageContext

	return (
		<Layout pageTitle={`Page: ${currentPage}`} >
		    <div className="row">
		    	<div className="col-md-12">
				    <Welcome />
		    	</div>
		    </div>

			<Row>
				{ posts.map(({node}) => (
				<Col md="4">
					<Post key={node.id}
						slug={node.fields.slug}
						title={node.frontmatter.title}
						author={node.frontmatter.author}
						date={node.frontmatter.date}
						body={node.excerpt}
						tags={node.frontmatter.tags}
						fluid={node.frontmatter.image.childImageSharp.fluid}
					/>
				</Col>
				))}
			</Row>
			<PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />
		</Layout>
	)

}

export const postListQuery = graphql`
	query postListQuery($skip: Int!, $limit: Int!){
		allMarkdownRemark( 
			sort: { fields: [frontmatter___date], order: DESC}
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM Do YYYY")
						author
						tags
						image {
							childImageSharp {
								fluid(maxWidth: 650, maxHeight: 371) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`

export default postList