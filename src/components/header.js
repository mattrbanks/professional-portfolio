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
    transform: "rotate(45deg) translate(5.5px, 25px)",
  },
  barBottom: {
    width: "40px",
    height: "5px",
    backgroundColor: "#fff",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(-45deg) translate(-1.5px, 16px)",
  },
  changeBarTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#fff",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(-45deg) translate(-25.3px, 3px)",
  },
  changeBarBottom: {
    width: "40px",
    height: "5px",
    backgroundColor: "#fff",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(45deg) translate(11px, -1px)",
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
        backgroundImage:
          "url(https://raw.githubusercontent.com/mattrbanks/professional-portfolio/f79929663ea0f1bb9a7cf12511d70108fe1832bb/src/images/portfolio-mobile-header.svg)",
        backgroundPosition: `70%`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        height: `100vh`,
        marginBottom: `0`,
        display: `flex`,
        position: `relative`,
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
              color: `#fff`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
        <p style={{ color: `#fff`, marginBottom: `1rem` }}>
          Full Stack Web Developer
        </p>
        {/* <p style={{ color: `#000` }}>Email: banks.matt81@gmail.com</p> */}
      </div>

      <React.Fragment>
        <DesktopOnly>
          <div className={root}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                fontSize: "1.25rem",
              }}
            >
              <li>
                <a href="#welcome">About Me</a>
              </li>
              <li>
                <a href="#projects">My Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
            </ul>
          </div>
        </DesktopOnly>

        <div
          className={
            "show-mobile-nav mobile-menu-styles-p mobile-menu-styles-l"
          }
          // style={{ position: "relative" }}
        >
          <Button
            style={{ position: "absolute", top: "15%" }}
            disableRipple={true}
            onClick={handleToggle}
          >
            <div className={classes.mobileMenuIcon}>
              <div
                className={open === false ? barTopCSS : changeBarTopCSS}
              ></div>
              <div
                className={open === false ? barMiddleCSS : changeBarMiddleCSS}
              ></div>
              <div
                className={open === false ? barBottomCSS : changeBarBottomCSS}
              ></div>
            </div>
          </Button>
        </div>

        <MenuList
          className={
            open ? "mobile-nav-open-styles" : "mobile-nav-close-styles"
          }
          autoFocusItem={true}
        >
          <div style={{ display: "block", margin: "1rem" }}>
            <div>
              <MenuItem>
                <a
                  onClick={handleToggle}
                  style={{ color: "#fff" }}
                  href="#welcome"
                >
                  About
                </a>
              </MenuItem>
            </div>
            <div>
              <MenuItem>
                <a
                  onClick={handleToggle}
                  style={{ color: "#fff" }}
                  href="#projects"
                >
                  Projects
                </a>
              </MenuItem>
            </div>
            <div>
              <MenuItem>
                <a
                  onClick={handleToggle}
                  style={{ color: "#fff" }}
                  href="#contact"
                >
                  Contact
                </a>
              </MenuItem>
            </div>
            <div>
              <MenuItem>
                <a
                  onClick={handleToggle}
                  style={{ color: "#fff" }}
                  href="/resume"
                >
                  Resume
                </a>
              </MenuItem>
            </div>
          </div>
        </MenuList>
      </React.Fragment>
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

let DesktopOnly = styled.div`
  //width: 50%;
  a {
    text-decoration: none;
    background-image: linear-gradient(#fff, #fff);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s;
    color: #fff;
    margin-right: 1rem;
  }

  a:hover,
  a:focus {
    background-size: 100% 2px;
  }
  @media (max-width: 500px) and (orientation: portrait) {
    display: none;
  }
  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
  }
`
