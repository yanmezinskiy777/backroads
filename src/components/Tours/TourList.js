import React, { useState, useEffect } from 'react'
import classes from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

const TourList = (props) => {
    const [tours, setTours] = useState([])
    //const [toursSorted, setToursSorted] = useState([])

    useEffect(()=>{
        setTours(props.tours.edges)
        //setToursSorted(props.tours.edges)
    },[props.tours])
   
        return (
          <section className={classes.tours}>
              <Title title="our" subtitle="tours" />
              <div className={classes.center}>
                {tours.map(({node})=>{
                    return <Tour key={node.contentful_id} tour={node} />
                })}
              </div>
          </section>
        )
    
}
export default TourList
