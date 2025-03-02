"use client";
import Image from "next/image";
import Section from "./components/section";
import Introduction from "./components/introduction";
import Schedule from "./components/schedule";
import Speakers from "./components/speakers";
import Organizers from "./components/organizers";
import { useEffect } from "react";
import Workshop from "./components/workshop";
import CallForPapers from "./components/callforpapers";
import Challenge from "./components/challenge";
import ImportantDates from "./components/importantdates";
import TechnicalSupporters from "./components/technical-supporters";
import AcceptedPapers from "./components/acceptedpapers";
export default function Home() {
  const topClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  let mybutton = null;
  useEffect(() => {
    window.onscroll = function () { scrollFunction() };
    mybutton = document.getElementById("backToTop");
    mybutton.style.display = "none";
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
  const button = "hover:cursor-pointer text-[#01305f] hover:text-white border border-[#01305f] hover:bg-[#01305f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-2"
  return (
    <main className="flex min-h-screen flex-col items-center   sm:px-24 px-4 ">
      <div className="sm:flex flex-row grid mt-10 sm:w-[65em] w-full justify-center">
        <a className={button} href="#workshop">
          Workshop
        </a>
        <a className={button} href="#acceptedpapers">
          Accepted Papers
        </a>
        <a className={button} href="#callforpapers">
          Call for Papers
        </a>
        <a className={button} href="#challenge">
          Challenge
        </a>
        <a className={button} href="#schedule">
          Schedule
        </a>
        <a className={button} href="#speakers">
          Speakers
        </a>
        <a className={button} href="#organizers">
          Organizers
        </a>
      </div>
      <Section title={""} body={<Workshop />} className={"mt-8"} id="workshop" />
      <Section title={"Accepted Papers"} body={<AcceptedPapers />} id="acceptedpapers" />
      <Section title={"Call for Papers"} body={<CallForPapers />} id="callforpapers" />
      <Section title={"LAVA Challenge"} body={<Challenge />} id="challenge" />
      <Section title={"Important Dates"} body={<ImportantDates />} id="importantdates" />
      <Section title={"Workshop Schedule"} body={<Schedule />} id="schedule" />
      <Section title={"Speakers"} body={<Speakers />} id="speakers" />
      <Section title={"Organizers"} body={<Organizers />} id="organizers" />
      <Section title={"Technical Supporters"} body={<TechnicalSupporters />} id="TechnicalSupporters" />
      <Section title={"Workshop Sponsors"}
        body={
          <div className="flex flex-row w-full justify-center items-center ">
            <div className="flex flex-col justify-center ">
              <Image src="/BeyondAI.jpg" alt="BeyondAI" width={200} height={200} className="sm:w-[18m] w-[12em]" />
            </div>
          </div>

        }
        id="sponsors" />
      <div className="fixed bottom-6 right-6">
        <button id="backToTop" className="bg-[#01305f] hover:bg-[#234880] text-white font-bold py-4 px-4 rounded-full shadow-lg" onClick={() => topClick()}>
          <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.7879 60H26.2121V14.5455L5.37879 35.3788L0 30L30 0L60 30L54.6212 35.3788L33.7879 14.5455V60Z" fill="white" />
          </svg>

        </button>
      </div>
    </main>
  );
}
