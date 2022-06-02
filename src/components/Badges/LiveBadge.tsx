import { Chip } from "@mui/material";
import * as React from "react";
import NoiseControlOffIcon from "@mui/icons-material/NoiseControlOff";

export default function LiveBadge() {
  return (
    <Chip
      className="live-badge"
      icon={<NoiseControlOffIcon />}
      label="Fraction Sale Live"
      size="small"
      sx={{
        borderWidth: "2px",
        borderRadius: "5px",
        background: "rgba(31, 38, 59, 0.8)",
        color: "#fff",
      }}
    />
  );
}
