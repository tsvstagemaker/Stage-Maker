import React, { useState } from "react";
// import Moveable from "react-moveable";
import Accordion from "../../components/StageViews/Accordion";
import DropZone from "../../components/StageViews/DropZone";
import "./Stage.css";

export default function Stage() {
  return (
    <div>
      <div className="DropZone">
        <div
          className="offcanvas offcanvas-end "
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          data-bs-scroll="true"
          data-bs-backdrop="false"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Draggable Items and Drawing</h5>
            <button
              type="button"
              className="btn-close btn-close-white text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Accordion />
          </div>
        </div>

        <button
          className="btn btn-sm btn-dark mx-1 m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-layout-text-sidebar"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zM3 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z"></path>
            <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm12-1v14h2a1 1 0 001-1V2a1 1 0 00-1-1h-2zm-1 0H2a1 1 0 00-1 1v12a1 1 0 001 1h9V1z"></path>
          </svg>
        </button>
        <button
          className="btn btn-sm btn-dark mx-1 m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cloud-download"
            viewBox="0 0 16 16"
          >
            <path d="M4.406 1.342A5.53 5.53 0 018 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 010-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 00-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 010 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
            <path d="M7.646 15.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 14.293V5.5a.5.5 0 00-1 0v8.793l-2.146-2.147a.5.5 0 00-.708.708l3 3z"></path>
          </svg>
        </button>
        <button
          className="btn btn-sm btn-dark mx-1 m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"></path>
            <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z"></path>
          </svg>
        </button>

        <button
          className="btn btn-sm btn-dark mx-1 m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.5 1.5a.5.5 0 01.5.5v4.8a2.5 2.5 0 01-2.5 2.5H2.707l3.347 3.346a.5.5 0 01-.708.708l-4.2-4.2a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 8.3H12.5A1.5 1.5 0 0014 6.8V2a.5.5 0 01.5-.5z"
            ></path>
          </svg>
        </button>
        <button
          className="btn btn-sm btn-dark mx-1 m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-return-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.5 1.5A.5.5 0 001 2v4.8a2.5 2.5 0 002.5 2.5h9.793l-3.347 3.346a.5.5 0 00.708.708l4.2-4.2a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 8.3H3.5A1.5 1.5 0 012 6.8V2a.5.5 0 00-.5-.5z"
            ></path>
          </svg>
        </button>
        <DropZone />
      </div>
    </div>
  );
}
