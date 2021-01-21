import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import mblogo from "../images/mblogo.svg"

import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import "./layout.css"

const useStyles = makeStyles({
  root: {
    backgroundImage:
      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
    paddingTop: "1rem",
  },
  mobileMenuIcon: {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  },
  barTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#fff",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(45deg) translate(-15.5px, 25px)",
  },
  barBottom: {
    width: "40px",
    height: "5px",
    backgroundColor: "#fff",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(-45deg) translate(-1.5px, -5px)",
  },
  changeBarTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#fff",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(-45deg) translate(-25.3px, -18px)",
  },
  changeBarBottom: {
    width: "40px",
    height: "5px",
    backgroundColor: "#fff",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(45deg) translate(-10px, -1px)",
  },
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const root = classes.root

  const barTopCSS = classes.barTop
  const barMiddleCSS = classes.barMiddle
  const barBottomCSS = classes.barBottom
  const changeBarTopCSS = classes.changeBarTop
  const changeBarMiddleCSS = classes.changeBarMiddle
  const changeBarBottomCSS = classes.changeBarBottom

  return (
    <header
      style={{
        // backgroundImage:
        //   "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
        marginBottom: `0`,
        display: `flex`,
      }}
    >
      <div
        style={{
          width: `100%`,
          maxWidth: `140px`,
          margin: `1.4rem 0 0 0`,
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
          padding: `1.5rem 1.0875rem 1.5rem 0rem`,
        }}
      >
        <h2 style={{ margin: 0, paddingBottom: `0rem` }}>
          <Link
            to="/"
            style={{
              color: `#000`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
        <p style={{ color: `#000`, marginBottom: `1rem` }}>
          Full Stack Web Developer
        </p>
        {/* <p style={{ color: `#000` }}>Email: banks.matt81@gmail.com</p> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
