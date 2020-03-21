import React from 'react'
import Title from "../Title"
import classes from "../../css/contact.module.css"
const Contact = () => {
    return (
        <section className={classes.contact}>
          <Title title="contact" subtitle="us" />
          <div className={classes.center}>
              <form className={classes.form}>
                  <div>
                      <label htmlFor="name">name</label>
                      <input type="text" name="name" id="name" className={classes.formControl} placeholder="name" />
                  </div>
                  <div>
                  <label htmlFor="email">email</label>
                      <input type="text" name="email" id="email" className={classes.formControl} placeholder="email" />
                  </div>
                  <div>
                  <label htmlFor="message">message</label>
                      <textarea name="message" rows="10" id="message" className={classes.formControl} placeholder="message" />
                  </div>
                  <div>
                      <input type="submit" name="submit" value="submit" className={classes.submit} />
                  </div>
              </form>
          </div>
        </section>
    )
}

export default Contact
