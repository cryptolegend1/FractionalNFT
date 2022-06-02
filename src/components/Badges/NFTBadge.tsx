import { Chip } from "@mui/material";
import * as React from "react";

interface IProps {
  nftCount: number;
}

export default function NFTBadge(props: IProps) {
  return (
    <Chip
      label={`${props.nftCount} NFT`}
      size="small"
      sx={{ borderWidth: "2px", borderRadius: "5px", background: "#ffffff7f" }}
    />
  );
}
