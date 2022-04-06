import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Clubs() {
  const [listClubs, setListClubs] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/club`).then((response) => {
      setListClubs(response.data);
    });
  }, []);
  return (
    <>
      <option value="NONE"> Select region</option>
      {listClubs.map((clubList, key) => {
        return (
          <option key={key} value={clubList.shortClubs}>
            {" "}
            {clubList.longClubs}
          </option>
        );
      })}
    </>
  );
}
