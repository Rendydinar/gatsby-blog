/**
 * Page index
 * Render main page view
 */
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'
import Welcome from '../components/Welcome'
import { Row, Col } from 'reactstrap'

const IndexPage = () => {
  const postsPerPage = 6; // jumlah post per page yang akan ditampilkan
  let numberOfPages;


  return (
  <Layout pageTitle="">
    <SEO title="Home" />
    <div className="row">
    	<div className="col-md-12">
		    <Welcome />
    	</div>
    </div>
      <StaticQuery query={indexQuery} render={data => {
      	numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
       	return (
		  <Row>
		    {data.allMarkdownRemark.edges.map(({ node }) => (
			  <Col md="4">
				  <Post 
					key={node.id}
				  	title={node.frontmatter.title}
					author={node.frontmatter.author}
					date={node.frontmatter.date}
					slug={node.fields.slug}
					body={node.excerpt}
					fluid={node.frontmatter.image.childImageSharp.fluid}
					tags={node.frontmatter.tags}
				  /> 
			  </Col>
		    ))}
		    <Col md="12">
				<PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
		    </Col>
		  </Row>
      	)
      }} />
  </Layout>
  )
}

const indexQuery = graphql`
	query indexQuery{
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order:DESC }
			limit: 6
		) {
			totalCount
		    edges {
		      node {
		        id
		        frontmatter {
		          title
		          date(formatString: "MMM Do YYYY")
		          author
		          tags
		          image {
		          	childImageSharp {
		          	  fluid(maxWidth: 500) {
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

export default IndexPage
