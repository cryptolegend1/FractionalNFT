import { Avatar, Chip } from "@mui/material";
import * as React from "react";

interface IProps {
  verified?: boolean;
}

export default function VerificationBadge(props: IProps) {
  const verifiedIcon = "assets/verified.svg";
  const unVerifiedIcon = "assets/unverified.svg";
  return (
    <Chip
      avatar={
        <Avatar
          alt="verification"
          src={props.verified ? verifiedIcon : unVerifiedIcon}
        />
      }
      label={props.verified ? "Verified" : "Not Yet Verified"}
      variant="outlined"
      color={props.verified ? "success" : "warning"}
      size="small"
      sx={{ borderWidth: "2px", borderRadius: "5px", background: "#fff" }}
    />
  );
}
