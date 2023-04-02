import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const { state } = useLocation();
  const { id } = state;
  // console.log(id);
  localStorage.setItem("express", id["Express"]);
  localStorage.setItem("MonthEndDining", id["MonthEndDining"]);
  localStorage.setItem("MonthEndExpress", id["MonthEndExpress"]);
  localStorage.setItem("MonthEndSwipes", id["MonthEndSwipes"]);
  localStorage.setItem("MonthStartDining", id["MonthStartDining"]);
  localStorage.setItem("MonthStartExpress", id["MonthStartExpress"]);
  localStorage.setItem("MonthStartSwipes", id["MonthStartSwipes"]);
  localStorage.setItem("SpringDiningDollars", id["Spring Dining Dollars"]);
  localStorage.setItem("Swipes", id["Swipes"]);




  return (
    <React.Fragment>
      <section class="bg-slate-100">
        <h class="pt-6 flex font-normal text-6xl justify-center text-dark-green">
          Summary of Expenses
        </h>
        <div class="w-screen h-screen grid text-white text-4xl md:grid-cols-2">
          <div class="flex justify-center pt-10 ">
            <div class=" flex-col rounded-lg  shadow-lg bg-light-blue w-5/6 h-4/5 flex">
              <div class="flex flex-col justify-start p-6">
                <h5 class="mx-2 mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                  Dining Dollars
                </h5>
                <p class="mb-4 text-3xl  text-dark-green pt-3">
                  Dining Dollars Remaining:
                </p>
                <div class="text-2xl bg-slate-100 text-dark-green rounded-md mx-2 p-2 px-4 h-1/4 inline">
                  ${ localStorage.getItem("MonthEndDining")}

                </div>
                <p class=" my-4 text-3xl  text-dark-green">
                  Dining Dollars Spent This Month:
                </p>
                <div class="text-2xl bg-slate-100 text-dark-green rounded-md mx-2 p-2 px-4 h-1/4 inline">
                  ${parseInt(localStorage.getItem("MonthStartSwipes")) -
                    parseInt(localStorage.getItem("MonthEndSwipes"))}
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center pt-10 ">
            <div class=" flex-col rounded-lg shadow-lg bg-light-blue w-5/6 h-4/5 flex ">
              <div class="flex flex-col justify-start p-6">
                <h5 class="mx-2 mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                  Personal Money
                </h5>
                <p class="px-3 mb-4 text-3xl text-dark-green pt-3">
                  Amount spent this month:
                </p>
                <div class="text-2xl bg-slate-100 text-dark-green rounded-md mx-2 p-2 px-4 h-1/4 inline">
                  Input #1
                </div>
                <p class="px-3 my-4 text-3xl text-dark-green">
                  Amount spent this semester:
                </p>
                <div class="text-2xl bg-slate-100 text-dark-green rounded-md mx-2 p-2 px-4 h-1/4 inline">
                  Input #2
                </div>
                <p class="px-3 my-4 text-3xl text-dark-green">
                  Amount spent this week:
                </p>
                <div class="text-2xl bg-slate-100 text-dark-green rounded-md mx-2 p-2 px-4 h-1/4 inline">
                  test
                </div>
                <div
                  class="mx-24 m-3 mb-4 rounded-lg bg-emerald-800 py-2 text-base text-danger-700 text-center"
                  role="alert"
                >
                  Your current budget is: {localStorage.getItem("budget")} per
                  month
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