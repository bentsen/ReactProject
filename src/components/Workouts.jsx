import React, { useState } from 'react'
import Workout from './Workout';



const Workouts = ({workouts}) => {
const number = Math.floor((Math.random()*5)+1)
console.log(number);
  return (
    <>
       {workouts.filter(el=>el.id===number).map((el,index)=>{
        return <Workout
         key={index}
         workout={el}
         />
     })}
    </>
  )
}

export default Workouts