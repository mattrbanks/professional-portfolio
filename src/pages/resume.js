import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Resume = () => {
  return (
    <React.Fragment>
      <SEO title="Resume" />
      <div style={{ display: "flex", flexDirection: "column", margin: "2rem" }}>
        <h1>Matthew Banks</h1>
        <p>(203) 706-2262</p>
        <p>
          <a
            href="https://mattbanksdev.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            mattbanksdev.com
          </a>
        </p>{" "}
        <p>
          <a
            href="mailto:banks.matt81@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            banks.matt81@gmail.com
          </a>
        </p>{" "}
        <p>
          <a
            href="https://www.linkedin.com/in/matthewr-banks"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            linkedin.com/in/matthewr-banks
          </a>
        </p>
        <p>
          <a
            href="https://github.com/mattrbanks"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            github.com/mattrbanks
          </a>
        </p>
        <div
          style={{ display: "block", textAlign: "center", margin: "0 0 0 0" }}
        ></div>
        <div style={{ display: "block" }}>
          <h2>Projects</h2>
          <h4>
            <Link style={{ color: "#0000FF" }} to="/#projects">
              Portfolio Projects Section
            </Link>
          </h4>
          <h4>Eagle Elementary School</h4>
          <p>
            This is a template elementary school site I created which targets
            progressive school environments becoming more socially distanced. It
            has a real-time chat for parents and teachers with private messaging
            and push notifications. The events page is connected to a content
            management system for school faculty to easily use without the help
            of a programmer. The survey is connected to a mongodb atlas database
            that collects responses from parents. The curriculum section is
            based on real curriculum standards.
          </p>
          <p>
            Technologies used to build it: React, Javascript, Mongodb,
            Contentful, Material ui, Styled components, Socket.io, GraphQL,
            Express, Node, Gatsby
          </p>
          <div style={{ margin: "1rem" }}>
            <a
              style={{ color: "#0000FF" }}
              href="https://github.com/mattrbanks/school-site-chat-survey-portfolio-project"
            >
              Code
            </a>
            <a
              style={{ marginLeft: "1rem", color: "#0000FF" }}
              href="https://eagle-elementary-school.netlify.app/"
            >
              Site
            </a>
          </div>
          <h4>Matt's Retro Games</h4>
          <p>
            I had a lot of fun with this project because these are many of my
            favorite retro games. This is like a tribute to games that I am
            nostalgic for but in the form of a retro game store. I used a real
            price guide to price each game so they should be very accurately
            priced in my store. This store template has all the hallmarks of an
            e-commerce website and it utilizes a sandbox PayPal that can be
            activated in the future to handle real transactions. I won't be
            parting with my collection though.
          </p>
          <p>
            Technologies used to build it: React, Javascript, Bootstrap, Styled
            components, PayPal, React router
          </p>
          <div style={{ margin: "1rem" }}>
            <a
              style={{ color: "#0000FF" }}
              href="https://github.com/mattrbanks/retro-game-store-portfolio-project"
            >
              Code
            </a>
            <a
              style={{ marginLeft: "1rem", color: "#0000FF" }}
              href="https://matts-retro-games.netlify.app/"
            >
              Site
            </a>
          </div>
          <h2>Work Experience</h2>
          <h4>
            Self Taught Web Developer <br />
            January 2019 – Present
            <br />
            <ul style={{ marginTop: "1rem" }}>
              <li>Code every day</li>
              <li>
                Build web applications for my professional portfolio and make
                templates for potential freelance work
              </li>
              <li>
                Use my research skills to consume all the great resources on the
                internet and then learn by doing
              </li>
            </ul>
          </h4>
          <h4>
            Teaching Assistant <br />
            August 2015 – December 2017
            <br />
            University of Connecticut
            <br /> Department of Molecular and Cell Biology
            <br />
            Storrs, CT
            <ul style={{ marginTop: "1rem" }}>
              <li>
                Teach three lab and discussion sections per week to
                undergraduate students; 20-25 students per class
              </li>
              <li>
                Help students through biology experiments, some involving enzyme
                activity and gel electrophoresis{" "}
              </li>
              <li>
                Taught Biology 1107 and Genetics 2410; giving/preparing lectures{" "}
              </li>
            </ul>
          </h4>
          <h4>
            Technician <br />
            February 2014 – February 2015
            <br />
            Aerotek (3M Purification, Temporary)
            <br />
            Meriden, CT
            <ul style={{ marginTop: "1rem" }}>
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
          </h4>
          <h4>
            Critical Components-Manufacturing Associate 1 <br />
            August 2010 – May 2011
            <br />
            Reitman Personnel (454 Life Sciences, Temporary)
            <br />
            Branford, CT
            <ul style={{ marginTop: "1rem" }}>
              <li>Preparing DNA Capture Beads for commercial distribution</li>
              <li>
                Processing experimental data with Excel for production records
              </li>
              <li>
                Running assays on products in process, such as enzyme activity
                assays
              </li>
              <li>
                Working as part of a team to meet strict customer deadlines and
                test results for research and development
              </li>
            </ul>
          </h4>

          <h2>Education</h2>
          <h4>
            <div>
              University of Connecticut, Storrs, CT
              <br /> Master of Science, Molecular and Cell Biology-Genetics and
              Genomics, December 2017
              <br /> Research: Developmental Biology; cell lineage and
              transcriptional profiling of select tissues in mice
            </div>
            <div style={{ marginTop: "1rem" }}>
              Central Connecticut State University, New Britain, CT
              <br /> Bachelor of Science, Biomolecular Sciences-Biotechnology,
              December 2013
              <br /> Research: Genetics-RNA Editing in honey bees
            </div>
          </h4>
        </div>
        <Link style={{ color: "#0000FF" }} to="/">
          Back to Portfolio
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Resume
