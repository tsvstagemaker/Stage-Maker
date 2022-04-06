import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Regions() {
  const [listRegions, setListRegions] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/region`)
      .then((response) => {
        setListRegions(response.data);
      });
  }, []);
  return (
    <>
      <option value="NONE"> Select region</option>
      {listRegions.map((regionList, key) => {
        return (
          <option
            // style={{
            //   backgroundImage: `url(${regionList.file_url})`,
            //   backgroundRepeat: "no-repeat",
            //   width: "25px",
            // }}
            key={key}
            value={regionList.shortRegionicon}
          >
            {" "}
            {regionList.longRegionicon}
            {/* <img
              src={regionList.file_url}
              alt="Logo tsv stage maker"
              width={32}
              height={32}
              className=""
            /> */}
          </option>
        );
      })}
    </>
  );
}
