import React from "react";

export default function AboutMe() {
  const style = {
    a: "py-2 px-10 bg-transparent border border-blue-300  text-blue-300 hover:text-slate-100 hover:bg-blue-300  transition-all transform duration-300  font-semibold text-lg text-center",
  };
  return (
    <>
      <div
        id="about"
        className="pt-12 max-w-screen-md min-h-screen flex flex-col gap-4 mx-auto mt-32 items-center justify-center"
      >
        <h1 className=" text-5xl font-bold mx-auto">
          About <span className="text-blue-300">Me</span>
        </h1>
        <p className="p-5 text-xl font-light text-slate-100">
          I am a fourth-year computer engineeringstudent at Balıkesir
          University, where Icompleted my coursework as thesecond-highest ranked
          student in myclass. Although I have not yet officiallygraduated due to
          incomplete internships,my primary focus is on front-enddevelopment. I
          have intermediate-levelproficiency in utilizing technologies suchas
          HTML, CSS, JavaScript, ReactJS, SQLServer, and Tailwind CSS.
          Additionally, Ihave entry-level skills in C#, Python, andAndroid
          Studio.
        </p>
        <div className="flex gap-5 flex-col sm:flex-row">
          <a href="#resume" className={style.a}>
            View Education
          </a>
          <a
            href="cv_yigitcan_serfice.pdf"
            download="cv_yigitcan_serfice.pdf"
            className={style.a}
          >
            Dowland CV
          </a>
        </div>
      </div>
    </>
  );
}
