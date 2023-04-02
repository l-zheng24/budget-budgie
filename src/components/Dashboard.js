import React from "react";

function Dashboard() {
  return (
    <React.Fragment>
      <section className="bg-slate-100">
        <div className='w-screen h-screen grid text-white text-4xl md:grid-cols-2'>
          <div className="w-screen h-screen grid text-white text-4xl md:grid-cols-2">
            <div className="flex justify-center pt-20 ">
              <div className=" flex-col rounded-lg bg-emerald-800 w-5/6 h-4/5 flex">
                <div className=" flex-col justify-start p-6 flex">
                  <h5 className="mb-2 text-4xl font-medium text-dark-green  bg-sunglow rounded-md">
                    Dining Dollars
                  </h5>
                  <p className="mb-4 text-3xl text-neutral-200 pt-10">
                    Dining Dollars spent this month:
                  </p>
                  <p className="mb-4 text-3xl text-neutral-200 pt-10">
                    Dining Dollars spent this semester:
                  </p>
                  <p className="mb-4 text-3xl text-neutral-200 pt-10">
                    Dining Dollars spent this week:
                  </p>
                  </div>
              </div>
            </div>  
            <div className="flex justify-center pt-20 ">
              <div className=" flex-col rounded-lg bg-dark-green w-5/6 h-4/5 flex ">
                <div className="flex flex-col justify-start p-6">
                  <h5
                    className="px-4 mb-2 text-4xl font-medium text-dark-green bg-sunglow rounded-md">
                    Real Money
                  </h5>
                  <p className="mb-4 text-3xl  text-neutral-200 pt-10">
                      Amount spent this month:
                  </p>
                  <p className="mb-4 text-3xl  text-neutral-200 pt-10">
                    Amount spent this semester:
                  </p>
                  <p className="mb-4 text-3xl  text-neutral-200 pt-10">
                    Amount spent this week:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-20 ">
            <div className=" flex-col rounded-lg bg-emerald-800 w-5/6 h-4/5 flex ">
              <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-4xl font-medium text-dark-green  bg-sunglow rounded-md ">
                  Real Money
                </h5>
                <p className="mb-4 text-3xl  text-neutral-200 pt-10">
                  Amount spent this month:
                </p>
                <p className="mb-4 text-3xl  text-neutral-200 pt-10">
                  Amount spent this semester:
                </p>
                <p className="mb-4 text-3xl  text-neutral-200 pt-10">
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
