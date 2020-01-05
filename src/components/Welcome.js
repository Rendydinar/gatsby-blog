// Welcome Compoent
import PropTypes from "prop-types"
import React from "react"

const Welcome = ({ siteTitle }) => {

  return (
    <div className="container-fluid mb-5" style={{backgroundColor: '#343A40', color: '#FFFFFF', paddingTop: '6rem', paddingBottom: '6rem'}}>
      <h1 className="display-4  text-left">Unkriswina Sumba Informers Blog</h1>
      <p className="lead  text-left">Dapatkan pengetahuan seputar IT dari Informers Unkriswina Sumba</p>
    </div>
  );
}

Welcome.propTypes = {
  siteTitle: PropTypes.string,
}

Welcome.defaultProps = {
  siteTitle: ``,
}

export default Welcome
