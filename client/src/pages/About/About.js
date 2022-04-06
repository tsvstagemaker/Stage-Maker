import React, { useEffect, useState } from "react";
import "./About.css";

export default function About() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const aboutDiv = document.querySelector(".about");
  // const BG = document.querySelector(".bg");

  // console.log(position.x, position.y);
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  // const addEventListeners = () => {
  //   document.addEventListener("mousemove", onMouseMove);
  // };

  // const removeEventListeners = () => {
  //   document.removeEventListener("mousemove", onMouseMove);
  // };

  // const onMouseMove = (e) => {
  //   setPosition({ x: e.clientX, y: e.clientY });
  // };

  return (
    <div className="about">
      <div className="hex"></div>
      <div className="text-about container">
        <h1 className="About-h1">TSV STAGE MAKER</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem amet
          itaque ad tempora fugit nulla illo ullam molestiae excepturi, ab harum
          culpa recusandae? Facere nihil excepturi quas quo! Dolorem quae
          consequatur incidunt at expedita iste, nisi dolorum nihil, voluptates
          aliquid similique eum mollitia? Voluptates non veniam quas
          voluptatibus, aliquam temporibus ut quis consectetur odio blanditiis
          dignissimos qui unde consequuntur asperiores nam dolore odit et velit
          libero ab. Harum nisi, pariatur laudantium quae facere dolor totam
          libero cupiditate a, beatae in minus blanditiis dolore eaque tempora
          ad quaerat? Veritatis atque corporis, mollitia neque optio dignissimos
          natus voluptatem, alias facilis, cum iusto! jrhgo rjfnrohf lfnrofnflf
          lfkrfnlrkfjirf flkrfnnlfn ffnlkf ,k ,kf fmfjpfojemfne:fnke
        </p>
      </div>

      <div
        className="bg"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </div>
  );
}
