import React from 'react'
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import authors from '../util/authors'
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'


const authorPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const author = authors.find(x => x.name === pageContext.authorName)

  return (
    <Layout >
      <h1 className="text-center" style={{paddingTop: '5rem'}}>{totalCount} Postingan Oleh {author.name}</h1>
      <Row>
        <Col md="8">
          <Row>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Col md="4">
                <Post
                  key={node.id}
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
        </Col>
        <Col md="4">
          <Sidebar author={author} authorFluid={data.file.childImageSharp.fluid} />
        </Col>
      </Row>
    </Layout>
  )
}

export const authorQuery = graphql`
  query($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
    ) {
      totalCount
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
                fluid(maxWidth: 650) {
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
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default authorPosts
