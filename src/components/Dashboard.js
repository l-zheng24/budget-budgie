import React, { useState } from 'react'
import { Progress } from "@material-tailwind/react"

function Dashboard() {
    return (
      <React.Fragment>
      <section class="bg-slate-100">
        
        <nav class="bg-celadon w-full h-20 rounded-md">
          <ol class="list-reset flex space-x-16 pt-3">
            <li>

            </li>
            <li >
              <a
                href="/"
                class="mr-2 text-4xl  rounded-md text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/mealplan"
                class="mr-2 text-4xl rounded-md text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600e"
                >Dining Dollars</a
              >
            </li>
            <a
                href="/realmoney"
                class="mr-2 text-4xl  rounded-md text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Money/Receipts</a
              >
          </ol>
        </nav>

        <div class='w-screen h-screen grid text-white text-4xl md:grid-cols-2'>
              
              <div class="flex justify-center pt-20 ">
                
                <div
                  class=" flex-col rounded-lg bg-white shadow-lg dark:bg-dark-green w-5/6 h-4/5 flex">
                  <div class=" flex-col justify-start p-6 flex">
                    <h5
                      class="px-4 mb-2 text-4xl font-medium text-dark-green bg-sunglow rounded-md">
                      Dining Dollars
                    </h5>
                    <p class="mb-4 text-3xl  text-neutral-600 dark:text-neutral-200 pt-10">
                      Dining Dollars spent this month:
                    </p>
                    <p class="mb-4 text-3xl  text-neutral-600 dark:text-neutral-200 pt-10">
                      Dining Dollars spent this semester:
                    </p>
                    <p class="mb-4 text-3xl  text-neutral-600 dark:text-neutral-200 pt-10">
                      Dining Dollars spent this week:
                    </p>
                  </div>
                </div>

              </div>  
            
            
          
            <div class="flex justify-center pt-20 ">
              <div
                class=" flex-col rounded-lg bg-white shadow-lg dark:bg-dark-green w-5/6 h-4/5 flex ">
                <div class="flex flex-col justify-start p-6">
                  <h5
                    class="px-4 mb-2 text-4xl font-medium text-dark-green bg-sunglow rounded-md">
                    Real Money
                  </h5>
                  <p class="mb-4 text-3xl  text-neutral-600 dark:text-neutral-200 pt-10">
                      Amount spent this month:
                    </p>
                    <p class="mb-4 text-3xl  text-neutral-600 dark:text-neutral-200 pt-10">
                      Amount spent this semester:
                    </p>
                    <p class="mb-4 text-3xl  text-neutral-600 dark:text-neutral-200 pt-10">
                      Amount spent this week:
                    </p>
                </div>
              </div>
            </div>  
            

        </div>
      </section>
    </React.Fragment>
    );
  }

  export default Dashboard;


  