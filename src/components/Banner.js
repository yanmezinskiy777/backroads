import React from "react"
import classes from "../css/banner.module.css"
const Banner = ({ title, info, children }) => {
  return (
    <div className={classes.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
