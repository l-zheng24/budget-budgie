import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function MealPlan() {
  function money_round(num) {
    return Math.ceil(num * 100) / 100;
  }
  const [dollars, setDollars] = useState(
    localStorage.getItem("SpringDiningDollars")
  );
  const [dollarsPerMonth, setDollarsPerMonth] = useState("$0");
  useEffect(() => {
    const date1 = new Date();
    // Sun Dec 17 1995 03:24:00 GMT...

    const date2 = new Date("May 16, 2023 00:00:00");
    // Sun Dec 17 1995 03:24:00 GMT...

    setDollarsPerMonth(
      "$" +
        money_round(
          dollars /
            Math.floor(Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)) / 7)
        )
    );
  }, []);
  return (
    <React.Fragment>
      <section class="bg-slate-100">
        <div class="w-screen h-screen grid text-white text-4xl md:grid-cols-3">
          <div class="flex justify-center pt-20 ">
            <div class=" flex-col rounded-lg  shadow-lg bg-light-blue w-5/6 h-4/5 flex">
              <div class=" flex-col justify-start p-6 flex">
                <h5 class="mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                  Meal Swipes
                </h5>
                <p class="m-4 text-3xl  text-dark-green">Remaining Swipes:</p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  {localStorage.getItem("Swipes")}
                </div>
                <p class="m-4 text-3xl  text-dark-green">
                  Meals swipes used this month:
                </p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  {parseInt(localStorage.getItem("MonthStartSwipes")) -
                    parseInt(localStorage.getItem("MonthEndSwipes"))}
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center pt-20 ">
            <div class=" flex-col rounded-lg  shadow-lg bg-light-blue w-5/6 h-4/5 flex">
              <div class=" flex-col justify-start p-6 flex">
                <h5 class="mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                  Dining Dollars
                </h5>
                <p class="m-4 text-3xl  text-dark-green">Remaining Dollars:</p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  ${dollars}
                </div>
              </div>
              <div
                class="mx-24 m-3 mb-4 rounded-lg bg-emerald-800 py-2 text-base text-danger-700 text-center"
                role="alert"
              >
                You can spend {dollarsPerMonth} per week for the rest of the
                semester
              </div>
            </div>
          </div>
          <div class="flex justify-center pt-20 ">
            <div class=" flex-col rounded-lg  shadow-lg bg-light-blue w-5/6 h-4/5 flex">
              <div class=" flex-col justify-start p-6 flex">
                <h5 class="mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                  Express Dollars
                </h5>
                <p class="m-4 text-3xl  text-dark-green">Current Balance:</p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  ${localStorage.getItem("express")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default MealPlan;
