import React from "react";
import move from "../../images/move.png";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";

export default function Features() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">
        <FeaturedPlayListIcon /> Features
      </h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div className="col d-flex align-items-start">
          <FormatListBulletedIcon />
          <div>
            <h4 className="fw-bold mb-0">Create IPSC Match</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <FormatListNumberedIcon />
          <div>
            <h4 className="fw-bold mb-0">Create IPSC stage</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <ModelTrainingIcon />
          <div>
            <h4 className="fw-bold mb-0">Create IPSC training</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <img
            src={move}
            alt="Logo tsv stage maker"
            width={28}
            className="logo-navbar"
          />
          <div>
            <h4 className="fw-bold mb-0">Drang and Drop elements</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <AddCircleOutlineIcon />
          <div>
            <h4 className="fw-bold mb-0">Add your elements</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <SaveIcon />
          <div>
            <h4 className="fw-bold mb-0">Save IPSC match and stage</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <ShareIcon />
          <div>
            <h4 className="fw-bold mb-0">Share your match</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <ShareIcon />
          <div>
            <h4 className="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
