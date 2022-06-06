import { FormGroup } from "@mui/material";
import * as React from "react";
import { IOSSwitch, StyledFormControlLabel } from "../styled";

export default function VaultTypeFilter() {
  return (
    <FormGroup>
      <StyledFormControlLabel value="all" control={<IOSSwitch />} label="All" />
      <StyledFormControlLabel
        value="erc20 fractions"
        control={<IOSSwitch />}
        label="ERC-20 Fractions"
      />
      <StyledFormControlLabel
        value="erc1155 fractions"
        control={<IOSSwitch />}
        label="ERC-1155 Fractions"
      />
    </FormGroup>
  );
}
