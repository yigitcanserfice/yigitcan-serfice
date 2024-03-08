import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const style = {
    li: "my-0 mx-6 max-md:hidden",
    a: "text-lg font-semibold text-white relative cursor-pointer before:content[''] before:w-8 before:h-1 before:bg-blue-300 before:rounded-lg before:absolute before:-bottom-3 before:opacity-0 before:-translate-x-6 before:transition-all before:duration-300 hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100",
  };
  return (
    <div>
      <MobileNav isOpen={openMenu} toogleMenu={toogleMenu}></MobileNav>
      <nav className=" bg-opacity-10 py-2 top-0 z-30 backdrop-blur-2xl max-xl:py-0 max-xl:px-8 border-b fixed w-full ">
        <div className=" max-w-7xl flex items-center justify-between py-4 my-0 mx-auto ">
          <p
            className={` font-bold text-3xl  tracking-wider max-[435px]:text-base ${
              openMenu ? " md:text-slate-950" : " "
            } `}
          >
            Yiğitcan Serfiçe
          </p>
          <ul className="flex items-center gap-2 list-none ">
            <li className={style.li}>
              <a className={style.a} href="#home">
                Home
              </a>
            </li>
            <li className={style.li}>
              <a className={style.a} href="#about">
                About
              </a>
            </li>
            <li className={style.li}>
              <a className={style.a} href="#resume">
                Education
              </a>
            </li>
            <li className={style.li}>
              <a className={style.a} href="#projects">
                Projects
              </a>
            </li>
            <li className={style.li}>
              <a className={style.a} href="#contact">
                Contact
              </a>
            </li>
            <div className="flex gap-5 ml-8 max-md:ml-0">
              <a href="https://github.com/yigitcanserfice" target="_blank">
                <FaGithub className=" text-2xl max-md:text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/yi%C4%9Fitcan-serfi%C3%A7e-30b8b6200/"
                target="_blank"
              >
                <FaLinkedin className=" text-2xl max-md:text-xl" />
              </a>
              <a
                href="mailto:yigit_serfice@hotmail.com?body=My mail adress"
                target="_blank"
              >
                <CiMail className=" text-2xl max-md:text-xl" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5LA9Vsh_aNd1Sl_J5OlRFg"
                target="_blank"
              >
                <FaYoutube className=" text-2xl max-md:text-xl" />
              </a>
            </div>
          </ul>

          <button onClick={toogleMenu}>
            <RxHamburgerMenu className=" w-8 h-8 text-2xl p-1 items-center justify-center border-none  rounded-md text-white bg-blue-300 cursor-pointer transition-all duration-400 hidden hover:text-blue-500 hover:bg-gray-900 hover:border hover:border-solid hover:border-blue-500 max-md:block" />
          </button>
        </div>
      </nav>
    </div>
  );
}
