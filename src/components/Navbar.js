import React, { useState } from "react"
import classes from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import sohial from "../constants/sohial"
import logo from "../images/logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(isOpen => !isOpen)
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          <img src={logo} alt="logo" />
          <button
            type="button"
            className={classes.logoBtn}
            onClick={toggleMenu}
          >
            <FaAlignRight className={classes.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${classes.navLinks} ${classes.showNav}`
              : `${classes.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>{item.text}</AniLink>
              </li>
            )
          })}
        </ul>
        <div className={classes.navSocialLinks}>
          {sohial.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
