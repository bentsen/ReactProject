import { useState, useEffect } from "react";
import Workouts from "../components/Workouts";
import { useNavigate } from "react-router-dom";

const CardPage = () => {

  const navigate = useNavigate();

  const [showCards, setShowCards] = useState(true) 

  const [workout, setWorkout] = useState([]);
  const fetchWorkOut = async () => {
    const res = await fetch('http://localhost:5000/workout')
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    const getworkout = async() =>{
      const workoutFromServer = await fetchWorkOut()
      setWorkout(workoutFromServer)
    }
    getworkout();
  },[])
  
      return (
          <>
            {showCards ?
              <div className="mt-14 text-center">
                <h1 className='text-gray-300 text-8xl font-black'>Pick a card</h1>
                <div className="flex flex-row justify-center mt-14 gap-x-16">
                    <div className="bg-green-600 w-80 max-h-96 rounded-2xl">
                      <button id="green" className="w-full h-full rounded-2xl" onClick={() => setShowCards(!showCards)}>
                        <img className="h-48 opacity-90 mx-auto pointer-events-none" src="src/images/runner.png" alt="picture of a man runnning"/>
                      </button>    
                    </div>
                    <div className="bg-purple-600 w-80 h-96 rounded-2xl">
                      <button id="purple" className="w-full h-full rounded-2xl" onClick={() => setShowCards(!showCards)}>
                        <img className="h-48 opacity-90 mx-auto pointer-events-none" src="src/images/runner.png" alt="picture of a man runnning" />
                      </button>    
                    </div>
                    <div className="bg-orange-400 w-80 h-96 rounded-2xl">
                      <button id="orange" className="w-full h-full rounded-2xl" onClick={() => setShowCards(!showCards)}>
                        <img className="h-48 opacity-90 mx-auto pointer-events-none" src="src/images/runner.png" alt="picture of a man runnning" />
                      </button>    
                    </div>
                </div>
              </div>
            : 
              <div className="mt-14 text-center">
                <h1 className="text-gray-300 text-8xl font-black">Do workout!</h1>
                <div className="flex justify-center mt-14">
                  <div className="bg-gray-300 w-96 h-96 rounded-2xl">
                    <Workouts workouts={workout}/>
                  </div>
                </div>
                <button className="mt-10 text-gray-300 bg-slate-900 w-36 h-14 rounded-3xl" onClick={() => navigate('/')}>Back</button>
              </div>
            }
          </>
            );
}

export default CardPage;

