import React from "react"
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
        className={"show-mobile-nav mobile-menu-styles-p mobile-menu-styles-l"}
        style={{ position: "relative" }}
      >
        <Button
          style={{ position: "absolute", top: "40%" }}
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
      </div>
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
