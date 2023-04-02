import React from "react";

function Dashboard() {
  return (
    <React.Fragment>
      <section class="bg-slate-100">
        <h class="pt-5 flex font-normal text-6xl justify-center text-dark-green">
          Summary of Expenses
        </h>
        <div class="w-screen h-screen grid text-white text-4xl md:grid-cols-2">
          <div class="flex justify-center pt-10 ">
            <div class=" flex-col rounded-lg  shadow-lg bg-light-blue w-5/6 h-4/5 flex">
              <div class=" flex-col justify-start p-4 flex">
                <h5 class="mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                  Dining Dollars
                </h5>
                <p class="mb-4 text-3xl  text-dark-green pt-3">
                  Dining Dollars spent this month:
                </p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  test
                </div>
                <p class="my-4 text-3xl  text-dark-green">
                  Dining Dollars spent this semester:
                </p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  test
                </div>
                <p class=" my-4 text-3xl  text-dark-green">
                  Dining Dollars spent this week:
                </p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  test
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center pt-10 ">
            <div class=" flex-col rounded-lg shadow-lg bg-light-blue w-5/6 h-4/5 flex ">
              <div class="flex flex-col justify-start p-6">
                <h5 class="mb-2 text-4xl font-medium text-dark-green  bg-amber-200 p-3 rounded-md">
                  Personal Money
                </h5>
                <p class="mb-4 text-3xl text-dark-green pt-3">
                  Amount spent this month:
                </p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  test
                </div>
                <p class="my-4 text-3xl text-dark-green">
                  Amount spent this semester:
                </p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  test
                </div>
                <p class="my-4 text-3xl text-dark-green">
                  Amount spent this week:
                </p>
                <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-1/4 inline">
                  test
                </div>
                <div
                  class="m-3 mb-4 rounded-lg bg-emerald-800 py-2 px-4 text-base text-danger-700 text-center"
                  role="alert"
                >
                  Your current budget is: {localStorage.getItem("budget")}
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