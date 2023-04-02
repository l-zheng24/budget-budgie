import React, { useState, useEffect } from "react";

function RealMoney() {
  const [budget, setBudget] = useState("$0");
  const [displayBudget, setDisplayBudget] = useState("$0");
  const [filename, setFilename] = useState("");

  const handleBudgetChange = (event) => {
    if (event.target.value[0] == "$") {
      // localStorage.setItem("budget", event.target.value);
      // console.log("HELLLO", localStorage.getItem("budget"));
      setBudget(event.target.value);
    } else {
      // localStorage.setItem("budget", "$" + event.target.value);
      setBudget("$" + event.target.value);
    }
  };

  const handleReceipt = (event) => {
    console.log(event.target.files[0].path);
    setFilename(event.target.value);
    console.log("filename:", filename);
  };

  const changeBudget = () => {
    setDisplayBudget(budget);
    console.log("budget", budget);
    localStorage.setItem("budget", budget);
  };

  const processReceipt = () => {};

  useEffect(() => {
    if (localStorage.getItem("budget")) {
      setDisplayBudget(localStorage.getItem("budget"));
    }
  }, []);

  return (
    <section class="min-h-screen bg-slate-100">
      <div class="pl-16 grid grid-cols-2">
        <div class="h-full w-4/5 inline-block">
          <h2 class=" mb-2 text-4xl font-medium leading-tight text-primary mt-5 bg-amber-200   rounded-md w-3/5 p-2 ">
            {" "}
            Receipt History{" "}
          </h2>
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">
                  Date
                </th>
                <th scope="col" class="px-6 py-4">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1/3/23</td>
                <td class="whitespace-nowrap px-6 py-4">$10</td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">3/5/23</td>
                <td class="whitespace-nowrap px-6 py-4">$100</td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">4/3/23</td>
                <td class="whitespace-nowrap px-6 py-4">$50</td>
              </tr>
            </tbody>
          </table>
          <label for="formFile" class="mb-2 inline-block text-dark-green pt-12">
            Upload new receipt
          </label>
          <input
            class=" m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            type="file"
            id="formFile"
            onChange={handleReceipt}
          />
          <button
            type="button"
            class="m-2 inline-block bg-celadon rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={processReceipt}
          >
            Process Receipt
          </button>
          Total amount of submitted item:
        </div>

        <div class="h-full w-4/5 inline-block">
          <h2 class="mt-0 mb-2 text-4xl font-medium leading-tight text-primary mt-5 bg-amber-200 rounded-md w-2/5 p-2 ">
            {" "}
            Budget{" "}
          </h2>
          <div class=" flex-col rounded-lg shadow-lg bg-light-blue h-4/5 flex ">
            <div class="flex flex-col justify-start p-6">
              <p class="mb-4 text-3xl text-dark-green pt-3">
                Current budget (per/month):
              </p>
              <div class="w-full text-2xl bg-slate-100 text-dark-green rounded-md  p-2  h-3/4 inline">
                {localStorage.getItem("budget")
                  ? localStorage.getItem("budget")
                  : budget}
              </div>
              <p class="mb-4 text-3xl text-dark-green pt-3">
                Enter new budget:
              </p>

              <input
                type="text"
                class="block mb-2 text-2xl font-medium text-dark-green rounded-md bg-slate-100"
                id="exampleFormControlInput1"
                onChange={handleBudgetChange}
                placeholder="Enter budget here.."
              />

              <button
                type="button"
                class="inline-block bg-celadon rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={changeBudget}
              >
                Set new budget
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealMoney;
