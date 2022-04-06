import React from "react";
import { NavLink } from "react-router-dom";
// import logoOnlySvg from "../../images/Logo-stage-maker.svg";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        Page not found
      </h2>

      <NavLink to="/">
        <div className="page404">
          <span className="page404p">
            <p>4</p>
          </span>
          {/* <img src={logoOnlySvg} alt="Stage maker" width={145} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            // height="90"
            fill="none"
            viewBox="0 0 73 90"
          >
            <g clipPath="url(#clip0_304_2)">
              <g filter="url(#filter0_d_304_2)">
                <path
                  fill="#000"
                  d="M23.537.746A2 2 0 0125.095 0h22.81a2 2 0 011.558.746l23.095 28.705A2 2 0 0173 30.705v29.157a2 2 0 01-.454 1.268L49.463 89.269a2 2 0 01-1.546.731H25.083a2 2 0 01-1.546-.731L.454 61.13A2 2 0 010 59.861V30.706a2 2 0 01.442-1.254L23.537.746z"
                ></path>
                <path
                  stroke="#fff"
                  strokeWidth="4"
                  d="M25.095 2h22.81L71 30.705v29.157L47.917 88H25.083L2 59.861V30.706L25.095 2z"
                ></path>
              </g>
              <path
                fill="#fff"
                stroke="#000"
                strokeWidth="4"
                d="M27.814 7h17.372L63 29.494V45.75h-8.382c-2.61 0-4.52 2.458-3.877 4.986l1.828 7.186H41.294a4 4 0 00-3.358 1.827L25.092 79.594 10 60.891V29.494L27.814 7z"
              ></path>
              <path
                fill="#000"
                fillRule="evenodd"
                d="M11 32a1 1 0 001 1h21v30.656a1 1 0 001.287.958l3-.9a1 1 0 00.713-.958V33h23a1 1 0 001-1v-2a1 1 0 00-1-1H12a1 1 0 00-1 1v2z"
                clipRule="evenodd"
              ></path>
              <path
                // fill="#17a2b8"
                id="tsv"
                fillRule="evenodd"
                d="M11.545 33a1 1 0 01-1-1v-2a1 1 0 011-1h49a1 1 0 011 1v2a1 1 0 01-1 1h-23v24.806a4 4 0 012.718-1.065h11.013l-1.746-6.737C48.873 47.47 50.785 45 53.402 45h10.143v4H53.402l1.746 6.737c.656 2.533-1.256 5.004-3.872 5.004H40.263L27.675 79.836c-1.483 2.25-4.72 2.42-6.43.338L6 61.625l3.09-2.54 15.245 18.55L32.63 65.05a.996.996 0 01-.085-.406V33h-21z"
                clipRule="evenodd"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d_304_2"
                width="81"
                height="98"
                x="-4"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_304_2"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_304_2"
                  result="shape"
                ></feBlend>
              </filter>
              <clipPath id="clip0_304_2">
                <path fill="#fff" d="M0 0H73V90H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <span className="page404p">
            <p>4</p>
          </span>
        </div>
      </NavLink>
      <h2 className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        Not found
      </h2>
    </>
  );
}
