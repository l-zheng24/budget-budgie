import React from "react";
import Navigation from "react-sticky-nav";

export function NavBar() {
  return (
    <Navigation>
      <ul className="unorderList text-left px-[6rem] bg-zinc-200 text-xl font-medium">
        <a className="links text-slate-900" href="/dashboard">
          <li className="inline-flex flex-row m-[0.7rem] mx-4 hover:underline hover:scale-105 delay-50 decoration-emerald-800 transition">
            {" "}
            Dashboard{" "}
          </li>
        </a>
        <a className="links text-slate-900" href="/mealplan">
        
          <li className="inline-flex flex-row m-[0.7rem] mx-6 hover:underline hover:scale-105 delay-50 decoration-emerald-800 transition">
            {" "}
            Meal Plan{" "}
          </li>
        </a>
        <a className="links text-slate-900" href="/realmoney">
          <li className="inline-flex flex-row m-[0.7rem] mx-6 hover:underline hover:scale-105 delay-50 decoration-emerald-800 transition">
            {" "}
            Money/Receipts{" "}
          </li>
        </a>
        <a className="links text-slate-900" href="/">
          <li className="float-right inline-flex flex-row m-[0.7rem] mx-4 hover:underline hover:scale-105 delay-50 decoration-emerald-800 transition"> 
          {" "}
          Logout {" "}
          </li>
        </a>
      </ul>
    </Navigation>
  );
}
