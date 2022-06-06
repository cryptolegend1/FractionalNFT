import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function CollectionFilterItem() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "12px",
        border: "2px solid #e4e6e9",
        borderRadius: "8px",
        marginBottom: "8px",
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src="logo192.png"
        width={24}
        height={24}
        sx={{ borderRadius: "50%", background: "white" }}
      />
      <Typography>.crypto</Typography>
      <Box
        component="img"
        src="assets/verified.svg"
        width={15}
        height={15}
        sx={{ borderRadius: "50%" }}
      />
    </Box>
  );
}
