import React from "react";
import { Chip } from "@mui/material";
import "./ListOfSkills.css";

function ListOfSkills({ skills }) {

  const chipSkills = skills.map(
    (data) => <li>{<Chip label={data}/>}</li>
  );

  return <div id="chip-skills">{chipSkills}</div>;
}

export default ListOfSkills;
