import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import mblogo from "../images/mblogo.svg"

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
    >
      <img
        style={{
          margin: `0 0 0 2.5rem`,
        }}
        alt="mb logo"
        src={mblogo}
      />
    </div>
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
      <p style={{ color: `white`, marginBottom: `1rem` }}>
        Full Stack Web Developer
      </p>
      <p style={{ color: `white` }}>Email: banks.matt81@gmail.com</p>
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
