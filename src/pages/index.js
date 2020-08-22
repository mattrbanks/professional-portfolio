import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ImageReusable from "../components/imageReusable"
//import MattsRetroGames from "../images/MattsRetroGames.png"
import EagleElementarySchool from "../images/EagleElementarySchool.png"
//import { Link } from "gatsby"
import {
  FaLinkedin,
  FaGithubSquare,
  FaFile,
  FaEnvelopeOpenText,
} from "react-icons/fa"

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    height: 460,
  },
  media: {
    height: 400,
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(0px)",
    //transform: "translate(0px, -18px)",
  },
  mediaTransform: {
    height: 400,
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(5px)",
    //transform: "translate(0px, -18px)",
  },
  welcomeSectionStyles: {
    height: "65vh",
    display: "block",
    textAlign: "center",
    margin: "1rem",
  },
  projectSectionStyles: {
    height: "100vh",
    borderTop: "0.0625rem solid grey",
  },
  contactSectionStyles: {
    borderTop: "0.0625rem solid grey",
    //width: "100%",
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
    /*transition connected to .js-icon-float-shadow*/
    display: "flex",
    color: "#000",
    /*icon color*/
    transition: "transform 1s",
    transform: "perspective(100px) translateZ(-5px)",
    margin: "2rem",
    //padding: "2rem",
  },
  iconOne: {
    display: "flex",
    color: "#000",
    margin: "2rem",
    transition: "transform 1s",
    /*font awesome icons are made from text so they won't respond to box-shadow. They need text-shadow instead. A button is a box.*/
    transform: "perspective(100px) translateZ(0px)",
    filter: "drop-shadow(2px 2px 0 rgb(255,0,0))",
  },
  iconTwo: {
    display: "flex",
    color: "#000",
    margin: "2rem",
    transition: "transform 1s",
    /*font awesome icons are made from text so they won't respond to box-shadow. They need text-shadow instead. A button is a box.*/
    transform: "perspective(100px) translateZ(0px)",
    filter: "drop-shadow(2px 2px 0 rgb(255,165,0))",
  },
  iconThree: {
    display: "flex",
    color: "#000",
    margin: "2rem",
    transition: "transform 1s",
    /*font awesome icons are made from text so they won't respond to box-shadow. They need text-shadow instead. A button is a box.*/
    transform: "perspective(100px) translateZ(0px)",
    filter: "drop-shadow(2px 2px 0 rgb(255,255,0))",
  },
  iconFour: {
    display: "flex",
    color: "#000",
    margin: "2rem",
    transition: "transform 1s",
    /*font awesome icons are made from text so they won't respond to box-shadow. They need text-shadow instead. A button is a box.*/
    transform: "perspective(100px) translateZ(0px)",
    filter: "drop-shadow(2px 2px 0 rgb(0,128,0))",
  },
  projectClickText: {
    padding: "45%",
    position: "absolute",
    color: "transparent",
    zIndex: "10",
  },
  projectClickTextHover: {
    padding: "45%",
    position: "absolute",
    color: "#000",
    zIndex: "10",
  },
})

