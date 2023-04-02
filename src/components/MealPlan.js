import React, { useState } from "react";

function MealPlan() {
  return (
    <React.Fragment>
      <section>
        <div class='w-screen h-screen grid text-white text-4xl md:grid-cols-3'>
          <div class="flex justify-center pt-20 ">
            <div
              class=" flex-col rounded-lg bg-white shadow-lg dark:bg-dark-green w-5/6 h-4/5 flex">
              <div class=" flex-col justify-start p-6 flex">
                <h5
                  class="mb-2 text-4xl font-medium text-dark-green  bg-sunglow rounded-md">
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
                  class="mb-2 text-4xl font-medium text-dark-green  bg-sunglow rounded-md">
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
          <div class="flex justify-center pt-20 ">
            <div
              class=" flex-col rounded-lg bg-white shadow-lg dark:bg-dark-green w-5/6 h-4/5 flex ">
              <div class="flex flex-col justify-start p-6">
                <h5
                  class="mb-2 text-4xl font-medium text-dark-green  bg-sunglow rounded-md">
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

export default MealPlan;
