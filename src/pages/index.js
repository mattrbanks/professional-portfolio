import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { useTheme, useMediaQuery } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ImageReusable from "../components/imageReusable"
import styled from "styled-components"
import { FaLinkedin, FaGithubSquare, FaFile } from "react-icons/fa"
import Typed from "react-typed"

const useStyles = makeStyles({
  welcomeSectionStyles: {
    display: "block",
    textAlign: "center",
    margin: "1rem",
  },

  contactSectionStyles: {
    marginTop: "5rem",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  contactSectionTallStyles: {
    marginTop: "5rem",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  contactSecText: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: "1em",
    height: "6rem",
    margin: "0 1rem 0 1rem",
  },
  iconsStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  iconContact: {
    display: "flex",
    color: "#000",
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(-5px)",
    margin: "1rem",
  },
  iconOne: {
    display: "flex",
    color: "#000",
    margin: "1rem",
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(0px)",
  },
  iconTwo: {
    display: "flex",
    color: "#000",
    margin: "1rem",
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(0px)",
  },
  iconFour: {
    display: "flex",
    color: "#000",
    margin: "1rem",
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(0px)",
  },
})

const Home = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [iconOneHover, setIconOneHover] = React.useState(false)
  const [iconTwoHover, setIconTwoHover] = React.useState(false)
  const [iconFourHover, setIconFourHover] = React.useState(false)
  const [projectOneHover, setProjectOneHover] = React.useState(false)
  const [projectTwoHover, setProjectTwoHover] = React.useState(false)
  const [projectThreeHover, setProjectThreeHover] = React.useState(false)
  const [projectFourHover, setProjectFourHover] = React.useState(false)
  const [projectFiveHover, setProjectFiveHover] = React.useState(false)
  const [projectSixHover, setProjectSixHover] = React.useState(false)

  //styles
  const iconContactStyle = classes.iconContact
  const iconOneStyle = classes.iconOne
  const iconTwoStyle = classes.iconTwo
  const iconFourStyle = classes.iconFour
  const contactSectionStyle = classes.contactSectionStyles
  const contactSecTallStyle = classes.contactSectionTallStyles

  const mobileTechnologiesList = useMediaQuery(
    `${theme.breakpoints.between("0", "690")}`
  )

  const contactSecQuery = useMediaQuery("(min-height:650px)")

  return (
    <Layout>
      <SEO title="Portfolio" />
      <nav
        style={{
          backgroundImage:
            "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
        }}
      ></nav>
      <section id="welcome" className={classes.welcomeSectionStyles}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "15rem",
              height: "15rem",
              margin: "2rem 0 2rem 0",
              background: "rgba(0, 0, 0, 0.07)",
              borderRadius: "50% 50% 50% 50%",
              overflow: "hidden",
            }}
          >
            <ImageReusable
              alt="picture of school site project"
              filename="profile-picture-new-auto-linkedin-cropped.png"
            />
          </div>
        </div>
        <div>
          <h1>&lang;Greetings&rang;</h1>
        </div>
        <div style={{ fontSize: "1.5rem" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <p>
              I am a web developer who is dedicated to creating modern
              user-friendly interfaces <br /> to solve problems efficiently. I
              have a continuous improvement mindset and I am <br /> actively
              seeking a work environment where I can grow as a developer.
            </p>
          </div>
          <a
            href="https://github.com/mattrbanks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: "rgb(255, 192, 76, 0.9)",
                color: "#000",
                border: "2px solid #000",
                borderRadius: "50px",
                fontSize: "1.05rem",
                fontWeight: "bold",
                padding: "0.3rem",
                marginBottom: "1.45rem",
                cursor: "pointer",
              }}
              size="large"
              color="inherit"
            >
              GitHub
            </button>
          </a>
          <div>
            <h2>Technologies I have worked with so far:</h2>
          </div>
          <React.Fragment>
            <div
              style={{
                display: "block",
                fontSize: "1rem",
                margin: "0 1.5rem 0.5rem 1.5rem",
              }}
            >
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  margin: "0 0.5rem 0 0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  React
                </button>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  JavaScript
                </button>
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  MongoDB
                </button>
              </a>
              <a
                href="https://www.contentful.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Contentful
                </button>
              </a>
              <a
                href="https://material-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Material-ui
                </button>
              </a>
              <a
                href="https://styled-components.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Styled-components
                </button>
              </a>
              <a
                href="https://socket.io/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Socket.io
                </button>
              </a>
            </div>
            <div
              style={{
                display: "block",
                fontSize: "1rem",
                margin: "0 1.5rem 0.5rem 1.5rem",
              }}
            >
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Express
                </button>
              </a>
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Node
                </button>
              </a>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Gatsby
                </button>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  HTML
                </button>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  CSS
                </button>
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Bootstrap
                </button>
              </a>
              <a
                href="https://developer.paypal.com/home/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  PayPal
                </button>
              </a>
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  React router
                </button>
              </a>
              <a
                href="https://graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  GraphQL
                </button>
              </a>
            </div>
            <div
              style={{
                display: "block",
                fontSize: "1rem",
                margin: "0 1.5rem 1rem 1.5rem",
              }}
            >
              <a
                href="https://peerjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  PeerJS
                </button>
              </a>
              <a
                href="https://webrtc.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  WebRTC
                </button>
              </a>
              <a
                href="https://ejs.co/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  EJS
                </button>
              </a>
              <a
                href="https://figma.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Figma
                </button>
              </a>
              <a
                href="https://www.php.net/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  PHP
                </button>
              </a>
              <a
                href="https://www.mysql.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  MySQL
                </button>
              </a>
              <a
                href="https://www.npmjs.com/package/web-push"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Web Push
                </button>
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  Tailwind CSS
                </button>
              </a>
              <a
                href="https://d3js.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                    cursor: "pointer",
                    color: "#fff",
                    marginBottom: "0.5rem",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                >
                  D3
                </button>
              </a>
            </div>
          </React.Fragment>
        </div>
      </section>
      <MainStyles>
        <section id="projects" className={"project-section-styles"}>
          <div
            style={{
              textAlign: "center",
              paddingTop: "4rem",
              paddingBottom: "2rem",
              color: "#fff",
              backgroundImage:
                "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
            }}
          >
            <div style={{ margin: "1rem" }}>
              <h2>Here is what I've been up to.</h2>
              <h4>
                (Click below each project description to see the github code or
                try the site out.)
              </h4>
            </div>
          </div>
          <div className={"wide-screen-projects"}>
            <div className={"wide-screen-margin-left"}>
              <Card
                className={"project-card-styles"}
                style={{ position: "relative" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={
                      projectFourHover
                        ? "project-media-transform-styles"
                        : "project-media-styles"
                    }
                    style={{
                      maxWidth: "100%",
                      margin: "0 0 0 0",
                    }}
                    title="Face Conference"
                    onMouseEnter={() => {
                      setProjectFourHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectFourHover(false)
                    }}
                  >
                    <a
                      href="https://face-conference.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff" }}
                    >
                      <ImageReusable
                        style={{ position: "relative" }}
                        alt="picture of video chat project"
                        filename="faceConferenceImg.png"
                      />
                    </a>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Face Conference
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>Features: </span>{" "}
                      Intuitive dashboard with options to create a new room or
                      join a demo lobby &#8226; Disable the video, audio, or
                      hang up the call and go back to the dashboard
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>This is
                      my latest project. It is a video chat website that
                      utilizes WebRTC technology. The world is changing fast and
                      video meetings are becoming more common. Face Conference
                      is a place where you and your friends can talk, face to
                      face, and catch up online. I wanted to experiment with
                      WebRTC and this is a little project for me to familiarize
                      myself with the technology.
                    </Typography>
                    <div
                      style={{
                        display: "block",
                        listStyle: "none",
                        margin: "0.5rem 1.5rem 0 1.5rem",
                      }}
                    >
                      {mobileTechnologiesList ? (
                        <React.Fragment>
                          <div
                            style={{
                              display: "block",
                              listStyle: "none",
                              margin: "0.5rem 1.5rem 0 1.5rem",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "0.6rem",
                                margin: "0 1.5rem 0 1.5rem",
                              }}
                            >
                              <div
                                style={{
                                  marginLeft: "1rem",
                                  marginRight: "0.5rem",
                                }}
                              >
                                JavaScript
                              </div>
                              <div style={{ marginRight: "0.5rem" }}>
                                PeerJS
                              </div>
                              <div style={{ marginRight: "0.5rem" }}>Ejs</div>
                              <div style={{ marginRight: "0.5rem" }}>Node</div>
                              <div style={{ marginRight: "1rem" }}>MongoDB</div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "0.6rem",
                                margin: "0 1rem 0 1rem",
                              }}
                            >
                              <div
                                style={{
                                  marginLeft: "0.5rem",
                                  marginRight: "0.5rem",
                                }}
                              >
                                WebRTC
                              </div>
                              <div style={{ marginRight: "0.5rem" }}>
                                Express
                              </div>
                              <div style={{ marginRight: "0.5rem" }}>
                                Socket.io
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "1rem" }}>PeerJS</div>
                            <div style={{ marginRight: "1rem" }}>Ejs</div>
                            <div style={{ marginRight: "1rem" }}>WebRTC</div>
                            <div style={{ marginRight: "1rem" }}>Express</div>
                            <div style={{ marginRight: "1rem" }}>Node</div>
                            <div>Socket.io</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>MongoDB</div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
                <div className={"card-bottom-btns"}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardActions>
                      <a
                        href="https://github.com/mattrbanks/face-conference"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          See My Code
                        </Button>
                      </a>
                      <a
                        href="https://face-conference.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          Try The Site
                        </Button>
                      </a>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
            <div className={"wide-screen-margin-right"}>
              <Card
                className={"project-card-styles"}
                style={{ position: "relative" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={
                      projectFiveHover
                        ? "project-media-transform-styles"
                        : "project-media-styles"
                    }
                    style={{
                      maxWidth: "100%",
                      margin: "0 0 0 0",
                    }}
                    title="Quick Chat"
                    onMouseEnter={() => {
                      setProjectFiveHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectFiveHover(false)
                    }}
                  >
                    <a
                      href="https://quick-chat.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff" }}
                    >
                      <ImageReusable
                        style={{ position: "relative" }}
                        alt="picture of quick chat project"
                        filename="QuickChat.png"
                      />
                    </a>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Quick Chat
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>Features: </span>{" "}
                      Group chat &#8226; Private chat &#8226; Push notifications
                      &#8226; Help section &#8226; Wide selection of emojis
                      &#8226; Unique user id &#8226; Logged in user list
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>This is
                      a real-time chat web application that has group topic
                      rooms and private messaging with push notifications. There
                      is a help button, with full instructions, to get new users
                      up and running. There is a very fun emoji picker with just
                      about every emoji out there. Private messages are equipped
                      with a service worker to handle push notifications.
                      Notifications must be allowed and they fire when the
                      receiver is not in the private conversation.
                    </Typography>
                    <div
                      style={{
                        display: "block",

                        listStyle: "none",
                        margin: "0.5rem 1.5rem 0 1.5rem",
                      }}
                    >
                      {mobileTechnologiesList ? (
                        <React.Fragment>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1.5rem 0 1.5rem",
                            }}
                          >
                            <div
                              style={{
                                marginLeft: "1rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              React
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>Gatsby</div>
                            <div style={{ marginRight: "1rem" }}>Socket.io</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1rem 1rem 1rem",
                            }}
                          >
                            <div style={{ marginRight: "0.5rem" }}>
                              Material ui
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>Node</div>
                            <div style={{ marginRight: "0.5rem" }}>Express</div>
                            <div style={{ marginRight: "0.5rem" }}>
                              Web Push
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>React</div>
                            <div style={{ marginRight: "1rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "1rem" }}>Gatsby</div>
                            <div style={{ marginRight: "1rem" }}>Socket.io</div>
                            <div>Material ui</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>Node</div>
                            <div style={{ marginRight: "1rem" }}>Express</div>
                            <div style={{ marginRight: "1rem" }}>Web Push</div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
                <div className={"card-bottom-btns"}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardActions>
                      <a
                        href="https://github.com/mattrbanks/Quick-Chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          See my code
                        </Button>
                      </a>
                      <a
                        href="https://quick-chat.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          Try the site
                        </Button>
                      </a>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className={"wide-screen-projects-lower"}>
            <div className={"wide-screen-margin-left"}>
              <Card
                className={"project-card-styles"}
                style={{ position: "relative" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={
                      projectOneHover
                        ? "project-media-transform-styles"
                        : "project-media-styles"
                    }
                    style={{ maxWidth: "100%", margin: "0 0 0 0" }}
                    title="Eagle Elementary School"
                    onMouseEnter={() => {
                      setProjectOneHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectOneHover(false)
                    }}
                  >
                    <a
                      href="https://eagle-elementary-school.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff" }}
                    >
                      <ImageReusable
                        style={{ position: "relative" }}
                        alt="picture of school site project"
                        filename="EagleElementarySchool.PNG"
                      />
                    </a>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Eagle Elementary School
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>Features: </span>{" "}
                      Parent/Teacher Chat &#8226; Blog connected to CMS &#8226;
                      Survey connected to database &#8226; Based on real school
                      curriculum
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>This is
                      a modern elementary school site I created which targets
                      progressive school environments becoming more socially
                      distanced. It has a real-time chat for parents and
                      teachers with private messaging and push notifications.
                      The events page is connected to a content management
                      system for school faculty to easily use without the help
                      of a programmer. The survey is connected to a mongodb
                      atlas database that collects responses from parents. The
                      curriculum section is based on real curriculum standards.
                    </Typography>
                    <div
                      style={{
                        display: "block",

                        listStyle: "none",
                        margin: "0.5rem 1.5rem 0 1.5rem",
                      }}
                    >
                      {mobileTechnologiesList ? (
                        <React.Fragment>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1.5rem 0 1.5rem",
                            }}
                          >
                            <div
                              style={{
                                marginLeft: "0.5rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              React
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>MongoDB</div>
                            <div style={{ marginRight: "0.5rem" }}>
                              Contentful
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1rem 0 1rem",
                            }}
                          >
                            <div style={{ marginRight: "0.5rem" }}>
                              Material ui
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              Styled components
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              Socket.io
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1rem 0 1rem",
                            }}
                          >
                            <div style={{ marginRight: "0.5rem" }}>GraphQL</div>
                            <div style={{ marginRight: "0.5rem" }}>Express</div>
                            <div style={{ marginRight: "0.5rem" }}>Node</div>
                            <div style={{ marginRight: "0.5rem" }}>Gatsby</div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>React</div>
                            <div style={{ marginRight: "1rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "1rem" }}>MongoDB</div>
                            <div style={{ marginRight: "1rem" }}>
                              Contentful
                            </div>
                            <div>Material ui</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>
                              Styled components
                            </div>
                            <div style={{ marginRight: "1rem" }}>Socket.io</div>
                            <div style={{ marginRight: "1rem" }}>GraphQL</div>
                            <div style={{ marginRight: "1rem" }}>Express</div>
                            <div>Node</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>Gatsby</div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
                <div className={"card-bottom-btns"}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardActions>
                      <a
                        href="https://github.com/mattrbanks/school-site-chat-survey-portfolio-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          See my code
                        </Button>
                      </a>
                      <a
                        href="https://eagle-elementary-school.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          Try the site
                        </Button>
                      </a>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
            <div className={"wide-screen-margin-right"}>
              <Card
                className={"project-card-styles"}
                style={{ position: "relative" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={
                      projectTwoHover
                        ? "project-media-transform-styles"
                        : "project-media-styles"
                    }
                    style={{
                      maxWidth: "100%",
                      margin: "0 0 0 0",
                    }}
                    title="Matt's Retro Games"
                    onMouseEnter={() => {
                      setProjectTwoHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectTwoHover(false)
                    }}
                  >
                    <a
                      href="https://matts-retro-games.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff" }}
                    >
                      <Image
                        style={{ position: "relative" }}
                        alt="picture of game store site project"
                      />
                    </a>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Matt's Retro Games
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>Features: </span>{" "}
                      PayPal &#8226; Search bar &#8226; Game product pages
                      &#8226; Detail page for each product &#8226; Cart checkout
                      with tax (USA)
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>I had a
                      lot of fun with this project because these are many of my
                      favorite retro games. This is like a tribute to the games
                      I am nostalgic for but in the form of a retro game store.
                      I used a real price guide to price each game so they
                      should be very accurately priced in my store. This game
                      store has all the hallmarks of an e-commerce website and
                      it utilizes a sandbox PayPal that can be activated in the
                      future to handle real transactions. I won't be parting
                      with my collection though.
                    </Typography>
                    <div
                      style={{
                        display: "block",
                        listStyle: "none",
                        margin: "0.5rem 1.5rem 0 1.5rem",
                      }}
                    >
                      {mobileTechnologiesList ? (
                        <React.Fragment>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1.5rem 0 1.5rem",
                            }}
                          >
                            <div
                              style={{
                                marginLeft: "1rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              React
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              Bootstrap
                            </div>
                            <div style={{ marginRight: "1rem" }}>PayPal</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1rem 1rem 1rem",
                            }}
                          >
                            <div
                              style={{
                                marginLeft: "0.5rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              Styled components
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              React router
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>React</div>
                            <div style={{ marginRight: "1rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "1rem" }}>Bootstrap</div>
                            <div style={{ marginRight: "1rem" }}>
                              Styled components
                            </div>
                            <div>PayPal</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>
                              React router
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
                <div className={"card-bottom-btns"}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardActions>
                      <a
                        href="https://github.com/mattrbanks/retro-game-store-portfolio-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          See my code
                        </Button>
                      </a>
                      <a
                        href="https://matts-retro-games.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          Try the site
                        </Button>
                      </a>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className={"wide-screen-projects-lower"}>
            <div className={"wide-screen-margin-left"}>
              <Card
                className={"project-card-styles"}
                style={{ position: "relative" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={
                      projectThreeHover
                        ? "project-media-transform-styles"
                        : "project-media-styles"
                    }
                    style={{
                      maxWidth: "100%",
                      margin: "0 0 0 0",
                    }}
                    title="Professional Portfolio"
                    onMouseEnter={() => {
                      setProjectThreeHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectThreeHover(false)
                    }}
                  >
                    <a
                      href="https://mattbanksdev.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff" }}
                    >
                      <ImageReusable
                        style={{ position: "relative" }}
                        alt="picture of professional portfolio"
                        filename="ProfessionalPortfolioSiteCroppedNew.PNG"
                      />
                    </a>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Professional Portfolio
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>Features: </span>{" "}
                      Welcome section with a current skills/technologies list
                      &#8226; A projects section to view code and try the sites
                      &#8226; Resume page with pdf download &#8226; Contact
                      section with github and other useful info
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>This is
                      my personal portfolio website. This is where all my latest
                      projects live and it serves as a central hub for people to
                      get in touch with me for web development work. It has a
                      nav menu that will jump to different sections of the
                      portfolio and there is also an html resume page which has
                      a convenient pdf resume download link. This resume has
                      many links that are useful for recruiters to quickly see
                      my work and contact me.
                    </Typography>
                    <div
                      style={{
                        display: "block",
                        listStyle: "none",
                        margin: "0.5rem 1.5rem 0 1.5rem",
                      }}
                    >
                      {mobileTechnologiesList ? (
                        <React.Fragment>
                          <div
                            style={{
                              display: "block",
                              listStyle: "none",
                              margin: "0.5rem 1.5rem 0 1.5rem",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "0.6rem",
                                margin: "0 1.5rem 0 1.5rem",
                              }}
                            >
                              <div
                                style={{
                                  marginLeft: "1rem",
                                  marginRight: "0.5rem",
                                }}
                              >
                                React
                              </div>
                              <div style={{ marginRight: "0.5rem" }}>
                                JavaScript
                              </div>
                              <div style={{ marginRight: "1rem" }}>Gatsby</div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1rem 0 1rem",
                            }}
                          >
                            <div
                              style={{
                                marginLeft: "0.5rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              Styled components
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              Material ui
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>React</div>
                            <div style={{ marginRight: "1rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "1rem" }}>Gatsby</div>
                            <div style={{ marginRight: "1rem" }}>
                              Styled components
                            </div>
                            <div>Material ui</div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
                <div className={"card-bottom-btns"}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardActions>
                      <a
                        href="https://github.com/mattrbanks/professional-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          See my code
                        </Button>
                      </a>
                      <div>
                        <Button
                          disabled
                          style={{
                            border: "1px solid #000",
                            borderRadius: "50px",
                            color: "#000",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          On Site Now
                        </Button>
                      </div>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
            <div className={"wide-screen-margin-right"}>
              <Card
                className={"project-card-styles"}
                style={{ position: "relative" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={
                      projectSixHover
                        ? "project-media-transform-styles"
                        : "project-media-styles"
                    }
                    style={{
                      maxWidth: "100%",
                      margin: "0 0 0 0",
                    }}
                    title="Kasey Banks Portfolio"
                    onMouseEnter={() => {
                      setProjectSixHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectSixHover(false)
                    }}
                  >
                    <a
                      href="https://kaseybanksportfolio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#fff" }}
                    >
                      <ImageReusable
                        style={{ position: "relative" }}
                        alt="picture of kasey banks portfolio site"
                        filename="kaseybanksportfoliosite.png"
                      />
                    </a>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Kasey Banks Portfolio
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>Features: </span>{" "}
                      Real Educational Data &#8226; Custom Design &#8226; Video
                      Gallery &#8226; Contact Form &#8226; Resume Page
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>This is
                      a professional portfolio that highlights the work of an
                      educator over the span of her career. She is transitioning
                      from an instructional coach to an administrator. D3 was
                      used to visually represent the data provided. There is a
                      contact form that utilizes reCAPTCHA and is connected to
                      email via Netlify Forms. There is a video gallery that
                      spans the course of her career, including coaching
                      teachers; teaching students remotely; facilitating data
                      team meetings with teachers, and setting routines with
                      elementary students.
                    </Typography>
                    <div
                      style={{
                        display: "block",
                        listStyle: "none",
                        margin: "0.5rem 1.5rem 0 1.5rem",
                      }}
                    >
                      {mobileTechnologiesList ? (
                        <React.Fragment>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1.5rem 0 1.5rem",
                            }}
                          >
                            <div
                              style={{
                                marginLeft: "1rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              React
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>Gatsby</div>
                            <div style={{ marginRight: "1rem" }}>reCAPTCHA</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "0.6rem",
                              margin: "0 1rem 1rem 1rem",
                            }}
                          >
                            <div
                              style={{
                                marginLeft: "0.5rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              Tailwind CSS
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>
                              Netlify Forms
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>Figma</div>
                            <div style={{ marginRight: "0.5rem" }}>D3</div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>React</div>
                            <div style={{ marginRight: "1rem" }}>
                              JavaScript
                            </div>
                            <div style={{ marginRight: "1rem" }}>
                              Tailwind CSS
                            </div>
                            <div style={{ marginRight: "1rem" }}>
                              Netlify Forms
                            </div>
                            <div>reCAPTCHA</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.7rem" }}>
                            <div style={{ marginRight: "1rem" }}>Figma</div>
                            <div style={{ marginRight: "1rem" }}>Gatsby</div>
                            <div style={{ marginRight: "1rem" }}>D3</div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
                <div className={"card-bottom-btns"}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <CardActions>
                      <a
                        href="https://github.com/mattrbanks/kasey-banks-professional-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          See my code
                        </Button>
                      </a>
                      <a
                        href="https://kaseybanksportfolio.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff" }}
                      >
                        <Button
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
                            border: "1px solid #000",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                          }}
                          size="large"
                          color="inherit"
                        >
                          Try the site
                        </Button>
                      </a>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </MainStyles>
      <section
        id="contact"
        className={contactSecQuery ? contactSecTallStyle : contactSectionStyle}
        style={{ position: "relative" }}
      >
        <div className={classes.contactSecText}>
          <h2>
            <Typed
              strings={[
                "I look forward to working with you!",
                "Let's create solutions together.",
                "Peruse my GitHub by clicking below.",
                "Connect with me on LinkedIn below.",
                "Click below to see my resume.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
        <div className={classes.iconsStyle}>
          <div style={{ borderLeft: "2px solid red", borderRadius: "50px" }}>
            <a
              href="https://github.com/mattrbanks"
              target="_blank"
              rel="noopener noreferrer"
              className={iconOneHover ? iconOneStyle : iconContactStyle}
            >
              <FaGithubSquare
                style={{
                  fontSize: "70px",
                  filter: "drop-shadow(2px 2px 0 rgb(255,0,0))",
                }}
                onMouseEnter={() => setIconOneHover(true)}
                onMouseLeave={() => setIconOneHover(false)}
              />
            </a>
          </div>
          <div
            style={{
              borderTop: "2px solid orange",
              borderBottom: "2px solid orange",
            }}
          >
            <a
              href="https://www.linkedin.com/in/matthewr-banks"
              target="_blank"
              rel="noopener noreferrer"
              className={iconTwoHover ? iconTwoStyle : iconContactStyle}
            >
              <FaLinkedin
                style={{
                  fontSize: "70px",
                  filter: "drop-shadow(2px 2px 0 rgb(255,165,0))",
                }}
                onMouseEnter={() => setIconTwoHover(true)}
                onMouseLeave={() => setIconTwoHover(false)}
              />
            </a>
          </div>
          <div
            style={{ borderRight: "2px solid yellow", borderRadius: "50px" }}
          >
            <Link
              to="/resume"
              className={iconFourHover ? iconFourStyle : iconContactStyle}
            >
              <FaFile
                style={{
                  fontSize: "65px",
                  filter: "drop-shadow(2px 2px 0 rgb(255,255,0))",
                }}
                onMouseEnter={() => setIconFourHover(true)}
                onMouseLeave={() => setIconFourHover(false)}
              />
            </Link>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(-45deg, transparent 49%, #415498 5%, #323286 36%, #151b7a 100%)",
            width: `100%`,
            maxWidth: `85%`,
            height: "15%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        ></div>
        <div
          style={{
            background:
              "linear-gradient(135deg, transparent 49%, #151b7a 5%, #323286 36%, #415498 100%)",
            width: `100%`,
            maxWidth: `85%`,
            height: "15%",
            position: "absolute",
            bottom: "0",
            right: "0",
          }}
        ></div>
      </section>
    </Layout>
  )
}

export default Home

let MainStyles = styled.div`
  .wide-screen-projects {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 4rem 0 4rem;
    @media (max-width: 1200px) and (orientation: portrait) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5rem 1rem 0 1rem;
    }
    @media (max-width: 1230px) and (orientation: landscape) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5rem 1rem 0 1rem;
    }
  }
  .wide-screen-projects-lower {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 4rem 0 4rem;
    @media (max-width: 1200px) and (orientation: portrait) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 1rem 0 1rem;
    }
    @media (max-width: 1230px) and (orientation: landscape) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 1rem 0 1rem;
    }
  }
  .wide-screen-margin-left {
    margin-right: 2rem;
    padding-left: 2rem;
    @media (max-width: 1200px) and (orientation: portrait) {
      margin: 1rem;
      padding-left: 0;
    }
    @media (max-width: 1230px) and (orientation: landscape) {
      margin: 1rem;
      padding-left: 0;
    }
  }
  .wide-screen-margin-right {
    padding-left: 2rem;
    @media (max-width: 1200px) and (orientation: portrait) {
      margin: 1rem;
      padding-left: 0;
    }
    @media (max-width: 1230px) and (orientation: landscape) {
      margin: 1rem;
      padding-left: 0;
    }
  }
  .project-section-styles {
    border-top: 0.0625rem solid grey;
  }
  .project-card-styles {
    max-width: 27.5rem;
    height: 55rem;
    @media (max-width: 690px) and (orientation: portrait) {
      max-width: 20rem;
      height: 51rem;
    }
    @media (max-width: 660px) and (orientation: landscape) {
      max-width: 20rem;
      height: 51.5rem;
    }
  }
  .project-media-styles {
    height: 27.5rem;
    transition: transform 1s;
    transform: perspective(100px) translateZ(0px);
    @media (max-width: 690px) and (orientation: portrait) {
      height: 20rem;
      transition: transform 1s;
      transform: perspective(100px) translateZ(0px);
    }
    @media (max-width: 660px) and (orientation: landscape) {
      height: 20rem;
      transition: transform 1s;
      transform: perspective(100px) translateZ(0px);
    }
  }
  .project-media-transform-styles {
    height: 27.5rem;
    transition: transform 1s;
    transform: perspective(100px) translateZ(0.5px);
    @media (max-width: 690px) and (orientation: portrait) {
      height: 20rem;
      transition: transform 1s;
      transform: perspective(100px) translateZ(0.5px);
    }
    @media (max-width: 660px) and (orientation: landscape) {
      height: 20rem;
      transition: transform 1s;
      transform: perspective(100px) translateZ(0.5px);
    }
  }
  .card-bottom-btns {
    position: absolute;
    bottom: 2%;
    width: 100%;
  }
`
