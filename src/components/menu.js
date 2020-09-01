import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage:
      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
    paddingTop: "1rem",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  noBigScreenMenuStyles: {
    display: "none",
  },
  noMobileMenuStyles: {
    display: "none",
  },
  mobileMenuStylesP: {
    backgroundImage:
      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
    padding: "0.5rem",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "1.25rem",
    position: "relative",
    zIndex: "10",
    width: "100%",
    height: "16rem",
    overflowX: "hidden",
  },
  mobileMenuStylesL: {
    backgroundImage:
      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
    padding: "0.5rem",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "1.25rem",
    position: "relative",
    zIndex: "10",
    width: "100%",
    height: "16rem",
    overflowX: "hidden",
  },
  mobileMenuIcon: {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  },
  mobileNavClose: {
    position: "absolute",
    right: "0",
    top: "0",
    display: "inline-block",
    cursor: "pointer",
    transform: "translateX(100%)",
    transition: "0.5s ease-in",
    backgroundColor: "transparent",
    color: "black",
    opacity: "0",
  },
  mobileNavOpen: {
    position: "absolute",
    right: "0",
    top: "0",
    display: "inline-block",
    cursor: "pointer",
    transform: "translateX(0%)",
    transition: "0.5s ease-out",
    backgroundColor: "transparent",
    color: "black",
    opacity: "1",
  },
  barTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#000",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(45deg) translate(-15.5px, 25px)",
  },
  barBottom: {
    width: "40px",
    height: "5px",
    backgroundColor: "#000",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(-45deg) translate(-1.5px, -5px)",
  },
  changeBarTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#000",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(-45deg) translate(-25.3px, -18px)",
  },
  changeBarBottom: {
    width: "40px",
    height: "5px",
    backgroundColor: "#000",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(45deg) translate(-10px, -1px)",
  },
}))

const Menu = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  const root = classes.root
  const mobileNavCloseStyles = classes.mobileNavClose
  const mobileNavOpenStyles = classes.mobileNavOpen

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
              <Link to="#welcome">About Me</Link>
            </li>
            <li>
              <Link to="#projects">My Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </DesktopOnly>
      <MobileOnly>
        <div className={"mobile-menu-styles-p mobile-menu-styles-l"}>
          <Button disableRipple={true} onClick={handleToggle}>
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
          <MenuList
            className={open ? mobileNavOpenStyles : mobileNavCloseStyles}
            autoFocusItem={true}
          >
            <div style={{ display: "block", margin: "1rem" }}>
              <div>
                <MenuItem>
                  <Link
                    onClick={handleToggle}
                    style={{ color: "#fff" }}
                    to="#welcome"
                  >
                    About
                  </Link>
                </MenuItem>
              </div>
              <div>
                <MenuItem>
                  <Link
                    onClick={handleToggle}
                    style={{ color: "#fff" }}
                    to="#projects"
                  >
                    Projects
                  </Link>
                </MenuItem>
              </div>
              <div>
                <MenuItem>
                  <Link
                    onClick={handleToggle}
                    style={{ color: "#fff" }}
                    to="#contact"
                  >
                    Contact
                  </Link>
                </MenuItem>
              </div>
              <div>
                <MenuItem>
                  <Link
                    onClick={handleToggle}
                    style={{ color: "#fff" }}
                    to="/resume"
                  >
                    Resume
                  </Link>
                </MenuItem>
              </div>
            </div>
          </MenuList>
        </div>
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
let MobileOnly = styled.div`
  @media (min-width: 500px) and (orientation: portrait) {
    display: none;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    display: none;
  }
  @media (max-width: 500px) and (orientation: portrait) {
    .mobile-menu-styles-p {
      background-image: linear-gradient(
        90deg,
        #151b7a 5%,
        #323286 36%,
        #415498 100%
      );
      padding: 0.5rem;
      display: flex;
      justify-content: space-evenly;
      font-size: 1.25rem;
      position: relative;
      z-index: 10;
      width: 100%;
      height: 16rem;
      overflow-x: hidden;
    }
  }
  @media (max-width: 900px) and (orientation: landscape) {
    .mobile-menu-styles-l {
      background-image: linear-gradient(
        90deg,
        #151b7a 5%,
        #323286 36%,
        #415498 100%
      );
      padding: 0.5rem;
      display: flex;
      justify-content: space-evenly;
      font-size: 1.25rem;
      position: relative;
      z-index: 10;
      width: 100%;
      height: 16rem;
      overflow-x: hidden;
    }
  }
`
