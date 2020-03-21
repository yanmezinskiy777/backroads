import React from 'react'
import classes from "../../css/services.module.css"
import servises from "../../constants/services"
import Title from "../Title"

const Servises = () => {
    return (
        <section className={classes.services}>
            <Title title="our" subtitle="services" />
            <div className={classes.center}>
                { servises.map((item, index)=>{
                    return <article key={index} className={classes.service}>
                        <span>
                            {item.icon}
                        </span>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </article>
                }) }
            </div>
        </section>
    )
}

export default Servises
