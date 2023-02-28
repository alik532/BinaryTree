import React from 'react'
import classes from '../styles/Node.module.css'

const Node = ({ node }) => {

  if (node.right && !node.left) {
    return (
      <div>
        <div className={`${classes.value} ${classes.left}`}>{node.value}</div>
        <Node node={node.right}/>
      </div>
    )
  }
  else if (!node.right && node.left) {
    return (
    <div>
      <div className={`${classes.value} ${classes.right}`}>{node.value}</div>
      <Node node={node.left}/>
    </div>
    )
  }
  else if (node.right && node.left) {
    return (
    <div>
      <div className={classes.value}>{node.value}</div>
      <div style={{display: "flex", transform: "translateX(-20px)", marginTop: "50px", gap: "50px"}}>
        <Node node={node.left}/>
        <Node node={node.right}/>
      </div>
    </div>
    )
  }
  else {
    return (
      <div className={classes.value}>{node.value}</div>
    )
  }
        
}

export default Node