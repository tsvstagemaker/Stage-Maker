import React, { useState } from "react";
import Split from "react-split";
import "./createStage2.css";

export default function CreateStage2() {
  const [size, setSize] = useState([25, 50, 25]);
  return (
    <div className="create-stage">
      <div className="container-stage">
        <div className="container-grid">
        <div className="container-flex">
          <Split
            sizes={size}
            minSize={200}
            expandToMin={false}
            gutterSize={4}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
            style={{ display: "flex", flex: 1 }}
            onDragEnd={(e) => {
              console.log(e);
            }}
          >
            <div className="menu-actions">
              menuaction
              <button
                m={10}
                onClick={() => {
                  setSize([
                    100 / 3 + Math.random() * 0.0001,
                    100 / 3 + Math.random() * 0.0001,
                    100 / 3 + Math.random() * 0.0001,
                  ]);
                }}
              >
                Reset
              </button>
            </div>

            <div className="dropzone">dropzone</div>
          </Split>

          <div class="menu-tabs">menu-tabs</div>
          </div>

          <div className="datas-stage">datas-stage</div>
        </div>
      </div>
    </div>
  );
}
