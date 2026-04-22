"use client";
import Section from "./components/section";
import Organizers from "./components/organizers";
import { useEffect } from "react";
import Workshop from "./components/workshop";
import Background from "./components/background";
import TaskDetails from "./components/taskdetails";
import ImportantDates from "./components/importantdates";
import Evaluation from "./components/evaluation";
import Rules from "./components/rules";

export default function Home() {
  const topClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      if (mybutton) mybutton.style.display = "block";
    } else {
      if (mybutton) mybutton.style.display = "none";
    }
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/workshop-archive", label: "Workshop Archive" },
    { href: "/challenge-archive", label: "Challenge Archive" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-[65em] mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}
              className="text-[#01305f] hover:text-white border border-[#01305f] hover:bg-[#01305f] transition-all duration-200 font-medium rounded-lg text-sm px-5 py-2 text-center">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Announcement banner */}
      <div className="w-full bg-gradient-to-r from-green-600 to-emerald-500 shadow-md">
        <div className="max-w-[65em] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🎉</span>
            <div>
              <p className="text-white font-bold text-lg leading-tight">The competition is now live!</p>
              <p className="text-green-100 text-sm mt-0.5">The LAVA Challenge 2026 Kaggle page is officially open. Join now and compete!</p>
            </div>
          </div>
          <a href="https://www.kaggle.com/competitions/lava-challenge-2026" target="_blank" rel="noopener noreferrer"
            className="shrink-0 bg-white text-green-700 hover:bg-green-50 font-bold text-sm px-6 py-2.5 rounded-full shadow transition-all duration-200 hover:scale-105 whitespace-nowrap">
            Join on Kaggle →
          </a>
        </div>
      </div>

      {/* Page content */}
      <div className="w-full sm:px-24 px-4 flex flex-col items-center mt-10">
        <Section title="Overview" body={<Workshop />} id="overview" />
        <Section title="Task Details" body={<TaskDetails />} id="taskdetails" />
        <Section title="Evaluation Criterion" body={<Evaluation />} id="evaluation" />
        <Section title="Rules" body={<Rules />} id="rules" />
        <Section title="Important Dates" body={<ImportantDates />} id="importantdates" />
        <Section title="Presentation Policy" body={
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold text-amber-800 mb-2">⚠️ On-site Attendance Required</p>
            <p>ACM Multimedia 2026 is an on-site event only. This means that all papers and contributions must be presented by a physical person on-site; remote presentations will not be hosted or allowed. Papers and contributions not presented on-site will be considered a no-show and removed from the proceedings of the conference. More details will be provided to handle unfortunate situations in which none of the authors would be able to attend the conference physically.</p>
          </div>
        } id="policy" />
        <Section title="Organizers" body={<Organizers />} id="organizers" />
      </div>

      {/* Back to top */}
      <div className="fixed bottom-6 right-6">
        <button id="backToTop"
          className="bg-[#01305f] hover:bg-[#1a7fd4] text-white font-bold py-4 px-4 rounded-full shadow-xl transition-all duration-200 hover:scale-110"
          onClick={() => topClick()}>
          <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.7879 60H26.2121V14.5455L5.37879 35.3788L0 30L30 0L60 30L54.6212 35.3788L33.7879 14.5455V60Z" fill="white" />
          </svg>
        </button>
      </div>
    </main>
  );
}
