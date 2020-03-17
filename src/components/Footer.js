import React from "react"
import classes from "../css/footer.module.css"
import sohial from "../constants/sohial"
import links from "../constants/links"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={classes.icons}>
        {sohial.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={classes.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer
