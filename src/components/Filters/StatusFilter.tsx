import { FormGroup } from "@mui/material";
import * as React from "react";
import { IOSSwitch, StyledFormControlLabel } from "../styled";

export default function StatusFilter() {
  return (
    <FormGroup>
      <StyledFormControlLabel value="all" control={<IOSSwitch />} label="All" />
      <StyledFormControlLabel
        value="live auction"
        control={<IOSSwitch />}
        label="Live Auction"
      />
      <StyledFormControlLabel
        value="fraction sale"
        control={<IOSSwitch />}
        label="Fraction Sale"
      />
      <StyledFormControlLabel
        value="vault closed"
        control={<IOSSwitch />}
        label="Vault Closed"
      />
    </FormGroup>
  );
}
