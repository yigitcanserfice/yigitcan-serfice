import React from "react";

export default function Resume() {
  const style = {
    a: "py-2 px-10 bg-transparent border border-blue-300  text-blue-300 hover:text-slate-100 hover:bg-blue-300  transition-all transform duration-300  font-semibold text-lg text-center",
  };
  return (
    <>
      <div
        id="resume"
        className="pt-12 max-w-screen-md min-h-screen flex flex-col gap-2 mx-auto items-center justify-center "
      >
        <h1 className="text-blue-300 text-5xl font-bold">EDUCATION</h1>

        <div className="flex gap-5 flex-col text-gray-400 font-semibold text-base mt-6">
          <div className="flex gap-5">
            <a
              target="_blank"
              href="https://www.balikesir.edu.tr/"
              className=" hover:text-blue-300"
            >
              Balıkesir University
            </a>
            <p>2020 - 2024</p>
          </div>
          <div className="flex gap-5">
            <p className=" mx-auto">3.28 / 4 GPA</p>
            <p className=" mx-auto">Second Highest Ranked</p>
          </div>
        </div>
        <p className="p-5 text-xl font-light text-slate-100">
          Balıkesir University
            B.Sc. in Computer Engineering (2019 – 2023)

            GPA: 3.27 / 4.00, Ranked 2nd in class

            Relevant Coursework: Web Programming, Data Structures, Databases, Software Engineering
        </p>
        <a href="#projects" className={style.a}>
          View Projects
        </a>
      </div>
    </>
  );
}
