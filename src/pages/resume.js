import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../components/layout.css"
import downloadFile from "../../resume/resume-matthew-r-banks-11-10-2020.pdf"

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
          <h1>Matthew Banks</h1>
          <h2>Web Developer</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
              |
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
              |
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <p style={{ marginRight: "0.5rem" }}>(203) 706-2262</p>|
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
        </div>
        <div style={{ display: "block" }}>
          <div className={"desktop-resume mobile-resume"}>
            <div style={{ marginRight: "1rem" }}>
              <h2 style={{ marginRight: "1.5rem" }}>&lang;Projects&rang;</h2>
            </div>
            <div style={{ padding: "1rem", marginRight: "" }}>
              <h2>Eagle Elementary School</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>Features:</span> Real Time
                Chat App, Blog connected to CMS, Survey connected to database,
                Based on real school curriculum
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>About:</span> This is a
                template elementary school site I created which targets
                progressive school environments becoming more socially
                distanced. It has a real-time chat for parents and teachers with
                private messaging and push notifications. The events page is
                connected to a content management system for school faculty to
                easily use without the help of a programmer. The survey is
                connected to a mongodb atlas database that collects responses
                from parents. The curriculum section is based on real curriculum
                standards.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Technologies used to build it:
                </span>{" "}
                React, JavaScript, Mongodb, Contentful, Material ui, Styled
                components, Socket.io, GraphQL, Express, Node, Gatsby
              </p>
              <div style={{ margin: "1rem" }}>
                <a
                  style={{ color: "#0000FF", textDecoration: "none" }}
                  href="https://github.com/mattrbanks/school-site-chat-survey-portfolio-project"
                >
                  Code
                </a>
                <a
                  style={{
                    marginLeft: "1rem",
                    color: "#0000FF",
                    textDecoration: "none",
                  }}
                  href="https://eagle-elementary-school.netlify.app/"
                >
                  Site
                </a>
              </div>
              <h2>Matt's Retro Games</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>Features:</span> PayPal,
                Search bar, Game product pages, Detail page for each product,
                Cart checkout with tax (USA)
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>About:</span> I had a lot
                of fun with this project because these are many of my favorite
                retro games. This is like a tribute to the games I am nostalgic
                for but in the form of a retro game store. I used a real price
                guide to price each game so they should be very accurately
                priced in my store. This store template has all the hallmarks of
                an e-commerce website and it utilizes a sandbox PayPal that can
                be activated in the future to handle real transactions. I won't
                be parting with my collection though.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Technologies used to build it:
                </span>{" "}
                React, JavaScript, Bootstrap, Styled components, PayPal, React
                router
              </p>
              <div style={{ margin: "1rem" }}>
                <a
                  style={{ color: "#0000FF", textDecoration: "none" }}
                  href="https://github.com/mattrbanks/retro-game-store-portfolio-project"
                >
                  Code
                </a>
                <a
                  style={{
                    marginLeft: "1rem",
                    color: "#0000FF",
                    textDecoration: "none",
                  }}
                  href="https://matts-retro-games.netlify.app/"
                >
                  Site
                </a>
              </div>
              <h2>Professional Portfolio</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>Features:</span> Welcome
                section with a current skills/technologies list, A projects
                section to view code and try the sites, Resume page with pdf
                download, Contact section with github and other useful info
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>About:</span> This is my
                personal portfolio website. This is where all my latest projects
                live and it serves as a central hub for people to get in touch
                with me for web development work. It has a nav menu that will
                jump to different sections of the portfolio and there is also an
                html resume page which has a convenient pdf resume download
                link. This resume has many links that are useful for recruiters
                to quickly see my work and contact me.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Technologies used to build it:
                </span>{" "}
                React, JavaScript, Gatsby, Styled components, Material ui
              </p>
              <div style={{ margin: "1rem" }}>
                <a
                  style={{ color: "#0000FF", textDecoration: "none" }}
                  href="https://github.com/mattrbanks/professional-portfolio"
                >
                  Code
                </a>
                <a
                  style={{
                    marginLeft: "1rem",
                    color: "#0000FF",
                    textDecoration: "none",
                  }}
                  href="https://mattbanksdev.com/"
                >
                  Site
                </a>
              </div>
              <div style={{ textAlign: "center", marginBottom: "1.45rem" }}>
                <Link
                  style={{ color: "#0000FF", textDecoration: "none" }}
                  to="/#projects"
                >
                  Link To Portfolio Projects Section
                </Link>
              </div>
              <div>
                <h4>Current Core Technologies Used:</h4>
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
                        HTML/CSS, JavaScript, React, GatsbyJS/GraphQL, NodeJS,
                        Express
                      </td>
                      <td>MongoDB</td>
                      <td>Visual Studio Code, Git, Figma</td>
                    </tr>
                  </tbody>
                </table>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Web Developer</h4>
                <div>Jan 2019 – Present</div>
              </div>
              <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                <li>
                  Build practical web applications that focus on real world
                  needs and current culture
                </li>
                <li>
                  Update/improve my portfolio website with new projects and make
                  templates for potential freelance work
                </li>
                <li>Experiment with new technologies as needed for projects</li>
                <li>Git version control and web application deployment</li>
              </ul>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Technician</h4>
                <div>Feb 2014 – Feb 2015</div>
              </div>
              <p>
                Aerotek (3M Purification, Temporary)
                <br />
                Meriden, CT
              </p>
              <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                <li>
                  Chemical formulations for production of high grade nylon water
                  filters and QA
                </li>
                <li>
                  Charge solution formulation and other solution preparation
                </li>
                <li>
                  Responsibility for maintaining and monitoring a chemical room
                  containing methanol, formic acid, sodium hydroxide, and other
                  chemicals
                </li>
                <li>OSHA regulated environment</li>
              </ul>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                  Critical Components <br />
                  Manufacturing Associate 1
                </h4>
                <div>Aug 2010 – May 2011</div>
              </div>
              <p>
                Reitman Personnel (454 Life Sciences, Temporary)
                <br />
                Branford, CT
              </p>
              <ul style={{ marginTop: "1rem", marginBottom: "1.45rem" }}>
                <li>Preparing DNA Capture Beads for commercial distribution</li>
                <li>
                  Processing experimental data with Excel for production records
                </li>
                <li>
                  Running assays on products in process, such as enzyme activity
                  assays
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
        <Link style={{ color: "#0000FF", textDecoration: "none" }} to="/">
          Back to Portfolio
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Resume
