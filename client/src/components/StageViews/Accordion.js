import React, { useState } from "react";
// import Moveable from "react-moveable";
import "./Accordion.css";
// import ipscPopper from "../../assets/ipsc-popper.svg";
// import ipscProps from "../../assets/ipsc-props.svg";
// import ipscTarget from "../../assets/ipsc-target.svg";
import StageImageSteel from "./StageImage/StageImageSteel";
import StageImagePappers from "./StageImage/StageImagePappers";
import StageImageMeca from "./StageImage/StageImageMeca";

export default function Accordion() {
  // const { parts, addPart } = useParts();
  // const [targets, setTargets] = useState([]);

  // function useParts() {
  //   const [parts, setParts] = useState([]);
  //   function addPart(part) {
  //     setParts([...parts, part]);
  //   }
  //   return {
  //     parts,
  //     addPart
  //   };
  // }

  // add Rect
  // const onAddRect = () => {
  //   const newTarget = { ...RectTemplate };
  //   setTargets([...targets, newTarget]);
  // };

  // const RectTemplate = {
  //   classSelector: "targets",
  //   name: "Target",
  //   width: 100,
  //   height: 100,
  //   top: 100,
  //   left: 100,
  //   rotate: 0,
  //   backgroundColor:
  //     "repeating-linear-gradient(45deg,#95d46f,#95d46f 10px,#d4d1d1 10px,#d4d1d1 20px)",
  //   fontColor: "white"
  // };

  return (
    <div className="accordion-stage-props">
      {/* accordion */}
      <div
        className="accordion accordion-flush"
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button btn-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 252 243"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-accordion"
              >
                <path
                  d="M33.5 82.476L95.3648 4.10815H157.635L219.5 82.476V162.266L157.65 239.108H95.3502L33.5 162.265V82.476Z"
                  stroke="currentColor"
                  strokeWidth="10"
                />
                <path
                  d="M65.5 83.4792L95.5667 7.10815H155.433L185.5 83.4792V142.016L145.198 188.108H104.287L65.5 142.043V83.4792Z"
                  stroke="currentColor"
                  strokeWidth="10"
                />
                <path
                  d="M97.5 81.4758L117.152 16.1082H135.328L156.5 81.5028V117.127L135.858 146.108H116.637L97.5 117.174V81.4758Z"
                  stroke="currentColor"
                  strokeWidth="10"
                />
                <path
                  d="M196 89.6082V77.6082H199.903C201.105 77.6082 202.17 77.8388 203.093 78.3004C204.018 78.7619 204.731 79.4186 205.231 80.2702C205.739 81.1219 205.994 82.0999 206 83.2042V83.9707C206 85.1027 205.747 86.0945 205.241 86.9461C204.74 87.7978 204.022 88.4516 203.084 88.9077C202.153 89.3636 201.068 89.5971 199.828 89.6082H196ZM197.822 78.9103V88.3143H199.741C201.148 88.3143 202.239 87.935 203.017 87.1768C203.804 86.4185 204.195 85.3388 204.195 83.9379V83.2372C204.195 81.8747 203.826 80.8169 203.084 80.0641C202.35 79.3058 201.306 78.9214 199.951 78.9103H197.822Z"
                  fill="currentColor"
                />
                <path
                  d="M48 89.6082V77.6082H51.9032C53.1048 77.6082 54.1703 77.8388 55.0931 78.3004C56.0182 78.7619 56.7314 79.4186 57.2306 80.2702C57.7385 81.1219 57.9935 82.0999 58 83.2042V83.9707C58 85.1027 57.7471 86.0945 57.2414 86.9461C56.74 87.7978 56.0225 88.4516 55.0845 88.9077C54.153 89.3636 53.0681 89.5971 51.8276 89.6082H48ZM49.8219 78.9103V88.3143H51.7411C53.1481 88.3143 54.2395 87.935 55.0175 87.1768C55.8042 86.4185 56.1954 85.3388 56.1954 83.9379V83.2372C56.1954 81.8747 55.8258 80.8169 55.0845 80.0641C54.3497 79.3058 53.3058 78.9214 51.9507 78.9103H49.8219Z"
                  fill="currentColor"
                />
                <path
                  d="M88 85.7418C87.8396 86.9772 87.3321 87.9316 86.4754 88.6055C85.6248 89.2739 84.4921 89.6082 83.0751 89.6082C81.5424 89.6082 80.3102 89.1135 79.3825 88.1242C78.4608 87.1349 78 85.8113 78 84.1536V83.0306C78 81.9449 78.2132 80.9905 78.6415 80.1669C79.0759 79.3435 79.689 78.7125 80.4807 78.2738C81.2704 77.8301 82.186 77.6082 83.2274 77.6082C84.6078 77.6082 85.7142 77.9557 86.5465 78.651C87.3788 79.3407 87.864 80.298 88 81.5226H86.2785C86.1303 80.592 85.8055 79.9183 85.3061 79.5012C84.8128 79.0841 84.1206 78.8755 83.2274 78.8755C82.1332 78.8755 81.2745 79.2391 80.6492 79.9665C80.0301 80.6937 79.7215 81.7284 79.7215 83.0706V84.2017C79.7215 85.4691 80.0158 86.4772 80.6046 87.2258C81.1933 87.9745 82.0175 88.3487 83.0751 88.3487C84.0272 88.3487 84.756 88.1563 85.2615 87.7712C85.773 87.3809 86.112 86.7044 86.2785 85.7418H88Z"
                  fill="currentColor"
                />
                <path
                  d="M176 85.7418C175.84 86.9772 175.332 87.9316 174.475 88.6055C173.625 89.2739 172.492 89.6082 171.075 89.6082C169.542 89.6082 168.31 89.1135 167.382 88.1242C166.461 87.1349 166 85.8113 166 84.1536V83.0306C166 81.9449 166.213 80.9905 166.642 80.1669C167.076 79.3435 167.689 78.7125 168.481 78.2738C169.27 77.8301 170.186 77.6082 171.227 77.6082C172.608 77.6082 173.714 77.9557 174.546 78.651C175.379 79.3407 175.864 80.298 176 81.5226H174.279C174.13 80.592 173.806 79.9183 173.306 79.5012C172.813 79.0841 172.121 78.8755 171.227 78.8755C170.133 78.8755 169.274 79.2391 168.649 79.9665C168.03 80.6937 167.721 81.7284 167.721 83.0706V84.2017C167.721 85.4691 168.016 86.4772 168.605 87.2258C169.193 87.9745 170.017 88.3487 171.075 88.3487C172.027 88.3487 172.756 88.1563 173.261 87.7712C173.773 87.3809 174.112 86.7044 174.279 85.7418H176Z"
                  fill="currentColor"
                />
                <path
                  d="M129.378 86.4763H124.615L123.546 89.6082H122L126.34 77.6082H127.653L132 89.6082H130.463L129.378 86.4763ZM125.068 85.174H128.932L126.997 79.5614L125.068 85.174Z"
                  fill="currentColor"
                />
              </svg>{" "}
              IPSC Paper Target
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body stageImage">
              {StageImagePappers.map((image, key) => {
                return (
                  <img
                    key={key}
                    className="draggable papper-target"
                    src={image}
                    alt={image}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 252 242"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-accordion"
              >
                <g clipPath="url(#clip0_701_2)">
                  <path
                    d="M183.25 54.8867C183.25 24.58 157.622 0 126 0C94.3778 0 68.75 24.58 68.75 54.8867C68.75 73.2867 78.2266 89.5267 92.7209 99.4867H92.6468L97.375 240H155.709L161.603 97.88H161.535C174.75 87.8267 183.25 72.32 183.25 54.8867Z"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_701_2">
                    <rect width="252" height="242" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              IPSC Steel Target
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body stageImage">
              {StageImageSteel.map((image, key) => {
                return (
                  <div
                    key={key}
                    className="steel-target"
                    // onClick={() => addPart(image)}
                  >
                    <img src={image} alt={image} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 253 242"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-accordion"
              >
                <g clipPath="url(#clip0_701_35)">
                  <path
                    d="M2.5 35.9736L248.5 4.27426L248.5 150.127L2.5 194.506L2.5 35.9736Z"
                    stroke="currentColor"
                    strokeWidth="10"
                  />
                  <line
                    x1="60.2373"
                    y1="189.513"
                    x2="60.2373"
                    y2="236.5"
                    stroke="currentColor"
                    strokeWidth="11"
                    strokeLinecap="round"
                  />
                  <line
                    x1="87.7456"
                    y1="51.2113"
                    x2="87.7456"
                    y2="146.077"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2.5"
                    y1="-2.5"
                    x2="179.485"
                    y2="-2.5"
                    transform="matrix(0.987228 -0.159316 0.1759 0.984408 41.1777 106.698)"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <line
                    x1="179.271"
                    y1="57.6543"
                    x2="179.271"
                    y2="117.084"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <line
                    x1="133.509"
                    y1="54.433"
                    x2="133.509"
                    y2="136.413"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <line
                    x1="204"
                    y1="161.742"
                    x2="204"
                    y2="193.4"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_701_35">
                    <rect
                      width="252"
                      height="242"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>{" "}
              Props and Fault Line
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              <svg
                className="icon-accordion"
                width="40"
                height="40"
                viewBox="0 0 253 243"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_710_28)">
                  <path
                    d="M130.571 67.1514H122.053V209.526H130.571V67.1514Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M121.444 193.098H115.968V220.478H121.444V193.098Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M136.655 193.098H131.179V220.478H136.655V193.098Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M165.86 185.797H87.3721V191.881H165.86V185.797Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M168.902 220.478H84.9375V228.387H168.902V220.478Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M124.816 73.5789C124.495 75.399 125.71 77.1347 127.531 77.4556C129.351 77.7765 131.086 76.5612 131.407 74.7411C131.728 72.921 130.513 71.1854 128.693 70.8645C126.873 70.5435 125.137 71.7588 124.816 73.5789Z"
                    fill="currentColor"
                    stroke="black"
                  />
                  <path
                    d="M222.952 57.5415L223.756 52.979L134.532 37.2463L133.727 41.8088L222.952 57.5415Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M211.391 126.55L212.196 121.988L122.971 106.255L122.167 110.818L211.391 126.55Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M150.662 45.947L151.892 38.9712L134.061 35.8272L132.831 42.8031L150.662 45.947Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M138.362 114.826L139.592 107.85L121.762 104.706L120.532 111.682L138.362 114.826Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M125.926 112.642L139.308 36.7524L133.426 35.7154L120.045 111.604L125.926 112.642Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M124.825 78.1504L126.304 69.7617L22.8164 51.5141L21.3372 59.9028L124.825 78.1504Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M20.7975 67.5458L24.918 44.1772L3.69746 40.4355L-0.423041 63.8041L20.7975 67.5458Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M124.277 82.7512C119.404 81.8919 116.145 77.1773 117.022 72.2046C117.899 67.2319 122.573 63.9161 127.447 64.7754C132.32 65.6348 135.579 70.3494 134.702 75.3221C133.825 80.2948 129.151 83.6106 124.277 82.7512Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M125.151 73.638C125.035 74.2998 125.468 74.9295 126.12 75.0444C126.772 75.1593 127.395 74.716 127.511 74.0541C127.628 73.3922 127.194 72.7626 126.543 72.6477C125.891 72.5328 125.268 72.9761 125.151 73.638Z"
                    fill="black"
                  />
                  <path
                    d="M247.678 107.971L212.554 126.847L181.141 121.308L155.188 91.6654L159.542 66.9712L194.069 47.9928L225.482 53.5318L252.031 83.2824L247.678 107.971Z"
                    fill="currentColor"
                    stroke="black"
                  />
                  <path
                    d="M246.602 107.063L214.357 113.573L191.266 109.501L175.804 90.3701L178.682 74.0465L199.645 61.9502L222.741 66.0227L250.815 83.1679L246.602 107.063Z"
                    fill="currentColor"
                    stroke="black"
                  />
                  <path
                    d="M244.385 98.6156L216.981 102.297L202.832 99.8017L192.622 89.5954L194.009 81.7303L206.98 76.2179L221.144 78.7153L245.736 90.9549L244.385 98.6156Z"
                    fill="currentColor"
                    stroke="black"
                  />
                  <path
                    d="M211.642 119.003L215.476 119.679L215.285 120.761C215.227 121.095 215.101 121.377 214.908 121.607C214.715 121.837 214.471 121.998 214.174 122.089C213.877 122.181 213.552 122.197 213.199 122.137L212.954 122.093C212.593 122.03 212.288 121.904 212.041 121.715C211.793 121.528 211.62 121.293 211.52 121.007C211.42 120.723 211.398 120.409 211.455 120.064L211.642 119.003ZM214.971 120.111L211.967 119.581L211.873 120.113C211.804 120.503 211.872 120.827 212.076 121.086C212.28 121.347 212.606 121.516 213.053 121.595L213.277 121.634C213.712 121.711 214.068 121.668 214.345 121.505C214.623 121.344 214.797 121.076 214.867 120.701L214.971 120.111Z"
                    fill="black"
                  />
                  <path
                    d="M222.207 59.0837L226.041 59.7598L225.85 60.8419C225.791 61.1751 225.666 61.4575 225.473 61.6873C225.28 61.9178 225.036 62.0785 224.739 62.169C224.442 62.2618 224.117 62.2774 223.764 62.217L223.519 62.1738C223.158 62.11 222.853 61.9841 222.606 61.7959C222.358 61.6089 222.184 61.3731 222.085 61.0874C221.984 60.8034 221.963 60.4895 222.02 60.1449L222.207 59.0837ZM225.536 60.1915L222.531 59.6618L222.438 60.1938C222.369 60.5839 222.437 60.9079 222.641 61.1663C222.845 61.4271 223.17 61.5964 223.618 61.6753L223.842 61.7148C224.277 61.7916 224.633 61.7487 224.91 61.5856C225.188 61.4246 225.362 61.1568 225.432 60.7817L225.536 60.1915Z"
                    fill="black"
                  />
                  <path
                    d="M220.708 74.7013C220.311 74.5825 220.024 74.3774 219.847 74.0855C219.672 73.7958 219.621 73.4421 219.695 73.0239C219.775 72.5715 220.001 72.2364 220.374 72.0198C220.747 71.805 221.206 71.7456 221.75 71.8416L222.118 71.9066C222.475 71.9694 222.777 72.0876 223.025 72.2617C223.273 72.4376 223.448 72.6551 223.551 72.9141C223.655 73.1729 223.681 73.456 223.626 73.7634C223.555 74.1708 223.383 74.4773 223.111 74.6827C222.842 74.8885 222.502 74.9763 222.093 74.9455L222.183 74.4374C222.496 74.4475 222.734 74.3906 222.897 74.2674C223.059 74.1459 223.164 73.9537 223.21 73.69C223.267 73.3671 223.193 73.0926 222.986 72.8659C222.78 72.6411 222.456 72.4901 222.016 72.4124L221.644 72.3469C221.228 72.2736 220.882 72.3021 220.606 72.4325C220.329 72.563 220.164 72.7846 220.109 73.0968C220.059 73.3778 220.084 73.604 220.184 73.7755C220.286 73.9491 220.49 74.0883 220.798 74.1932L220.708 74.7013Z"
                    fill="black"
                  />
                  <path
                    d="M214.581 109.455C214.183 109.336 213.896 109.131 213.72 108.839C213.545 108.549 213.494 108.196 213.568 107.777C213.647 107.325 213.874 106.99 214.247 106.773C214.62 106.558 215.078 106.499 215.622 106.595L215.991 106.66C216.347 106.723 216.65 106.841 216.898 107.015C217.145 107.191 217.321 107.408 217.423 107.668C217.528 107.926 217.553 108.209 217.499 108.517C217.427 108.924 217.255 109.231 216.984 109.436C216.714 109.642 216.375 109.73 215.966 109.699L216.055 109.191C216.368 109.201 216.606 109.144 216.769 109.021C216.932 108.899 217.036 108.707 217.083 108.443C217.14 108.12 217.065 107.846 216.859 107.619C216.652 107.394 216.329 107.244 215.888 107.166L215.517 107.1C215.101 107.027 214.755 107.056 214.478 107.186C214.202 107.316 214.036 107.538 213.981 107.85C213.932 108.131 213.957 108.357 214.057 108.529C214.158 108.703 214.363 108.842 214.67 108.947L214.581 109.455Z"
                    fill="black"
                  />
                  <path
                    d="M217.658 90.7379L217.941 89.1315L217.004 88.5943L217.096 88.073L220.672 90.2128L220.593 90.6557L216.501 91.4459L216.592 90.9276L217.658 90.7379ZM218.33 89.3576L218.1 90.6609L220.008 90.3245L218.33 89.3576Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_710_28">
                    <rect
                      width="252"
                      height="242"
                      fill="white"
                      transform="translate(0.0585938 0.0297852)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Dynamic Target Mechanisms
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body stageImage">
              {StageImageMeca.map((image, key) => {
                return (
                  <div
                    key={key}
                    className="meca-target"
                    // onClick={() => addPart(image)}
                  >
                    <img src={image} alt={image} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              <img
                className="img-accordion"
                // src={ipscTarget}
                width="30"
                alt="IPSC Paper Target"
              />{" "}
              Specials Target/Objects
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSix"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-upload icon-accordion"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"></path>
                <path d="M7.646 1.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 2.707V11.5a.5.5 0 01-1 0V2.707L5.354 4.854a.5.5 0 11-.708-.708l3-3z"></path>
              </svg>{" "}
              Uploaded
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSix"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSeven"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSeven"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-pencil icon-accordion"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z"></path>
              </svg>{" "}
              Drawing and Shape
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSeven"
          >
            <div className="accordion-body">
              <div className="shape-list">
                {/* Add Rect */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bounding-box"
                  viewBox="0 0 16 16"
                  // Onclick={onAddRect}
                >
                  <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z"></path>
                </svg>
                {/* Add circle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z"></path>
                </svg>
                {/* Add Octogone */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-octagon"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"></path>
                </svg>
                {/* Add star */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288L8 2.223l1.847 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.565.565 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"></path>
                </svg>
              </div>
              <div className="draw-list">draw</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
