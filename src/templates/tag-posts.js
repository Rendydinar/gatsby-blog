import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Post from '../components/Post'
import { Row, Col } from 'reactstrap'
const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} postingan dengan tag "${tag}"`


		return (
		<Layout pageTitle={pageHeader}>
			<h1 style={{paddingTop: '5rem'}}>{pageHeader}</h1>

			<Row>
				{data.allMarkdownRemark.edges.map(({node}) => (
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
		</Layout>
	)
}

// query graphql untuk melakuakn fetch graphql untuk mendapatkan daftar postingan berdasarkan tag
export const tagQuery = graphql`
	query($tag: String!) {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag]}}}
		){
			totalCount
			edges{
				node{
					id
					frontmatter{
						title
						date(formatString: "MMMM Do YYTY")
						author
						tags
						image{
							childImageSharp{
								fluid(maxWidth: 650, maxHeight: 371){
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

export default tagPosts