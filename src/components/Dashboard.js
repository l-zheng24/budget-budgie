import React, { useState } from 'react'
import { Progress } from "@material-tailwind/react"

function Dashboard() {
    return (
      <React.Fragment>
      <section>
        <div class='w-screen h-screen grid grid-rows-2 text-white text-4xl md:grid-cols-2'>
            <div class= ' w-full h-full bg-celadon centered md:h-screen border-4'>
              <h class="font-bold flex justify-center text-gray-800">Meal Plan</h>
              <p class= " m-10  text-gray-800">Dollars Left: </p>
              <p class = " m-10 text-gray-800">Swipes left:</p>
              <div class = "flex w-full flex-col gap-4">
                <Progress value={50} color="blue" /> 
              </div>
              
            </div> 
  
            {/* page 2 */}
            <div class='w-full h-full bg-sunglow centered md:h-screen border-4'>
            <h class = "font-bold flex justify-center text-gray-800">Real Money</h>
           
            </div>
        </div>
      </section>
    </React.Fragment>
    );
  }

  export default Dashboard;


  