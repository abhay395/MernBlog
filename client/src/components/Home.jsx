import React, { useEffect, useState } from 'react'
import NavbarComponete from './Navbar'
import Footer from './Footer'
import axios from "axios"
import { CircularProgress } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router'

export default function Home() {
  const [data, setData] = useState(null)
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setloading(true)
    axios.get('http://localhost:8000/Blog')
      .then(response => {
        setData(response.data)
        setloading(false)
      })
      .catch(error => {
        setloading(false)
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
        {loading === true && data === null ?
          <div className='flex items-center justify-center w-full h-screen'><CircularProgress size='lg' aria-label="Loading..." /></div> :
          <section className="flex flex-col items-center w-full bg-white">
            <div className="relative items-center w-full px-5 py-0 mx-auto md:px-12 lg:px-20 max-w-7xl">

              <div className="grid grid-cols-1 gap-6 py-12 md:gap-x-24 md:grid-cols-2 lg:grid-cols-2">
                {data?.map((item, index) => {
                  if (index < 2) {
                    return <figure key={index}>
                      <img className=" w-[700px] h-[250px] sm:h-[350px] lg:w-[500px] lg:h-[300px] hover:scale-105 transition-all duration-500 cursor-pointer rounded-xl bg-gray-200 " src="https://plus.unsplash.com/premium_photo-1705091306854-9085d0074911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                      <p className="mt-5 text-sm font-medium text-blue-400 leading-6 uppercase ">
                        G-Radient is back in town
                      </p>
                      <p className="mt-3 pr-4 text-base  text-gray-600 font-bold">
                        Your design portfolio website shouldn’t just be a portfolio, it
                        should also be a sales tool.
                      </p>
                      <div className="flex gap-3 mt-5 justify-left">
                        <div className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200  focus:outline-none " >
                          <div className='rounded-full w-[25px] h-[25px] overflow-hidden'>
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" className=' w-[25px] bg-cover' alt="" />
                          </div>
                          <div> <span className='text-gray-500 ml-3 font-semibold' >Mario Sanchez</span>
                            <span className='text-gray-500 ml-3' >&#x2022;</span></div>
                          <span className='text-gray-500 ml-3'>October 21,2022</span>
                        </div>
                      </div>
                    </figure>
                  }
                })}
              </div>
              <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((item, index) => {

                  return <figure key={index}>
                    <img className="  w-[700px] h-[250px]  sm:h-[350px] lg:w-[500px] lg:h-[300px] hover:scale-105 transition-all duration-500 cursor-pointer rounded-xl bg-gray-200 " src="https://plus.unsplash.com/premium_photo-1705091306854-9085d0074911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    <p className="mt-5 text-sm font-medium text-blue-400 leading-6 uppercase ">
                      G-Radient is back in town
                    </p>
                    <p className="mt-3 text-base  text-gray-600 font-bold">
                      Your design portfolio website shouldn’t just be a portfolio, it
                      should also be a sales tool.
                    </p>
                    <div className="flex gap-3 mt-5 justify-left">
                      <div className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200  focus:outline-none " >
                        <div className='rounded-full w-[25px] h-[25px] overflow-hidden'>
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" className=' w-[25px] bg-cover' alt="" />
                        </div>
                        <div> <span className='text-gray-500 ml-3 font-semibold' >Mario Sanchez</span>
                          <span className='text-gray-500 ml-3' >&#x2022;</span></div>
                        <span className='text-gray-500 ml-3'>October 21,2022</span>
                      </div>
                    </div>
                  </figure>

                })}
              </div>
            </div>
            <button onClick={() => navigate('/allblog')} className="text-gray-700 border mb-4 border-gray-600 py-2 px-3 rounded inline-flex items-center">
              View More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </section>}
      </div>


    </>
  )
}