const Home = () => {
  const classes = useStyles()
  const [iconOneHover, setIconOneHover] = React.useState(false)
  const [iconTwoHover, setIconTwoHover] = React.useState(false)
  const [iconThreeHover, setIconThreeHover] = React.useState(false)
  const [iconFourHover, setIconFourHover] = React.useState(false)
  const [projectOneHover, setProjectOneHover] = React.useState(false)
  const [projectTwoHover, setProjectTwoHover] = React.useState(false)
  const [
    projectOneClickTextHover,
    setProjectOneClickTextHover,
  ] = React.useState(false)
  const [
    projectTwoClickTextHover,
    setProjectTwoClickTextHover,
  ] = React.useState(false)

  //styles
  const iconContactStyle = classes.iconContact
  const iconOneStyle = classes.iconOne
  const iconTwoStyle = classes.iconTwo
  const iconThreeStyle = classes.iconThree
  const iconFourStyle = classes.iconFour
  const mediaStyle = classes.media
  const mediaTransformStyle = classes.mediaTransform
  const projectClickTextStyle = classes.projectClickText
  const projectClickTextHoverStyle = classes.projectClickTextHover

  let ImageVar = <Image />
  return (
    <Layout>
      <SEO title="Home" />
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
        <div>
          <h1>&lang;Greetings&rang;</h1>
        </div>
        <div style={{ fontSize: "1.5rem" }}>
          <p>
            I am a software engineer who is dedicated to creating modern user{" "}
            <br />
            friendly interfaces. I like figuring out how things work. <br /> I
            really enjoy learning and I am always looking
            <br />
            to improve my skills.
          </p>
        </div>
      </section>
      <section id="projects" className={classes.projectSectionStyles}>
        <div
          style={{
            textAlign: "center",
            paddingTop: "4rem",
            paddingBottom: "2rem",
            color: "white",
            backgroundImage:
              "linear-gradient(90deg, #151b7a 5%, #323286 36%, #415498 100%)",
          }}
        >
          <h2>Here is what I've been up to.</h2>
          <p>(click one of my projects for more options.)</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "5rem 4rem 0 4rem",
          }}
        >
          <div style={{ marginRight: "3rem" }}>
            <Card className={classes.root}>
              <CardActionArea>
                <a href="https://eagle-elementary-school.netlify.app/">
                  <CardMedia
                    className={
                      projectOneHover ? mediaTransformStyle : mediaStyle
                    }
                    style={{ maxWidth: "100%", margin: "0 0 0 0" }}
                    //image={EagleElementarySchool}
                    title="Eagle Elementary School"
                    onMouseEnter={() => {
                      setProjectOneHover(true)
                      setProjectOneClickTextHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectOneHover(false)
                      setProjectOneClickTextHover(false)
                    }}
                  >
                    <h2
                      className={
                        projectOneClickTextHover
                          ? projectClickTextHoverStyle
                          : projectClickTextStyle
                      }
                    >
                      click
                    </h2>
                    <ImageReusable
                      style={{ position: "relative" }}
                      alt="picture of school site project"
                      filename="EagleElementarySchool.PNG"
                    />
                  </CardMedia>
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Eagle Elementary School
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textPrimary"
                    component="p"
                  >
                    This is a template elementary school site I created which
                    targets progressive school environments becoming more
                    socially distanced. It has a real-time chat with private
                    messaging and notifications. It is connected to a cms for
                    school faculty to use and the survey is connected to a
                    database.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div style={{ display: "flex" }}>
                <CardActions>
                  <a href="https://github.com/mattrbanks/school-site-chat-survey-portfolio-project">
                    <Button size="small" color="primary">
                      Code
                    </Button>
                  </a>
                  <a href="https://eagle-elementary-school.netlify.app/">
                    <Button size="small" color="primary">
                      Site
                    </Button>
                  </a>
                </CardActions>
                <div
                  style={{
                    display: "block",
                    flexDirection: "row",
                    //alignItems: "center",
                    listStyle: "none",
                  }}
                >
                  <div style={{ display: "flex", fontSize: "0.75rem" }}>
                    <div>React</div>
                    <div>Javascript</div>
                    <div>hey</div>
                    <div>hey</div>
                    <div>hey</div>
                  </div>
                  <div style={{ display: "flex", fontSize: "0.75rem" }}>
                    <div>React</div>
                    <div>Javascript</div>
                    <div>hey</div>
                    <div>hey</div>
                    <div>hey</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardActionArea>
                <a href="https://matts-retro-games.netlify.app/">
                  <CardMedia
                    className={
                      projectTwoHover ? mediaTransformStyle : mediaStyle
                    }
                    style={{
                      maxWidth: "100%",
                      margin: "0 0 0 0",
                      //position: "relative",
                    }}
                    //component={Image}
                    title="Matt's Retro Games"
                    onMouseEnter={() => {
                      setProjectTwoHover(true)
                      setProjectTwoClickTextHover(true)
                    }}
                    onMouseLeave={() => {
                      setProjectTwoHover(false)
                      setProjectTwoClickTextHover(false)
                    }}
                  >
                    <h2
                      className={
                        projectTwoClickTextHover
                          ? projectClickTextHoverStyle
                          : projectClickTextStyle
                      }
                    >
                      click
                    </h2>
                    <Image
                      style={{ position: "relative" }}
                      alt="picture of game store site project"
                    />
                    {/* <div style={{ maxWidth: "100%", margin: "0 0 0 0" }}>
                      <Image
                      //src={MattsRetroGames}
                      //style={{ maxWidth: "50%", margin: "0 0 0 0" }}
                      />
                    </div> */}
                  </CardMedia>
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Matt's Retro Games
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textPrimary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href="https://github.com/mattrbanks/retro-game-store-portfolio-project">
                  <Button size="small" color="primary">
                    Code
                  </Button>
                </a>
                <a href="https://matts-retro-games.netlify.app/">
                  <Button size="small" color="primary">
                    Site
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
        </div>
      </section>
      <section id="contact" className={classes.contactSectionStyles}>
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
              //style={{ margin: "50px 50px 50px 50px" }}
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
            <a
              href="mailto:banks.matt81@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={iconThreeHover ? iconThreeStyle : iconContactStyle}
            >
              <FaEnvelopeOpenText
                style={{ fontSize: "65px" }}
                onMouseEnter={() => setIconThreeHover(true)}
                onMouseLeave={() => setIconThreeHover(false)}
              />
            </a>
          </div>
          <div>
            <a
              href="mailto:banks.matt81@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={iconFourHover ? iconFourStyle : iconContactStyle}
            >
              <FaFile
                style={{ fontSize: "65px" }}
                onMouseEnter={() => setIconFourHover(true)}
                onMouseLeave={() => setIconFourHover(false)}
              />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
