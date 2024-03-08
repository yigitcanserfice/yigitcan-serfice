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
          I am a fourth-year computer engineering student at Balıkesir
          University, primarily focused on front-end development. I have
          intermediate-level proficiency in utilizing technologies such as HTML,
          CSS, JavaScript, ReactJS, SQL Server, and Tailwind CSS. However, my
          skills in C#, Python, and Android Studio are at an entry-level.
        </p>
        <div className="flex gap-5 flex-col sm:flex-row">
          <a href="#resume" className={style.a}>
            View Education
          </a>
          <a
            href="yigitcan-serfice-cv.pdf"
            download="yigitcan-serfice-cv.pdf"
            className={style.a}
          >
            Dowland CV
          </a>
        </div>
      </div>
    </>
  );
}
