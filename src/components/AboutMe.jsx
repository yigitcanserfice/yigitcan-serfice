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
          I am a Computer Engineering graduate from Balıkesir University,
          ranking second in my class with a GPA of 3.27. I have a strong passion
          for software development, focusing on front-end and full-stack web
          applications.
          Throughout my academic and project-based experiences, I have gained
          expertise in ReactJS, JavaScript, Node.js, MySQL, Python and Firebase. I
          have developed multiple real-time data-driven applications using
          WebSockets and cloud services.
          I enjoy problem-solving, optimizing algorithms, and designing scalable
          web applications. I am highly adaptable, eager to learn new
          technologies, and experienced in team collaboration using Git, Agile &
          Scrum methodologies. My goal is to continuously improve my technical
          and analytical skills while contributing to innovative projects.
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
