import { FormGroup } from "@mui/material";
import * as React from "react";
import { IOSSwitch, StyledFormControlLabel } from "../styled";

export default function VerificationFilter() {
  return (
    <FormGroup>
      <StyledFormControlLabel value="all" control={<IOSSwitch />} label="All" />
      <StyledFormControlLabel
        value="verified"
        control={<IOSSwitch />}
        label="Verified"
      />
    </FormGroup>
  );
}
