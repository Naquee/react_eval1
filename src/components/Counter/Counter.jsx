import React, { useState } from "react";
import styles from "./counter.css";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  const [count,setCount]= useState(0)
  const handleClick =(e)=>{
    if(e.target.name==="inc")
    {
      setCount(count+1)
    }
    else{
      if(count>0)
      {
        setCount(count-1)
      }
    }
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className="upper">
    <div className={styles.counter}>
    <div className="top">
    <h3>Todo List</h3>
    <p>You have {count} of remaining</p>


    </div>
    <div>
      <input placeholder="add task                           +" className="query"/>
    </div>

    <div className="btn">

    <div>
    <p id="para">Lift Up</p>
   
    </div>

    <div>
    <button name="inc" data-cy="task-counter-increment-button" onClick={handleClick}>+</button>
   
      <span data-cy="task-counter-value">{count}</span>
      <button name="dec" data-cy="task-counter-decrement-button" onClick={handleClick}>-</button>
    </div>
   

    </div>

    
    </div>
    </div>
  );
};

export default Counter;
