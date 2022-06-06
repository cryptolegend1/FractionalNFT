import { Slider } from "@mui/material";
import * as React from "react";

export default function ValuationRangeFilter() {
  const marks = [
    {
      value: 0,
      label: "Ξ 0",
    },
    {
      value: 14400,
      label: "Ξ 14.4k",
    },
  ];
  return (
    <Slider
      aria-label="Always visible"
      defaultValue={0}
      max={14400}
      step={100}
      marks={marks}
      valueLabelDisplay="on"
      sx={{ marginTop: "40px" }}
    />
  );
}
