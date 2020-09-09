import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundImage:
        "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
      marginBottom: `0`,
      display: `flex`,
    }}
  >
    <div
      style={{
        width: `100%`,
        maxWidth: `140px`,
        margin: `1.7rem 0 0 0`,
      }}
    ></div>
    <div
      style={{
        margin: `0`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, paddingBottom: `1rem` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{ color: `white` }}>Web Developer</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header