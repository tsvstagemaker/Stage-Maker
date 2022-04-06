import React, { useState, useEffect, useRef } from "react";
import Moveable from "react-moveable";
import MoveableHelper from "moveable-helper";
import { nanoid } from "nanoid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Accordion from "../../components/StageViews/Accordion";
import "./Stage.css";
import "../../components/StageViews/DropZone.css";

const MoveableElemet = (props) => {
  // Changes in rotate throttle may lead to invalid "left" and "top"
  // const throttles = { drag: 10, resize: 10, rotate: 90 };
  // const bounds = { left: 0, top: 0, right: 490, bottom: 490 };
  const { properties, allowMoveable, onDuplicate, onRemove } = props;
  const [privateProps, setPrivateProps] = useState(properties);
  const [tempProps, setTempProps] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMoveable, setIsMoveable] = useState(false);
  const [target, setTarget] = useState();

  // console.log(privateProps);
  // console.log(properties);
  // console.log(allowMoveable);
  // console.log(onDuplicate);
  // console.log(onRemove);

  useEffect(() => {
    setTarget(document.getElementById(properties.id));
  }, [properties.id, properties.classSelect]);

  const generateStyleObject = (attributes) => ({
    position: "absolute",
    width: `${attributes.width}px`,
    height: `${attributes.height}px`,
    top: `${attributes.top}px`,
    left: `${attributes.left}px`,
    background: attributes.backgroundColor,
    transform: `rotate(${attributes.rotate}deg)`,
    color: attributes.fontColor,
    borderWidth: attributes.borderWidth,
    borderStyle: attributes.borderStyle,
    borderColor: attributes.borderColor,
    fontWeight: "bold",
    boxSizing: "border-box",
    cursor: "pointer",
  });

  const onMouseEnter = () => {
    setIsHovered(true);
    setIsMoveable(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    setIsMoveable(isClicked);
  };

  const onMouseDown = () => {
    setIsClicked(true);
    setIsMoveable(true);
  };

  const onMouseUp = () => {
    setIsClicked(false);
    setIsMoveable(isHovered);
  };

  const onDoubleClick = () => {
    setIsHovered(false);
    setIsClicked(false);
    setIsMoveable(false);
  };

  const duplicateButton = (
    <span className="btn-none"></span>
    // <button
    //   onClick={() => onDuplicate(properties.id)}
    //   onTouchStart={() => onDuplicate(properties.id)}
    // >
    //   +
    // </button>
  );

  const removeButton = (
    <span className="btn-none"></span>
    // <div className="div-element">
    //   <button
    //     className="btn btn-sm btn-dark mx-1 btn-element"
    //     onClick={() => onRemove(properties.id)}
    //     onTouchStart={() => onRemove(properties.id)}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="16"
    //       height="16"
    //       fill="currentColor"
    //       className="bi bi-x-lg"
    //       viewBox="0 0 16 16"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M13.854 2.146a.5.5 0 010 .708l-11 11a.5.5 0 01-.708-.708l11-11a.5.5 0 01.708 0z"
    //       ></path>
    //       <path
    //         fillRule="evenodd"
    //         d="M2.146 2.146a.5.5 0 000 .708l11 11a.5.5 0 00.708-.708l-11-11a.5.5 0 00-.708 0z"
    //       ></path>
    //     </svg>
    //   </button>
    // </div>
  );

  const Editable = {
    name: "editable",
    props: {},
    events: {},
    render: function (moveable, React) {
      const rect = moveable.getRect();
      const pos2 = moveable.state.pos2;
      // console.log(pos2);

      // use css for able
      const EditableViewer = moveable.useCSS(
        "div",
        `
        {
            position: absolute;
            left: 0px;
            top: 0px;
            will-change: transform;
            transform-origin: 0px 0px;
        }
        .moveable-button {
            width: 24px;
            height: 24px;
            margin-bottom: 4px;
            background: #4af;
            border-radius: 4px;
            appearance: none;
            border: 0;
            color: white;
            font-weight: bold;
        }
        `
      );
      // Add key (required)
      // Add class prefix moveable-(required)
      return (
        <EditableViewer
          key="editable-viewer"
          className={"moveable-editable"}
          style={{
            transform: `translate(${pos2[0]}px, (${pos2[1]}px) rotate((${rect.rotation}deg) translate(10px)`,
          }}
        >
          <button
            className="moveable-button"
            // onClick={() => {
            //   alert("+");
            // }}
            onClick={() => onDuplicate(properties.id)}
            onTouchStart={() => onDuplicate(properties.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 018 2z"
              ></path>
            </svg>
          </button>

          <button
            className="moveable-button"
            // onClick={() => {
            //   alert("-");
            // }}
            onClick={() => onRemove(properties.id)}
            onTouchStart={() => onRemove(properties.id)}
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
        </EditableViewer>
      );
    },
  };

  return (
    <>
      <div
        id={properties.id}
        className={properties.classSelect}
        style={generateStyleObject(properties)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onDoubleClick={onDoubleClick}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `rotate(${-1 * properties.rotate}deg)`,
          }}
        >
          {properties.name}
          {allowMoveable ? duplicateButton : null}
          {allowMoveable ? removeButton : null}
        </div>
      </div>
      {allowMoveable ? (
        <Moveable
          target={target}
          ables={[Editable]}
          props={{
            editable: true,
          }}
          draggable={true}
          resizable={true}
          rotatable={true}
          // pinchable={true}
          snappable={true}
          keepRatio={true}
          roundable={true}
          roundRelative={false}
          // throttleDrag={throttles.drag}
          // throttleResize={throttles.resize}
          // throttleRotate={throttles.rotate}
          // bounds={bounds}
          renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
          edge={false}
          zoom={1}
          origin={false}
          padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
          onDragStart={({ target, clientX, clientY }) => {
            // console.log("onDragStart", target);
          }}
          onDrag={({
            target,
            beforeDelta,
            beforeDist,
            left,
            top,
            right,
            bottom,
            delta,
            dist,
            transform,
            clientX,
            clientY,
          }) => {
            // console.log("onDrag left, top", left, top);
            // target.style.left = `${left}px`;
            // target.style.top = `${top}px`;
            // console.log("onDrag translate", dist);
            target.style.transform = transform;
            let deltaX = dist[0];
            let deltaY = dist[1];
            if (privateProps.rotate === 90) {
              deltaX = dist[1] * -1;
              deltaY = dist[0];
            } else if (privateProps.rotate === 180) {
              deltaX = dist[0] * -1;
              deltaY = dist[1] * -1;
            } else if (privateProps.rotate === 270) {
              deltaX = dist[1];
              deltaY = dist[0] * -1;
            }
            setTempProps({ left: deltaX, top: deltaY });
          }}
          onDragEnd={({ target, isDrag, clientX, clientY }) => {
            // console.log("onDragEnd", target, isDrag, clientX, clientY);
            setPrivateProps({
              ...privateProps,
              left:
                tempProps.left !== undefined
                  ? privateProps.left + tempProps.left
                  : privateProps.left,
              top:
                tempProps.top !== undefined
                  ? privateProps.top + tempProps.top
                  : privateProps.top,
            });
            setTempProps({});
          }}
          onResizeStart={({ target, clientX, clientY }) => {
            // console.log("onResizeStart", target);
          }}
          onResize={({
            target,
            width,
            height,
            dist,
            delta,
            direction,
            clientX,
            clientY,
          }) => {
            // console.log("onResize", target);
            // console.log("onResize", delta);
            // console.log("onResize", width, height);
            delta[0] && (target.style.width = `${width}px`);
            delta[1] && (target.style.height = `${height}px`);
            setPrivateProps({
              ...privateProps,
              width: width,
              height: height,
            });
            setTempProps({});
          }}
          onResizeEnd={({ target, isDrag, clientX, clientY }) => {
            // console.log("onResizeEnd", target, isDrag);
          }}
          onRotateStart={({ target, clientX, clientY }) => {
            // console.log("onRotateStart", target);
          }}
          onRotate={({ target, delta, dist, transform, clientX, clientY }) => {
            // console.log("onRotate", dist);
            const angle = (privateProps.rotate + dist) % 360;
            setTempProps({ rotate: angle < 0 ? 360 + angle : angle });
            target.style.transform = transform;
          }}
          onRotateEnd={({ target, isDrag, clientX, clientY }) => {
            // console.log("onRotateEnd", target, isDrag);
            setPrivateProps({
              ...privateProps,
              rotate:
                tempProps.rotate !== undefined
                  ? tempProps.rotate
                  : privateProps.rotate,
            });
            setTempProps({});
          }}
          onRound={(e) => {
            e.target.style.borderRadius = e.borderRadius;
          }}
          // onPinchStart={({ target, clientX, clientY, datas }) => {
          //   // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
          //   // console.log("onPinchStart");
          // }}
          // onPinch={({ target, clientX, clientY, datas }) => {
          //   // pinch event occur before drag, rotate, scale, resize
          //   // console.log("onPinch");
          // }}
          // onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
          //   // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
          //   // console.log("onPinchEnd");
          // }}
        />
      ) : null}
    </>
  );
};

const rectTemplate = {
  classSelect: "targets",
  name: "Rect",
  width: 100,
  height: 100,
  top: 100,
  left: 100,
  rotate: 0,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "black",
  // backgroundColor: "black",
  fontColor: "black",
};

const circleTemplate = {
  classSelect: "targets",
  name: "Circle",
  width: 100,
  height: 100,
  top: 100,
  left: 100,
  rotate: 0,
  borderWidth: 1,
  borderRadius: "5px 10px 2em 15%",
  borderStyle: "solid",
  borderColor: "black",
  // backgroundColor: "black",
  fontColor: "black",
};

export default function CreateStage() {
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

  const [targets, setTargets] = useState([
    {
      id: "target",
      classSelect: "targets",
      name: "Target1",
      width: 100,
      height: 100,
      borderRaduis: 50,
      top: 100,
      left: 100,
      rotate: 90,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "black",
      // backgroundColor: "black",
      fontColor: "black",
    },
  ]);
  const [isMoveable, setIsMoveable] = useState(false);

  const onAddMoreRect = () => {
    const newTarget = { ...rectTemplate };
    newTarget.id = nanoid();
    newTarget.name = `${newTarget.name}`;
    setTargets([...targets, newTarget]);
  };

  const onAddMoreCircle = () => {
    const newTarget = { ...circleTemplate };
    newTarget.id = nanoid();
    newTarget.name = `${newTarget.name}`;
    setTargets([...targets, newTarget]);
  };

  const toggleMoveable = () => {
    setIsMoveable(!isMoveable);
  };

  const onDuplicate = (id) => {
    const newTarget = { ...targets.find((item) => item.id === id) };
    newTarget.id = nanoid();
    newTarget.name = `${newTarget.name}`;
    setTargets([...targets, newTarget]);
  };

  const onRemove = (id) => {
    const index = targets.findIndex((item) => item.id === id);
    setTargets([...targets.slice(0, index), ...targets.slice(index + 1)]);
  };

  const [helper] = useState(() => {
    return new MoveableHelper();
  });
  const targetRef = useRef < HTMLDivElement > null;

  return (
    <TransformWrapper
      defaultScale={1}
      options={{ disabled: isMoveable, minScale: 0.2 }}
      wheel={{ disabled: true }}
      zoomIn={{ step: 5 }}
      zoomOut={{ step: 5 }}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <div
          // style={{
          //   position: "absolute",
          //   bottom: "10px",
          //   right: "10px",
          //   zIndex: 100
          // }}
          ></div>
          {/* <TransformComponent> */}
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
            <div className="btns-list">
              <div className="btns-list-manage">
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
              </div>
              <div className="btns-list-ergo">
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
              <div className="btns-list-shape">
                <button
                  className="btn btn-sm btn-dark mx-1"
                  onClick={onAddMoreRect}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"></path>
                  </svg>
                </button>
                <button
                  className="btn btn-sm btn-dark mx-1"
                  onClick={onAddMoreCircle}
                >
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
                </button>
                <button
                  className="btn btn-sm btn-dark mx-1"
                  onClick={toggleMoveable}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bounding-box"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <TransformComponent>
            <div className="page">
              <div
                id="subpage"
                className={isGrid ? "grid-show subpage" : "subpage"}
                // style={{ backGround: { bgDropZone } }}
                style={{ backgroundColor: `${bgDropZone}` }}
              >
                {targets.map((target) => (
                  <MoveableElemet
                    key={target.id}
                    properties={target}
                    allowMoveable={isMoveable}
                    onDuplicate={onDuplicate}
                    onRemove={onRemove}
                    className="moveable"
                    ref={targetRef}
                  />
                ))}
                <p className="pub">TSV STAGE MAKER</p>
              </div>
            </div>

            {/* <div
                className="container"
                style={{
                  width: "100vw",
                  height: "100vh",
                  background:
                    "repeating-linear-gradient(0deg, rgba(120, 120, 120, 0.2), rgba(120, 120, 120, 0.22) 2px, rgba(0, 0, 0, 0) 2px, rgba(0, 0, 0, 0) 240px), repeating-linear-gradient(-90deg, rgba(120, 120, 120, 0.22), rgba(120, 120, 120, 0.22) 2px, rgba(0, 0, 0, 0) 2px, rgba(0, 0, 0, 0) 240px), repeating-linear-gradient(0deg, rgba(120, 120, 120, 0.22), rgba(120, 120, 120, 0.22) 2px, rgba(0, 0, 0, 0) 2px, rgba(0, 0, 0, 0) 60px), repeating-linear-gradient(-90deg, rgba(120, 120, 120, 0.22), rgba(120, 120, 120, 0.22) 2px, rgba(0, 0, 0, 0) 2px, rgba(0, 0, 0, 0) 60px)",
                  pointerEvents: "auto !important"
                }}
              >
                {targets.map((target) => (
                  <MoveableElemet
                    key={target.id}
                    properties={target}
                    allowMoveable={isMoveable}
                    onDuplicate={onDuplicate}
                    onRemove={onRemove}
                  />
                ))}
              </div> */}
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
