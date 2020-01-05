/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/**
 * Layout component
 * Compoent ini akan digunakan oleh semua page karna compoent ini yang akan mengantur tata letak page 
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import '../styles/index.scss'
import Footer from './Footer'
import UnrkriswinaLogo from '../images/logo_client.png'

import { Row, Col, Card, CardTitle, CardBody, FormGroup, Form, CardText } from 'reactstrap'


const Layout = ({ children }) => { // props.pageTitle
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {  
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      />

      <div id="content" className="container-fluid">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{width: '100%'}}>{children}</div>
        <div>
              <Card className="text-white mb-3 text-center" style={{backgroundColor: '#00B5D4', padding: '1.8rem'}}>
                <CardBody>
                  <Row>
                    <Col md="8">
                      <Card style={{color: 'black'}}>
                        <CardTitle> <h3>Newsletter...</h3> </CardTitle>        
                        <CardText> Masukan email milikmu agar tidak ketinggalan update dari Informers Unrkriswina Blog</CardText>
                        <CardBody>
                          <Form>
                            <FormGroup> 
                              <input type="email" name="email" placeholder="Email..." style={{width: '100%'}}/>
                            </FormGroup>
                            <button className="btn text-uppercase btn-success" style={{width: '100%'}}>Subscribe</button>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="4">
                      <img src={UnrkriswinaLogo} className="img-fluid" alt="Unrkriswina Sumba" />
                    </Col>
                  </Row>
                </CardBody>
              </Card>

        </div>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
