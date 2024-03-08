import React, { useCallback, useState } from "react";

export default function Project({
  image,
  title,
  description,
  liveLink,
  sourceLink,
}) {
  const style = {
    a: " py-2 px-5 bg-transparent border border-blue-300  text-blue-300 hover:text-slate-100 hover:bg-slate-950  transition-all transform duration-300  font-semibold text-lg text-center ",
    b: " bottom-0 py-2 px-5 bg-transparent border border-blue-300  text-blue-300 hover:text-slate-100 hover:bg-slate-950  transition-all transform duration-300  font-semibold text-lg text-center hidden",
  };

  // Kontrol eklendi
  const linkStyle = liveLink ? style.a : style.b;
  const sourceStyle = sourceLink ? style.a : style.b;

  return (
    <li className=" w-96 text-center bg-slate-100 flex flex-col items-center  p-5 rounded shadow-lg gap-4 ">
      <img
        src={image}
        alt={title}
        className=" h-52 w-72 object-contain hover:w-100 "
      />
      <h3 className=" my-2 mx-0 text-slate-950 font-semibold text-xl">
        {title}
      </h3>
      <p className=" text-slate-600 ">{description}</p>

      <div className="flex gap-5">
        <a target="_blank" href={sourceLink} className={sourceStyle}>
          Source Code
        </a>

        <a target="_blank" href={liveLink} className={linkStyle}>
          Live Site
        </a>
      </div>
    </li>
  );
}
