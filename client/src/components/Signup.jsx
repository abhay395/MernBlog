import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { FaGithub, FaGoogle } from 'react-icons/fa'
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const loginwithgoogle = () => {
    window.open("http://localhost:8080/auth/google/callback", "_self");
  }
  const loginwithgithub = () => {
    window.open("http://localhost:8080/auth/github/callback", "_self");
  }
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', data);

      if (response) {
        navigate('/')
      }
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }


  }
  return (
    <>
      {/* https://play.tailwindcss.com/MIwj5Sp9pw */}
      <form onSubmit={handleSubmit(onSubmit)} className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            {/* <h2 className="text-2xl font-semibold text-gray-700 text-center">
         
          </h2> */}
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div
            className="flex items-center flex-wrap justify-center mt-4 gap-2 sm:flex-nowrap text-white rounded-lg"
          >
            <button  onClick={() => loginwithgoogle()} class="justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[250px] sm:w-auto h-10 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <FaGoogle className='text-xl mr-2' /> 
              Signup with Google
            </button>
            <button onClick={() => loginwithgithub()} class="justify-center whitespace-nowrap ring-offset-background w-[250px] sm:w-auto transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <FaGithub  className='text-xl mr-2' />
              Signup with Github
            </button>
          </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <p className="text-xs text-center text-gray-500 uppercase">
                or login with email
              </p>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password", { required: true })}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Sign up
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <Link to='/login' className="text-xs text-gray-500 uppercase">
                or Login
              </Link>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </form>
    </>



  )
}
