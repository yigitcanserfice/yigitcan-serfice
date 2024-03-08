import React from "react";
import pp from "../assets/ppYS.jpeg";

export default function Home() {
  const style = {
    a: "py-2 px-10 bg-transparent border border-blue-300 text-blue-300 hover:text-slate-100 hover:bg-blue-300 transition-all transform duration-300 font-semibold text-lg max-sm:mx-auto text-center",
  };
  return (
    <>
      <div
        id="home"
        className=" max-w-screen-xl min-h-screen mx-auto flex flex-col gap-4 text-pretty items-center justify-center sm:flex-row "
      >
        <div className=" w-60">
          <img src={pp} alt="ProfilPhoto" className="rounded-full " />
        </div>
        <div className="p-4 max-sm:flex max-sm:flex-col">
          <p className=" text-3xl font-bold text-slate-100 mb-8 max-sm:font-thin max-sm:text-center tracking-wider">
            Hi my name is{" "}
            <span className="text-blue-300 font-semibold  max-sm:font-thin ">
              Yiğitcan Serfiçe
            </span>
            <br></br> I'm a Junior Software Engineer
          </p>
          <a href="#about" className={style.a}>
            Know More
          </a>
        </div>
      </div>
    </>
  );
}
