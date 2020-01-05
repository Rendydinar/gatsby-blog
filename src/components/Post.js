/**
  Post compoent
  Component ini digunakan untuk menampilkan 1 buah card post pada blog. tidak untuk render 1 post full
 */

import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

// destructuring.
const Post = ({title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={slug}>
        <Img className="Card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <h3><Link to={slug}><b>{title}</b></Link></h3>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{' '}
          <span className="text-info">{author}</span>         
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge style={{backgroundColor: '#00B5D4'}} className="text-uppercase">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul> 
        <br/>
        <Link to={slug} className="btn float-right" style={{backgroundColor: '#00B5D4'}}><span style={{color: '#FFF'}}>Baca selengkapnya</span></Link>
      </CardBody>
    </Card>
  )
}

export default Post
