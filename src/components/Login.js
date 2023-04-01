import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import * as React from 'react'
import { useState } from 'react'
import axios from "axios"

function Login() {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({});

  function getData(event) {
    event.preventDefault();
    axios({
      method: "POST",
      mode: 'no-cors',
      url:"http://127.0.0.1:5000",
      body: JSON.stringify(inputs)
    })
    .then((response) => response.json)
      .then((result) => {
        try {
          if (result.message === "Success") {
            alert("You have successfully logged in!");
            navigate("/dashboard")
          }
        } catch (error) {
          console.log(error)
        }
      })
  }

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  // function handleClick(event) {
  //   event.preventDefault();
  //   let options = {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers : { 
  //       'Content-Type': 'multipart/form-data'}, 
  //     // body: new FormData(),
  //     body: JSON.stringify(inputs)
  //   };

  //   fetch('http://127.0.0.1:5000', options) 
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.message === "Success") {
  //         alert("You have successfully logged in!");
  //         navigate("/dashboard")
  //       }
  //     });
  // }

  // const LoginForm = () => {
  //   const usernameRef = React.useRef();
  //   const passwordRef = React.useRef();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     const username = usernameRef.current.value
  //     const password = passwordRef.current.value

  //     alert(username + ' ' + password);
  //   }
  // };

    return (
<<<<<<< Updated upstream
        <body className="min-h-screen bg-gradient-to-b from-green-500 to-gray-300">
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
              <h2 className="text-indigo-700 font-extrabold text-center text-3xl">
              Budget Budgie
            </h2>
                <img
                  className="mx-auto h-12 w-auto"
                  src = {require('../budgiePlaceholder.jpg')} height={100} width={100}
                  alt = "Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
=======
        <body class="min-h-screen bg-slate-100">
        <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
              <div>
              <h2 class="text-dark-green font-extrabold text-center text-3xl">
              Budget Budgie
            </h2>
                <img
                  class="mx-auto h-[10rem] w-auto"
                  src = {require('../budgie.png')} height={500} width={500}
                  alt = "Your Company"
                />
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-dark-green">
                  Sign in to your W&M account
>>>>>>> Stashed changes
                </h2>
                
              </div>
              <form className="mt-8 space-y-6" encType='multipart/form-data'>
                <input type="hidden"/>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value = {inputs.username || ""}
                      required
<<<<<<< Updated upstream
                      onChange={handleChange}
                      className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Username"
=======
                      class="relative block w-full rounded-t-md border-0 py-1.5 text-dark-green ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Email address"
>>>>>>> Stashed changes
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value = {inputs.password || ""}
                      required
                      onChange={handleChange}
                      className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
<<<<<<< Updated upstream
                    className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={getData}

                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
=======
                    class="group relative flex w-full justify-center rounded-md bg-celadon px-3 py-2 text-sm font-semibold text-dark-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon class="h-5 w-5 text-dark-green" aria-hidden="true" />
>>>>>>> Stashed changes
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          </body>
    );
  }

  export default Login;