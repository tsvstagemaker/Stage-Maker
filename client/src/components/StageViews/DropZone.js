import React, { useState } from "react";
import "./DropZone.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function DropZone() {
  const [isGrid, setGrid] = useState(false);
  const subpage = document.getElementById("subpage");
  const [bgDropZone, setBgDropZone] = useState("#ffffff");

  const addGrid = () => {
    setGrid(!isGrid);
  };

  const changebgDropzone = () => {
    document.getElementById("bgDropzone").click();
  };

  const HandleBgDropZone = (e) => {
    setBgDropZone(e.target.value);
    // console.log(bgDropZone);
  };

  return (
    <TransformWrapper
      initialScale={1}
      // initialPositionX={0}
      // initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <div className="tools mb-2">
            <button
              className="btn btn-sm btn-dark mx-1"
              onClick={() => zoomIn()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-zoom-in"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                ></path>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1 6.538 6.538 0 01-1.398 1.4z"></path>
                <path
                  fillRule="evenodd"
                  d="M6.5 3a.5.5 0 01.5.5V6h2.5a.5.5 0 010 1H7v2.5a.5.5 0 01-1 0V7H3.5a.5.5 0 010-1H6V3.5a.5.5 0 01.5-.5z"
                ></path>
              </svg>
            </button>
            <button
              className="btn btn-sm btn-dark mx-1"
              onClick={() => zoomOut()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-zoom-out"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                ></path>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1 6.538 6.538 0 01-1.398 1.4z"></path>
                <path
                  fillRule="evenodd"
                  d="M3 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
                ></path>
              </svg>
            </button>
            <button
              className="btn btn-sm btn-dark mx-1"
              onClick={() => resetTransform()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M13.854 2.146a.5.5 0 010 .708l-11 11a.5.5 0 01-.708-.708l11-11a.5.5 0 01.708 0z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M2.146 2.146a.5.5 0 000 .708l11 11a.5.5 0 00.708-.708l-11-11a.5.5 0 00-.708 0z"
                ></path>
              </svg>
            </button>

            <button
              className="btn btn-sm btn-dark mx-1"
              onClick={() => addGrid()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-grid-3x3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 00.5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 00-.5-.5H11v4zm-1 0V1H6v4h4z"></path>
              </svg>
            </button>
            <button
              className="btn btn-sm btn-dark mx-1"
              onClick={() => changebgDropzone()}
              id="inputColorBtn"
            >
              <input
                type="color"
                id="bgDropzone"
                name="bgDropzone"
                style={{ display: "none" }}
                onChange={HandleBgDropZone}
                value={bgDropZone}
                // value="#ff0000"
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 252 242"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_704_68)">
                  <path
                    d="M5.27734 236.399L239.082 8.95429"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M49.438 234.101L239.082 49.1013"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.88721 195.388L197.532 10.3882"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M96.6782 230.838L243.155 85.7764"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.60059 154.425L154.078 9.36299"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M147.754 235.757L245.514 137.707"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.60059 104.367L105.361 6.31699"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M194.562 233.249L243.155 184.859"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.88721 55.342L56.4805 6.95183"
                    stroke="white"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_704_68">
                    <rect width="252" height="242" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <TransformComponent>
            <div className="page">
              <div
                id="subpage"
                className={isGrid ? "grid-show subpage" : "subpage"}
                // style={{ backGround: { bgDropZone } }}
                style={{ backgroundColor: `${bgDropZone}` }}
              >
                <p className="pub">TSV STAGE MAKER</p>
              </div>
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}
