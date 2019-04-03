import React from "react"

import NavBar from "./header.js"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
)

export default Layout