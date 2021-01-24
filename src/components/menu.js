import React from "react"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import mblogo from "../images/mblogo.svg"
import "./layout.css"

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundImage:
      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
    paddingTop: "1rem",
    position: "fixed",
    width: "100%",
    zIndex: "1000",
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

const Menu = () => {
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
    <React.Fragment>
      <DesktopOnly>
        <div className={root}>
          <div
          // style={{
          //   position: "fixed",
          //   width: `100%`,
          //   maxWidth: `140px`,
          //   margin: `0.5rem 0 0 0`,
          //   left: "0",
          // }}
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
              margin: `0 0 0 1.5rem`,
              maxWidth: 960,
              //padding: `1.5rem 1.0875rem 1.5rem 0rem`,
            }}
          >
            <h2 style={{ margin: 0, paddingBottom: `0rem` }}>
              <a
                href="/"
                style={{
                  color: `#fff`,
                  textDecoration: `none`,
                }}
              >
                Matthew Banks
              </a>
            </h2>
            <p style={{ color: `#fff`, marginBottom: `1rem` }}>
              Full Stack Web Developer
            </p>
            {/* <p style={{ color: `#000` }}>Email: banks.matt81@gmail.com</p> */}
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-evenly",
              fontSize: "1.25rem",
            }}
          >
            <li>
              <a href="javascript:document.getElementById('welcome').scrollIntoView(true);">
                About Me
              </a>
            </li>
            <li>
              <a href="javascript:document.getElementById('projects').scrollIntoView(true);">
                My Projects
              </a>
            </li>
            <li>
              <a href="javascript:document.getElementById('contact').scrollIntoView(true);">
                Contact
              </a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </div>
      </DesktopOnly>

      <div
        className={"show-mobile-nav mobile-menu-styles-p mobile-menu-styles-l"}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
          paddingTop: "1rem",
          position: "fixed",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: `100%`,
            maxWidth: `140px`,
            margin: `0.5rem 0 0 0`,
            left: "0",
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
        <Button
          style={{ position: "absolute", top: "35%", right: "0" }}
          disableRipple={true}
          onClick={handleToggle}
        >
          <div className={classes.mobileMenuIcon}>
            <div className={open === false ? barTopCSS : changeBarTopCSS}></div>
            <div
              className={open === false ? barMiddleCSS : changeBarMiddleCSS}
            ></div>
            <div
              className={open === false ? barBottomCSS : changeBarBottomCSS}
            ></div>
          </div>
        </Button>
      </div>

      <MobileOnly>
        <MenuList
          className={
            open
              ? "mobile-nav-open-styles-fixed"
              : "mobile-nav-close-styles-fixed"
          }
          autoFocusItem={true}
        >
          <div style={{ display: "block", margin: "1rem" }}>
            <div>
              <a
                onClick={handleToggle}
                style={{ color: "#fff" }}
                href="javascript:document.getElementById('welcome').scrollIntoView(true);"
              >
                <MenuItem>About</MenuItem>
              </a>
            </div>
            <div>
              <a
                onClick={handleToggle}
                style={{ color: "#fff" }}
                href="javascript:document.getElementById('projects').scrollIntoView(true);"
              >
                <MenuItem>Projects</MenuItem>
              </a>
            </div>
            <div>
              <a
                onClick={handleToggle}
                style={{ color: "#fff" }}
                href="javascript:document.getElementById('contact').scrollIntoView(true);"
              >
                <MenuItem>Contact</MenuItem>
              </a>
            </div>
            <div>
              <a
                onClick={handleToggle}
                style={{ color: "#fff" }}
                href="/resume"
              >
                <MenuItem>Resume</MenuItem>
              </a>
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "2%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Button
              style={{ color: "#fff" }}
              disableRipple={true}
              onClick={handleToggle}
            >
              close
            </Button>
          </div>
        </MenuList>
      </MobileOnly>
    </React.Fragment>
  )
}
export default Menu

let DesktopOnly = styled.div`
  a {
    text-decoration: none;
    background-image: linear-gradient(#fff, #fff);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.3s;
    color: #fff;
  }

  a:hover {
    background-size: 100% 2px;
  }

  @media (max-width: 500px) and (orientation: portrait) {
    display: none;
  }
  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
  }
`

let MobileOnly = styled.div`
  .mobile-nav-close-styles-fixed {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
    display: inline-block;
    cursor: pointer;
    transform: translateX(100%);
    transition: 0.5s ease-in;
    background-color: transparent;
    color: black;
    opacity: 0;
    background-color: #000;
    width: 0%; /* This needs to be 0 for overflow hidden to work for mobile. */
    overflow: hidden;
    height: 100vh;
  }
  .mobile-nav-open-styles-fixed {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
    display: inline-block;
    cursor: pointer;
    transform: translateX(0%);
    transition: 0.5s ease-out;
    background-color: transparent;
    color: black;
    opacity: 1;
    background-color: #000;
    width: 100%;
    height: 100vh;
  }
`
