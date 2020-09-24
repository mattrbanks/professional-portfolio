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
  contactSecText: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: "3em",
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
    margin: "2rem",
  },
  iconOne: {
    display: "flex",
    color: "#000",
    margin: "2rem",
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(0px)",
    filter: "drop-shadow(2px 2px 0 rgb(255,0,0))",
  },
  iconTwo: {
    display: "flex",
    color: "#000",
    margin: "2rem",
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(0px)",
    filter: "drop-shadow(2px 2px 0 rgb(255,165,0))",
  },
  iconFour: {
    display: "flex",
    color: "#000",
    margin: "2rem",
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(0px)",
    filter: "drop-shadow(2px 2px 0 rgb(255,255,0))",
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

  //styles
  const iconContactStyle = classes.iconContact
  const iconOneStyle = classes.iconOne
  const iconTwoStyle = classes.iconTwo
  const iconFourStyle = classes.iconFour

  const mobileTechnologiesList = useMediaQuery(
    `${theme.breakpoints.between("0", "690")}`
  )

  return (
    <Layout>
      <SEO title="Portfolio" />
      <nav
        style={{
          backgroundImage:
            "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
        }}
      >
        <div
          style={{
            background: "rgb(21, 27, 122)",
            background: "linear-gradient(177.5deg, transparent 49%, white 51%)",
            height: "5rem",
          }}
        ></div>
      </nav>
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
              filename="PortfolioPicture.jpg"
            />
          </div>
        </div>
        <div>
          <h1>&lang;Greetings&rang;</h1>
        </div>
        <div style={{ fontSize: "1.5rem" }}>
          <p>
            I am a software engineer who is dedicated to creating modern
            user-friendly interfaces.
            <br /> I like figuring out how things work and finding solutions to
            problems. <br /> I really enjoy learning and I am always looking
            <br />
            to improve my skills.
          </p>
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
                  }}
                >
                  Javascript
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
                  }}
                >
                  Mongodb
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
                margin: "0 1.5rem 1rem 1.5rem",
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
                  }}
                >
                  GraphQL
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
            <div className={"wide-screen-margin"}>
              <Card className={"project-card-styles"}>
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
                    <ImageReusable
                      style={{ position: "relative" }}
                      alt="picture of school site project"
                      filename="EagleElementarySchool.PNG"
                    />
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
                      Real Time Chat App, Blog connected to CMS, Survey
                      connected to database, Based on real school curriculum
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>This is
                      a template elementary school site I created which targets
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
                              Javascript
                            </div>
                            <div style={{ marginRight: "0.5rem" }}>Mongodb</div>
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
                          <div style={{ display: "flex", fontSize: "0.75rem" }}>
                            <div style={{ marginRight: "1rem" }}>React</div>
                            <div style={{ marginRight: "1rem" }}>
                              Javascript
                            </div>
                            <div style={{ marginRight: "1rem" }}>Mongodb</div>
                            <div style={{ marginRight: "1rem" }}>
                              Contentful
                            </div>
                            <div>Material ui</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.75rem" }}>
                            <div style={{ marginRight: "1rem" }}>
                              Styled components
                            </div>
                            <div style={{ marginRight: "1rem" }}>Socket.io</div>
                            <div style={{ marginRight: "1rem" }}>GraphQL</div>
                            <div style={{ marginRight: "1rem" }}>Express</div>
                            <div style={{ marginRight: "1rem" }}>Node</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.75rem" }}>
                            <div style={{ marginRight: "1rem" }}>Gatsby</div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
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
              </Card>
            </div>
            <div className={"mobile-screen-margin"}>
              <Card className={"project-card-styles"}>
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
                    <Image
                      style={{ position: "relative" }}
                      alt="picture of game store site project"
                    />
                  </CardMedia>
                  <CardContent className={"project-two-card-content"}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Matt's Retro Games
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>Features: </span>{" "}
                      PayPal, Search bar, Game product pages, Detail page for
                      each product, Cart checkout with tax (USA)
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      component="p"
                    >
                      <span style={{ fontWeight: "bold" }}>About: </span>I had a
                      lot of fun with this project because these are many of my
                      favorite retro games. This is like a tribute to games that
                      I am nostalgic for but in the form of a retro game store.
                      I used a real price guide to price each game so they
                      should be very accurately priced in my store. This store
                      template has all the hallmarks of an e-commerce website
                      and it utilizes a sandbox PayPal that can be activated in
                      the future to handle real transactions. I won't be parting
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
                              Javascript
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
                              React router
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div style={{ display: "flex", fontSize: "0.75rem" }}>
                            <div style={{ marginRight: "1rem" }}>React</div>
                            <div style={{ marginRight: "1rem" }}>
                              Javascript
                            </div>
                            <div style={{ marginRight: "1rem" }}>Bootstrap</div>
                            <div style={{ marginRight: "1rem" }}>
                              Styled components
                            </div>
                            <div>PayPal</div>
                          </div>
                          <div style={{ display: "flex", fontSize: "0.75rem" }}>
                            <div style={{ marginRight: "1rem" }}>
                              React router
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CardContent>
                </CardActionArea>
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
              </Card>
            </div>
          </div>
        </section>
      </MainStyles>
      <section
        id="contact"
        className={classes.contactSectionStyles}
        style={{ position: "relative" }}
      >
        <div className={classes.contactSecText}>
          <h2>I look forward to working with you!</h2>
          <p id="finalWords">&lang;Let's create solutions together&rang;</p>
        </div>
        <div className={classes.iconsStyle}>
          <div>
            <a
              href="https://github.com/mattrbanks"
              target="_blank"
              rel="noopener noreferrer"
              className={iconOneHover ? iconOneStyle : iconContactStyle}
            >
              <FaGithubSquare
                style={{ fontSize: "70px" }}
                onMouseEnter={() => setIconOneHover(true)}
                onMouseLeave={() => setIconOneHover(false)}
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/matthewr-banks"
              target="_blank"
              rel="noopener noreferrer"
              className={iconTwoHover ? iconTwoStyle : iconContactStyle}
            >
              <FaLinkedin
                style={{ fontSize: "70px" }}
                onMouseEnter={() => setIconTwoHover(true)}
                onMouseLeave={() => setIconTwoHover(false)}
              />
            </a>
          </div>
          <div>
            <Link
              to="/resume"
              className={iconFourHover ? iconFourStyle : iconContactStyle}
            >
              <FaFile
                style={{ fontSize: "65px" }}
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
    justify-content: space-around;
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
    }
  }
  .wide-screen-margin {
    margin-right: 3rem;
    @media (max-width: 1200px) and (orientation: portrait) {
      margin: 1rem;
    }
    @media (max-width: 1230px) and (orientation: landscape) {
      margin: 1rem;
    }
  }
  .mobile-screen-margin {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .project-section-styles {
    //height: 150vh;
    border-top: 0.0625rem solid grey;
  }
  .project-card-styles {
    max-width: 27.5rem;
    height: 53rem;
    @media (max-width: 690px) and (orientation: portrait) {
      max-width: 20rem;
      height: 50.5rem;
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
  .project-two-card-content {
    margin-bottom: 2.5rem;
    @media (max-width: 480px) and (orientation: portrait) {
      margin-bottom: 1.5rem;
    }
    @media (max-width: 673px) and (orientation: landscape) {
      margin-bottom: 3.5rem;
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
`
