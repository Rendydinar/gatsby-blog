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


const IndexPage = () => {
  const postsPerPage = 2; // jumlah post per page yang akan ditampilkan
  let numberOfPages;


  return (
  <Layout pageTitle="Shitposting Unfaedah">
    <SEO title="Home" />
      <StaticQuery query={indexQuery} render={data => {
      	numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
       	return (
		  <div>
		    {data.allMarkdownRemark.edges.map(({ node }) => (
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
		    ))}
			<PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
		  </div>
      	)
      }} />
  </Layout>
  )
}

const indexQuery = graphql`
	query indexQuery{
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order:DESC }
			limit: 2 
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
