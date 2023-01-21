import React, { useState } from 'react'
import { auth } from "../serve/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Heading from '@/components/Heading'
import Navbar from '@/components/Navbar'

function make_post() {
  const [user, loading, error] = useAuthState(auth);
  if(!user) return "Not permitted";

  return (
    <>
    <Heading />
    <div className="">
        <Navbar user={user} />
        <div className="bg-[url('../../public/jumbotron-gradient.png')] bg-cover">
        <div className="flex items-center h-[calc(100vh-84px)] w-full bg-teal-lighter">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-3xl md:mx-auto">
                <h1 className="block w-full text-center mb-6 uppercase font-bold text-xl text-grey-darkest">Create Empowerment</h1>
                <form className="mb-4 md:flex md:flex-wrap md:justify-between">
                {/* <div className="flex flex-col mb-4 md:w-1/2">
                    <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" htmlFor="first_name">First Name</label>
                    <input className="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="first_name" id="first_name" />
                </div>
                <div className="flex flex-col mb-4 md:w-1/2">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" htmlFor="last_name">Last Name</label>
                    <input className="border py-2 px-3 text-grey-darkest md:ml-2" type="text" name="last_name" id="last_name" />
                </div> */}
                <div className="flex flex-col mb-4 md:w-full">
                    <label className="mb-2 uppercase font-bold text-grey-darkest" htmlFor="title">Title</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="text" name="title" id="title" />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 uppercase font-bold text-grey-darkest" htmlFor="skills-have">Own Skills</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="text" name="skills-have" id="skills-have" />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 uppercase font-bold text-grey-darkest" htmlFor="skills-wanted">Wanted Skills</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="text" name="skills-wanted" id="skills-wanted" />
                </div>
                <div className="flex flex-col mb-6 md:w-full">
                    <label className="mb-2 uppercase font-bold text-grey-darkest" htmlFor="description">Description</label>
                    <textarea className="border py-2 px-3 text-grey-darkest max-h-40" name="description" id="description" />
                </div>
                <button className="bg-red hover:bg-teal-dark text-black uppercase text-lg mx-auto p-4 rounded" type="submit">Submit Empowerment</button>
                </form>
            </div>
        </div>
        </div>


    </div>
    </>
  )
}

export default make_post