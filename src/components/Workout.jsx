const Workout = ({workout}) => { 

    return (
      <div className="workIt">
       <h3 className="mt-10 text-2xl">Workout: {workout.text}</h3> 
        <p> sets: {workout.sets}</p> 
      </div>
    )
  }
  
  export default Workout
