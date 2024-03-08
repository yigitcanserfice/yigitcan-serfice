import React from "react";

export default function MobileNav({ isOpen, toogleMenu }) {
  const style = {
    menuOpen: "opacity-100 translate-x-0",
    menuClose: "",
    li: "my-0 mx-6 ",
    a: "py-2 px-10 bg-transparent text-slate-100 hover:text-blue-300 hover:bg-slate-950 transition-all transform duration-300 font-semibold text-lg max-sm:mx-auto text-center cursor-pointer rounded ",
  };
  const menu = <div></div>;

  return (
    <>
      <div
        onClick={toogleMenu}
        className={`w-screen h-screen hidden bg-opacity-30 z-50 fixed left-0 top-0 opacity-100 shadow-md transition-all duration-300  -translate-x-['100vh'] ${
          isOpen ? "opacity-100 translate-x-0 max-md:block" : " "
        } `}
      >
        <div className=" w-7/12 h-screen bg-blue-300 p-8 ">
          <p className=" text-center text-slate-700 font-bold tracking-wider text-3xl ">
            Yiğitcan Serfiçe
          </p>
          <ul className="flex flex-col gap-8 list-none -ml-8 mt-16 text-center  ">
            <li className={style.li}>
              <a href="#home" className={style.a}>
                Home
              </a>
            </li>
            <li className={style.li}>
              <a href="#about" className={style.a}>
                About
              </a>
            </li>
            <li className={style.li}>
              <a href="#resume" className={style.a}>
                Education
              </a>
            </li>
            <li className={style.li}>
              <a href="#projects" className={style.a}>
                Projects
              </a>
            </li>
            <li className={style.li}>
              <a href="#contact" className={style.a}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
