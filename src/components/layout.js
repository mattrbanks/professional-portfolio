import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Menu from "./menu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [offsetY, setOffsetY] = React.useState()

  function scrollPosition() {
    setOffsetY(window.scrollY)
  }

  window.addEventListener("scroll", scrollPosition)

  return (
    <>
      {offsetY > 50 ? (
        <React.Fragment>
          <Menu />
          <Header siteTitle={data.site.siteMetadata.title} />
        </React.Fragment>
      ) : (
        <Header siteTitle={data.site.siteMetadata.title} />
      )}
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
