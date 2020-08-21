import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import { useTheme, useMediaQuery } from "@material-ui/core"

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
  },
  mobileMenuIcon: {
    display: "inline-block",
    cursor: "pointer",
  },
  barTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#000",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(45deg) translate(-15.5px, 25px)",
  },
  //   barMiddle: {
  //     width: "35px",
  //     height: "5px",
  //     backgroundColor: "#000",
  //     margin: "6px 0",
  //     transition: "0.4s",
  //   },
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
  //   changeBarMiddle: {
  //     width: "35px",
  //     height: "5px",
  //     backgroundColor: "#000",
  //     margin: "6px 0",
  //     transition: "0.4s",
  //     opacity: "0",
  //   },
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
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  //return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const mobileMenuP = useMediaQuery(
    `${theme.breakpoints.between("0", "500")} and (orientation: portrait)`
  )

  const mobileMenuL = useMediaQuery(
    `${theme.breakpoints.between("0", "900")} and (orientation: landscape)`
  )

  const root = classes.root
  const mobileMenuStylesCSSp = classes.mobileMenuStylesP
  const mobileMenuStylesCSSl = classes.mobileMenuStylesL
  const noMobileMenuStylesCSS = classes.noMobileMenuStyles
  const noBigScreenMenuStylesCSS = classes.noBigScreenMenuStyles

  const barTopCSS = classes.barTop
  const barMiddleCSS = classes.barMiddle
  const barBottomCSS = classes.barBottom
  const changeBarTopCSS = classes.changeBarTop
  const changeBarMiddleCSS = classes.changeBarMiddle
  const changeBarBottomCSS = classes.changeBarBottom

  return (
    <React.Fragment>
      <div
        className={
          mobileMenuP
            ? noBigScreenMenuStylesCSS
            : mobileMenuL
            ? noBigScreenMenuStylesCSS
            : root
        }
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "1.25rem",
          }}
        >
          <li>
            <Link style={{ color: "white" }} to="#welcome">
              About Me
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="#projects">
              My Projects
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/resume">
              Resume
            </Link>
          </li>
          {/* <li>
            <Link to="/survey">Survey</Link>
          </li> */}
        </ul>
      </div>
      <div
        className={
          mobileMenuP
            ? mobileMenuStylesCSSp
            : mobileMenuL
            ? mobileMenuStylesCSSl
            : noMobileMenuStylesCSS
        }
      >
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
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
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <div style={{ display: "block", margin: "1rem" }}>
                      <div>
                        <MenuItem onClick={handleClose}>
                          <Link to="/">Home</Link>
                        </MenuItem>
                      </div>
                      <div>
                        <MenuItem onClick={handleClose}>
                          <Link to="/about">About</Link>
                        </MenuItem>
                      </div>
                      <div>
                        <MenuItem onClick={handleClose}>
                          <Link to="/contact">Contact</Link>
                        </MenuItem>
                      </div>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </React.Fragment>
  )
}
export default Menu
