// File template untuk menampilkan single post

import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import {Card, CardBody, CardSubtitle, Badge } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'
import Img from 'gatsby-image'
import authors from '../util/authors'
import { DiscussionEmbed } from 'disqus-react' // import olugin disqus-rect


const SinglePost = ({ data, pageContext }) => {
	const post = data.markdownRemark.frontmatter // descturing hasil fetch api graphql untuk mendapatkan 1 post utuh.
	const author = authors.find(author => author.name === post.author); // ambil author post

	const baseUrl = `https://gatsbytutorial.co.uk/`

	// config untuk plugin disqus pada react
	  const disqusShortname = 'https-gatsbytutorial-co-uk'
	  const disqusConfig = {
	    identifier: data.markdownRemark.id,
	    title: post.title,
	    url: baseUrl + pageContext.slug,
	  }

	return ( 
		<Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
			<SEO title={post.title} />
			<h1>{post.title}</h1>
			<Card>
				<Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
				<CardBody>
					<CardSubtitle>
						<span className="text-info">{post.date}</span> by {' '}
						<span className="text-info">{post.author}</span>
					</CardSubtitle>
					<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
					<ul className="post-tags">
						{
							post.tags.map(tag => (
								<li key={tag}>
									<Link to={`/tag/${slugify(tag)}`} >
										<Badge color="primary">{tag}</Badge>
									</Link>
								</li>
							))
						}
					</ul>
				</CardBody>
				</Card>  
				<h3 className="text-center">
					Share this post
				</h3>
				<div className="text-center social-share-links">
					<ul>
						<li>
							<a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug} className="facebook" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-facebook-f fa-2x" />
							</a>
						</li>
						<li>
							<a href={'https://twitter.com/share?url=' + baseUrl + pageContext.slug + '&text' + post.title + '&via' + 'twitterHandle'} className="twitter" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter  fa-2x" />
							</a>
						</li>
						<li>
							<a href={'https://plus.google.com/share?url=' + baseUrl + pageContext.slug} className="google" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-google  fa-2x" />
							</a>
						</li>
						<li>
							<a href={'https://linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug} className="linkedin" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin  fa-2x" />
							</a>
						</li>
					</ul>
				</div>
				<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
		</Layout>	
	)
}

// graphql query untku melakukan fecth api untuk mendapatkan data 1 buah post di file markdown

export const postQuery = graphql`
	query blogPostBySlug($slug: String!, $imageUrl: String!) {
		markdownRemark(fields: { slug: { eq: $slug }}) {
			id
			html
			frontmatter {
				title
				author
				date(formatString: "MMM Do YYYY")
				tags
				image {
					childImageSharp {
						fluid(maxWidth: 700) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		} 
		file(relativePath: { eq: $imageUrl}) {
			childImageSharp{
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
export default SinglePost