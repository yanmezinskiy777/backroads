import React, {useState} from 'react'
import { FaAngleDown } from "react-icons/fa"
import classes from "../../css/day.module.css"

const Day = ({day, info}) => {

 const [show, setShow] = useState(false)

 const onToggleInfo = () => {
    setShow(show => !show)
 }

    return (
       <article className={classes.day}>
         <h4>{day}
          <button onClick={onToggleInfo} className={classes.btn}>
              <FaAngleDown />
          </button>
         </h4>
        {show && (<p>{info}</p>)}
       </article>
    )
}

export default Day
