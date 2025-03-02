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
        <a className={button} href="/workshop">
          Workshop
        </a>
        <a className={button} href="/grandchallenge">
          Grand Challenge
        </a>
        <a className={button} href="/archive/2024">
          ACCV 2024 (Done)
        </a>
      </div>

    </main>
  );
}
