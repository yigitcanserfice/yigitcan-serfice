import React from "react";

export default function Contact() {
  const style = {
    a: "py-2 px-10 bg-transparent  border-blue-300 text-xl  text-blue-300 hover:text-blue-700  transition-all transform duration-300  font-semibold text-lg text-center mt-8",
  };
  return (
    <>
      <div
        id="contact"
        className="pt-12 max-w-screen-md min-h-screen flex flex-col gap-4 mx-auto mt-32 items-center justify-center"
      >
        <h1 className=" text-5xl font-bold mx-auto text-center">
          You can contact with me from:
        </h1>

        <a href="mailto:yigit_serfice@hotmail.com" className={style.a}>
          yigit_serfice@hotmail.com
        </a>
      </div>
    </>
  );
}
