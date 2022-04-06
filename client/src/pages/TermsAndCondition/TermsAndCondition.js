import React from "react";
import logoOnlySvg from "../../images/Logo-stage-maker.svg";

export default function TermsAndCondition() {
  return (
    <div className="text-center container">
      <h2 className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        Terms and Conditions{" "}
        <img src={logoOnlySvg} alt="Stage maker" width={72} height={57} />
      </h2>
    </div>
  );
}
