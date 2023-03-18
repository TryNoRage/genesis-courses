import React from "react";
import { Chip } from "@mui/material";
import "./ListOfSkills.css";
import generateKey from "../../helper/generateKey";

function ListOfSkills({ skills }) {

  const chipSkills = skills.map(
    (data) => <li key={generateKey(data)}>{<Chip label={data}/>}</li>
  );

  return <div id="chip-skills">{chipSkills}</div>;
}

export default ListOfSkills;
