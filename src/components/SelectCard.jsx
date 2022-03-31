import React from 'react'

const SelectCard = () => {

    const handleClick = (event) => {
        const id = event.target.id;
        if(id === "green")
        {
          console.log("green")
        }
        else if(id === "purple")
        {
          console.log("purple")
        }
        else if(id === "orange")
        {
          console.log("orange")
        }
      }

    return (
        <>
            <div className="mt-14 text-center">
            <h1 className='text-gray-300 text-8xl font-black'>Pick a card</h1>
            <div className="flex flex-row justify-center mt-14 gap-x-16">
                <div className="bg-green-600 w-80 max-h-96 rounded-2xl">
                <button id="green" className="w-full h-full rounded-2xl" onClick={handleClick} onShow={() =>setShowCards(!showCards)}>
                    <img className="h-48 opacity-90 mx-auto pointer-events-none" src="src/images/runner.png" alt="picture of a man runnning"/>
                </button>    
                </div>
                <div className="bg-purple-600 w-80 h-96 rounded-2xl">
                <button id="purple" className="w-full h-full rounded-2xl" onClick={handleClick}>
                    <img className="h-48 opacity-90 mx-auto pointer-events-none" src="src/images/runner.png" alt="picture of a man runnning" />
                </button>    
                </div>
                <div className="bg-orange-400 w-80 h-96 rounded-2xl">
                <button id="orange" className="w-full h-full rounded-2xl" onClick={handleClick}>
                    <img className="h-48 opacity-90 mx-auto pointer-events-none" src="src/images/runner.png" alt="picture of a man runnning" />
                </button>    
                </div>
            </div>
            </div>
        </>
    )
}

export default SelectCard