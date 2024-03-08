import React from "react";
import Project from "./Project";
//import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-screen-xl min-h-screen mx-auto flex flex-col gap-4  text-pretty items-center justify-center sm:flex-row"
    >
      <div className=" p-8 rounded-md shadow-md text-center justify-center">
        <h2 className=" text-blue-300 text-5xl font-bold mb-10">Projects</h2>
        <ul className=" list-none p-0 m-0 flex gap-8 flex-wrap justify-center">
          {CORE_CONCEPTS.map((conceptItem) => (
            <Project key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </div>
    </section>
  );
}
