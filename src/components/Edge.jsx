import React from 'react'
import classes from '../styles/Edge.module.css'

const Edge = ({Parent, Right, Left}) => {

  console.log(Right)
  if (Right && Left) {
    return (
      <div>
        {Parent}
        {Right}
        {Left}
      </div>
    )
  }
  if (Left && !Right)
    return (
      <div className={classes.Ledge}>
        {Parent}
        <div className={classes.Lline}></div>
        {Left}
      </div>
    )
  else if (!Left && Right)
      return (
        <div className={classes.Redge}>
          {Parent}
          <div className={classes.Rline}></div>
          {Right}
        </div>
      )

}

export default Edge