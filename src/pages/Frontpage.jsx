import React from "react";
import { useNavigate } from "react-router-dom";


const FrontPage = () => {

   const navigate = useNavigate();
    return (
        <>
          <div className="justify-center items-center h-screen bg-workout bg-no-repeat bg-cover bg-blend-normal flex overflow-hidden">
            <div className="text-center">
              <h1 className='text-gray-300 text-8xl font-black'>Workout</h1>
              <form className="my-10" action="">
                <button className="text-gray-300 bg-slate-900 w-48 h-14 rounded-3xl" onClick={() => navigate('/cardGame')}>Start</button>
              </form>
              <p className="text-gray-300 mt-16 font-black text-xl">About?</p> 
              <p className="text-gray-300">pick a card out of three cards and get a exercise!</p>
            </div>
          </div>
        </>
          );
}

export default FrontPage;

