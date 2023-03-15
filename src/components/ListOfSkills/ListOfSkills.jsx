import React from "react";
import { Paper, Chip, ListItem, } from "@mui/material";
import "./ListOfSkills.css";

function ListOfSkills() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Aligning your goals with your motives" },
    { key: 1, label: "Overcoming decision paralysis" },
    { key: 2, label: "Reframing negative self-talk" },
    { key: 3, label: "Gaining clarity" },
    { key: 4, label: "Challenging yourself" },
  ]);
  return (
    <div id="chip-skills">
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip label={data.label}/>
          </li>
        );
      })}
    </div >
  );
}

export default ListOfSkills;
