import React from "react";
import Feature from "./Feature/Feature";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./Features.css"
const Features = () => {
  return (
    <div className="features">
      <Feature
        title="Revanue"
        money="2,415"
        rate="-11.4"
        icon={<ArrowDownwardIcon className="red icon"/>}
      />
      <Feature
        title="Sales"
        money="2,415"
        rate="-1.4"
        icon={<ArrowDownwardIcon className="red icon"/>}
      />
      <Feature  title="Cost"
        money="2,415"
        rate="+2.4"
        icon={<ArrowUpwardIcon className="green icon"/>}/>
    </div>
  );
};

export default Features;
