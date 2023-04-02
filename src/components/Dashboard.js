import React, { useState } from "react";
import { Progress } from "@material-tailwind/react";

function Dashboard() {
  return (
    <React.Fragment>
      <section class="bg-slate-100">
        <div class='w-screen h-screen grid text-white text-4xl md:grid-cols-2'>
          <div class="w-screen h-screen grid text-white text-4xl md:grid-cols-2">
            <div class="flex justify-center pt-20 ">
              <div class=" flex-col rounded-lg bg-emerald-800 w-5/6 h-4/5 flex">
                <div class=" flex-col justify-start p-6 flex">
                  <h5 class="mb-2 text-4xl font-medium text-dark-green  bg-sunglow rounded-md">
                    Dining Dollars
                  </h5>
                  <p class="mb-4 text-3xl text-neutral-200 pt-10">
                    Dining Dollars spent this month:
                  </p>
                  <p class="mb-4 text-3xl text-neutral-200 pt-10">
                    Dining Dollars spent this semester:
                  </p>
                  <p class="mb-4 text-3xl text-neutral-200 pt-10">
                    Dining Dollars spent this week:
                  </p>
                  </div>
              </div>
            </div>  
            <div class="flex justify-center pt-20 ">
              <div class=" flex-col rounded-lg bg-dark-green w-5/6 h-4/5 flex ">
                <div class="flex flex-col justify-start p-6">
                  <h5
                    class="px-4 mb-2 text-4xl font-medium text-dark-green bg-sunglow rounded-md">
                    Real Money
                  </h5>
                  <p class="mb-4 text-3xl  text-neutral-200 pt-10">
                      Amount spent this month:
                  </p>
                  <p class="mb-4 text-3xl  text-neutral-200 pt-10">
                    Amount spent this semester:
                  </p>
                  <p class="mb-4 text-3xl  text-neutral-200 pt-10">
                    Amount spent this week:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center pt-20 ">
            <div class=" flex-col rounded-lg bg-emerald-800 w-5/6 h-4/5 flex ">
              <div class="flex flex-col justify-start p-6">
                <h5 class="mb-2 text-4xl font-medium text-dark-green  bg-sunglow rounded-md ">
                  Real Money
                </h5>
                <p class="mb-4 text-3xl  text-neutral-200 pt-10">
                  Amount spent this month:
                </p>
                <p class="mb-4 text-3xl  text-neutral-200 pt-10">
                  Amount spent this semester:
                </p>
                <p class="mb-4 text-3xl  text-neutral-200 pt-10">
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
