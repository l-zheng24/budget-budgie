import React, { useState } from 'react'
import { Progress } from "@material-tailwind/react"

function Dashboard() {
    return (
      <React.Fragment>
      <section class="bg-slate-100">
        
        
        <div class='w-screen h-screen grid text-white text-4xl md:grid-cols-2'>
              
              
              <div class="flex justify-center pt-20 ">

                
                
                
                <div
                  class=" flex-col rounded-lg  shadow-lg bg-light-blue w-5/6 h-4/5 flex">
                  <div class=" flex-col justify-start p-6 flex">
                    <h5
                      class="mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                      Dining Dollars
                    </h5>
                    <p class="mb-4 text-3xl  text-dark-green pt-3">
                      Dining Dollars spent this month:
                    </p>
                    <div class = "w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                      test
                    </div>
                    <p class="mb-4 text-3xl  text-dark-green">
                      Dining Dollars spent this semester:
                    </p>
                    <div class = "w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                      test
                    </div>
                    <p class="mb-4 text-3xl  text-dark-green">
                      Dining Dollars spent this week:
                    </p>
                    <div class = "w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                      test
                    </div>
                  </div>
                </div>

              </div>  
            
            
          
            <div class="flex justify-center pt-20 ">
              <div
                class=" flex-col rounded-lg shadow-lg bg-light-blue w-5/6 h-4/5 flex ">
                <div class="flex flex-col justify-start p-6">
                  <h5
                    class="mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                    Real Money
                  </h5>
                  <p class="mb-4 text-3xl text-dark-green pt-3">
                      Amount spent this month:
                    </p>
                    <div class = "w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                      test
                    </div>
                    <p class="mb-4 text-3xl text-dark-green">
                      Amount spent this semester:
                    </p>
                    <div class = "w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                      test
                    </div>
                    <p class="mb-4 text-3xl text-dark-green">
                      Amount spent this week:
                    </p>
                    <div class = "w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                      test
                    </div>
                </div>
              </div>
            </div>  
            

        </div>
      </section>
    </React.Fragment>
    );
  }

  export default Dashboard;


  