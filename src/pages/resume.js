import React from "react"
import { Link } from "gatsby"

const Resume = () => {
  return (
    <React.Fragment>
      <div>Here is my resume</div>
      <Link style={{ color: "#0000FF" }} to="/">
        Home
      </Link>
    </React.Fragment>
  )
}

export default Resume
