"use client";
import Image from "next/image";
import Section from "./components/section";
import Introduction from "./components/introduction";
import Schedule from "./components/schedule";
import Speakers from "./components/speakers";
import Organizers from "./components/organizers";
import { useEffect } from "react";
export default function Home() {
  const topClick = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  let mybutton = null;
  useEffect(()=>{
    window.onscroll = function() {scrollFunction()};
    mybutton = document.getElementById("backToTop");
  })

  function scrollFunction() {
    const defaultVal = 500;
    if (document.body.scrollTop > defaultVal || document.documentElement.scrollTop > defaultVal) {
      if (mybutton)
        mybutton.style.display = "block";
    } else {
      if (mybutton)
        mybutton.style.display = "none";
    }
  }
  const button = "hover:cursor-pointer text-[#01305f] hover:text-white border border-[#01305f] hover:bg-[#01305f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  return (
    <main className="flex min-h-screen flex-col items-center   sm:px-24 px-4 ">
      <div  className="sm:flex flex-row grid mt-10 sm:w-[65em] w-full justify-center">
          <a className={button} href="#introduction">
              Introduction
          </a>
          <a className={button} href="#format&schedule">
              Format & Schedule
          </a>
          <a className={button} href="#speakers">
            Potential Invited Speakers
          </a>
          <a className={button} href="#organizers">
            Organizers
          </a>
      </div>
      <Section title={"Introduction"} body={<Introduction/>} className={"mt-8"} id = "introduction"/>
      <Section title={"Format & Schedule"} body={<Schedule/>} id="format&schedule"/>
      <Section title={"Potential Invited Speakers"} body={<Speakers/>} id="speakers" />
      <Section title={"Organizers"} body={<Organizers/>} id="organizers"/>

    <div className="fixed bottom-6 right-6">
        <button id="backToTop" class="bg-[#01305f] hover:bg-[#234880] text-white font-bold py-4 px-4 rounded-full shadow-lg" onClick={()=>topClick()}>
        <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.7879 60H26.2121V14.5455L5.37879 35.3788L0 30L30 0L60 30L54.6212 35.3788L33.7879 14.5455V60Z" fill="white"/>
      </svg>

      </button>
    </div>
    </main>
  );
}