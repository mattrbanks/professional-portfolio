import React from "react"
import SEO from "../components/seo"
import "../components/layout.css"
import downloadFile from "../../resume/matthew-banks-resume-5-04-2021.pdf"
import styled from "styled-components"

const Resume = () => {
  return (
    <React.Fragment>
      <SEO title="Resume" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "2rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.45rem",
          }}
        >
          <h1>Matthew R Banks</h1>
          <h4>Full Stack Web Developer</h4>
          <ResumeDiv>
            <div>
              <div className={"contacts"}>
                <p>
                  <a
                    href="https://mattbanksdev.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0000FF",
                      textDecoration: "none",
                      marginRight: "0.5rem",
                    }}
                  >
                    mattbanksdev.com
                  </a>
                </p>{" "}
                <p>
                  <a
                    href="mailto:banks.matt81@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0000FF",
                      textDecoration: "none",
                      marginLeft: "0.5rem",
                    }}
                  >
                    banks.matt81@gmail.com
                  </a>
                </p>{" "}
              </div>
              <div className={"contacts"}>
                <p>
                  <a
                    href="https://www.linkedin.com/in/matthewr-banks"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0000FF",
                      textDecoration: "none",
                      marginRight: "0.5rem",
                    }}
                  >
                    linkedin.com/in/matthewr-banks
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/mattrbanks"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0000FF",
                      textDecoration: "none",
                      marginLeft: "0.5rem",
                    }}
                  >
                    github.com/mattrbanks
                  </a>
                </p>
              </div>
            </div>
            <div className={"contacts"}>
              <p style={{ marginRight: "0.5rem" }}>(203) 706-2262</p>
              <p>
                <a
                  href={downloadFile}
                  download
                  style={{
                    color: "#0000FF",
                    textDecoration: "none",
                    marginLeft: "0.5rem",
                  }}
                >
                  &rarr; Download Resume PDF &larr;
                </a>
              </p>
            </div>
          </ResumeDiv>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2rem",
          }}
        >
          <div>
            <h4>Web Development Skills:</h4>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Programming</th>
                  <th>Data</th>
                  <th>Tools</th>
                </tr>
                <tr>
                  <td>
                    HTML5/CSS3, JavaScript, React, GatsbyJS/GraphQL, NodeJS,
                    Express, PHP
                  </td>
                  <td>MongoDB, MySQL</td>
                  <td>Git, GitHub, Visual Studio Code, Figma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <BodyContent>
          <div style={{ display: "block" }} className={"body-content"}>
            <div className={"desktop-resume mobile-resume"}>
              <div style={{ marginRight: "1rem" }}>
                <h2 style={{ marginRight: "1.5rem" }}>&lang;Projects&rang;</h2>
              </div>
              <div style={{ padding: "1rem" }}>
                <div>
                  <h2>Kasey Banks Portfolio</h2>
                  <div style={{ margin: "0 0 1rem 0" }}>
                    <a
                      style={{
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://github.com/mattrbanks/kasey-banks-professional-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See My Code
                    </a>
                    <a
                      style={{
                        marginLeft: "1rem",
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://kaseybanksportfolio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try The Site
                    </a>
                  </div>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Features:</span> Real
                  educational data &#8226; Custom design &#8226; Video Gallery
                  &#8226; Contact Form &#8226; Resume page
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>About:</span> This is a
                  professional portfolio that highlights the work of an educator
                  over the span of her career. She is transitioning from an
                  instructional coach to an administrator and she is
                  highlighting each position she has had over the years. D3 was
                  used to visually represent the data provided.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Technologies used to build it:
                  </span>{" "}
                  React, JavaScript, Tailwind CSS, Netlify Forms, reCAPTCHA,
                  Figma, D3
                </p>
                <div>
                  <h2 className={"h2-margin"}>Face Conference</h2>
                  <div style={{ margin: "0 0 1rem 0" }}>
                    <a
                      style={{
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://github.com/mattrbanks/face-conference"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See My Code
                    </a>
                    <a
                      style={{
                        marginLeft: "1rem",
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://face-conference.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try The Site
                    </a>
                  </div>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Features:</span>{" "}
                  Intuitive dashboard with options to create a new room or join
                  a demo lobby &#8226; Disable the video, audio, or hang up the
                  call and go back to the dashboard
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>About:</span> This is a
                  video chat website that utilizes WebRTC technology. Face
                  Conference is a place where you and your friends can talk,
                  face to face, and catch up online.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Technologies used to build it:
                  </span>{" "}
                  JavaScript, PeerJS, EJS, Socket.io, WebRTC, Express, Node,
                  MongoDB
                </p>
                <div>
                  <h2 className={"h2-margin"}>Quick Chat</h2>
                  <div style={{ margin: "0 0 1rem 0" }}>
                    <a
                      style={{
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://github.com/mattrbanks/Quick-Chat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See My Code
                    </a>
                    <a
                      style={{
                        marginLeft: "1rem",
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://quick-chat.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try The Site
                    </a>
                  </div>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Features:</span> Group
                  chat &#8226; Private chat &#8226; Push notifications &#8226;
                  Help section &#8226; Wide selection of emojis &#8226; Unique
                  user id &#8226; Logged in user list
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>About:</span> This is a
                  real-time chat web application that has group topic rooms and
                  private messaging with push notifications. Private messages
                  are equipped with a service worker to handle push
                  notifications.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Technologies used to build it:
                  </span>{" "}
                  React, JavaScript, Material ui, Socket.io, Express, Node,
                  Gatsby, Web Push
                </p>
                <div>
                  <h2 className={"h2-margin"}>Eagle Elementary School</h2>
                  <div style={{ margin: "0 0 1rem 0" }}>
                    <a
                      style={{
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://github.com/mattrbanks/school-site-chat-survey-portfolio-project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See My Code
                    </a>
                    <a
                      style={{
                        marginLeft: "1rem",
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://eagle-elementary-school.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try The Site
                    </a>
                  </div>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Features:</span>{" "}
                  Parent/Teacher Chat &#8226; School events blog connected to
                  CMS &#8226; Education satisfaction survey connected to
                  database &#8226; Based on real school curriculum
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>About:</span> This is an
                  elementary school site which targets progressive school
                  environments becoming more socially distanced. It is based on
                  real curriculum standards.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Technologies used to build it:
                  </span>{" "}
                  React, JavaScript, MongoDB, Contentful, Material ui, Styled
                  components, Socket.io, GraphQL, Express, Node, Gatsby
                </p>
                <div>
                  <h2 className={"h2-margin"}>Matt's Retro Games</h2>
                  <div style={{ margin: "0 0 1rem 0" }}>
                    <a
                      style={{
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://github.com/mattrbanks/retro-game-store-portfolio-project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See My Code
                    </a>
                    <a
                      style={{
                        marginLeft: "1rem",
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://matts-retro-games.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try The Site
                    </a>
                  </div>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Features:</span> PayPal
                  &#8226; Search bar &#8226; Game product pages &#8226; Detail
                  page for each product &#8226; Cart checkout with tax (USA)
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>About:</span> This is a
                  tribute to the games I am nostalgic for but in the form of a
                  retro game store. The games are all accurately priced. This
                  store includes all the hallmarks of an e-commerce website and
                  it utilizes a sandbox PayPal that can be activated in the
                  future to handle real transactions.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Technologies used to build it:
                  </span>{" "}
                  React, JavaScript, Bootstrap, Styled components, PayPal, React
                  router
                </p>
                <div>
                  <h2 className={"h2-margin"}>Professional Portfolio</h2>
                  <div style={{ margin: "0 0 1rem 0" }}>
                    <a
                      style={{
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://github.com/mattrbanks/professional-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See My Code
                    </a>
                    <a
                      style={{
                        marginLeft: "1rem",
                        color: "#0000FF",
                        textDecoration: "none",
                        border: "1px solid blue",
                        borderRadius: "50px",
                        padding: "0.25rem",
                      }}
                      href="https://mattbanksdev.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try The Site
                    </a>
                  </div>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Features:</span> Welcome
                  section with a current skills/technologies list &#8226; A
                  projects section to view code and try the sites &#8226; Resume
                  page with pdf download &#8226; Contact section with github and
                  other useful info
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>About:</span> This is my
                  personal portfolio website. This is where all my latest
                  projects live and it serves as a central hub for people to get
                  in touch with me for web development work.
                </p>
                <p style={{ marginBottom: "1.3rem" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Technologies used to build it:
                  </span>{" "}
                  React, JavaScript, Gatsby, Styled components, Material ui
                </p>
                <div style={{ textAlign: "center", marginBottom: "1.45rem" }}>
                  <a
                    style={{ color: "#0000FF", textDecoration: "none" }}
                    href="https://mattbanksdev.com/#projects"
                  >
                    Click Here For More Information On These Projects
                  </a>
                </div>
              </div>
            </div>
            <div className={"desktop-resume mobile-resume"}>
              <div style={{ marginRight: "1rem" }}>
                <h2>
                  &lang;Work <br />
                  Experience&rang;
                </h2>
              </div>
              <div style={{ padding: "1rem" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Web Developer</h4>
                  <div>Jan 2019 – Present</div>
                </div>
                <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                  <li>
                    Build practical web applications that focus on real world
                    needs and current culture
                  </li>
                  <li>
                    Update/improve my portfolio website with new projects and
                    make templates for potential freelance work
                  </li>
                  <li>
                    Experiment with new technologies as needed for projects
                  </li>
                  <li>Git version control and web application deployment</li>
                </ul>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Carpenter Assistant</h4>
                  <div>Jan 2018 – Mar 2021</div>
                </div>
                <p>
                  Banks Home Improvement LLC
                  <br />
                  Middletown, CT
                </p>
                <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                  <li>
                    Assist with lifting, positioning, securing, and cutting of
                    materials during installation
                  </li>
                  <li>
                    Use tools like saws, nail guns, tape measures, levels,
                    hammers, squares, and ladders to finish jobs
                  </li>
                  <li>
                    Keep work areas clean to maintain a safe work environment
                  </li>
                </ul>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Teaching Assistant</h4>
                  <div>Aug 2015 – Dec 2017</div>
                </div>
                <p>
                  University of Connecticut
                  <br /> Department of Molecular and Cell Biology
                  <br />
                  Storrs, CT
                </p>
                <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                  <li>
                    Teach three lab and discussion sections per week to
                    undergraduate students; 20-25 students per class
                  </li>
                  <li>
                    Help students through biology experiments, some involving
                    enzyme activity and gel electrophoresis{" "}
                  </li>
                  <li>
                    Taught Biology 1107 and Genetics 2410; giving/preparing
                    lectures{" "}
                  </li>
                </ul>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Technician</h4>
                  <div>Feb 2014 – Feb 2015</div>
                </div>
                <p>
                  3M Purification
                  <br />
                  Meriden, CT
                </p>
                <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                  <li>
                    Chemical formulations for production of high grade nylon
                    water filters and QA
                  </li>
                  <li>
                    Charge solution formulation and other solution preparation
                  </li>
                  <li>
                    Responsibility for maintaining and monitoring a chemical
                    room containing methanol, formic acid, sodium hydroxide, and
                    other chemicals
                  </li>
                  <li>OSHA regulated environment</li>
                </ul>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>
                    Critical Components <br />
                    Manufacturing Associate 1
                  </h4>
                  <div>Aug 2010 – May 2011</div>
                </div>
                <p>
                  454 Life Sciences
                  <br />
                  Branford, CT
                </p>
                <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                  <li>
                    Preparing DNA Capture Beads for commercial distribution
                  </li>
                  <li>
                    Processing experimental data with Excel for production
                    records
                  </li>
                  <li>
                    Running assays on products in process, such as enzyme
                    activity assays
                  </li>
                  <li>
                    Working as part of a team to meet strict customer deadlines
                    and test results for research and development
                  </li>
                </ul>
              </div>
            </div>
            <div className={"desktop-resume mobile-resume"}>
              <div style={{ marginRight: "1rem" }}>
                <h2>&lang;Education&rang;</h2>
              </div>
              <div style={{ padding: "1rem" }}>
                <div>
                  <div>
                    <h4>
                      University of Connecticut, Storrs, CT
                      <br /> Master of Science in Molecular and Cell
                      Biology-Genetics and Genomics
                    </h4>
                    <div style={{ paddingLeft: "1rem" }}>
                      December 2017
                      <br /> Research: Developmental Biology; cell lineage and
                      transcriptional profiling of select tissues in mice
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <h4>
                      Central Connecticut State University, New Britain, CT
                      <br /> Bachelor of Science in Biomolecular
                      Sciences-Biotechnology,{" "}
                    </h4>
                    <div style={{ paddingLeft: "1rem" }}>
                      December 2013
                      <br /> Research: Genetics-RNA Editing in honey bees
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BodyContent>
        <a
          style={{ color: "#0000FF", textDecoration: "none" }}
          href="https://mattbanksdev.com/"
        >
          Go To Portfolio Website
        </a>
      </div>
    </React.Fragment>
  )
}

export default Resume

const ResumeDiv = styled.div`
  .contacts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {
      margin-bottom: 0.15rem;
    }
    @media (max-width: 455px) and (orientation: portrait) {
      display: block;
    }
  }
`

const BodyContent = styled.div`
  .body-content {
    p {
      margin-bottom: 0.15rem;
    }
  }

  .h2-margin {
    margin-top: 1.3rem;
  }

  li {
    margin-bottom: 0.15rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }
`
