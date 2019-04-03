import React from "react"
import { Link } from "gatsby"

export default () => (
  <div
    style={{
      display: "flex",
      flex: "1",
      justifyContent: "space-around",
      borderBottom: "3px solid #d1c1e0",
    }}
  >
    <span>You are not logged in</span>

    <nav
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/">Home</Link>
      {` `}
      <Link to="/">Profile</Link>
      {` `}
      <Link to="/">Logout</Link>
    </nav>
  </div>
)
