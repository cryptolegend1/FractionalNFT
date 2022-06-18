import React from "react";
import { StyledContainer } from "../components/styled";
import Activity from "../components/Vault/Activity";
import Overview from "../components/Vault/Overview";

function Vault() {
  return (
    <StyledContainer maxWidth="lg">
      <Overview />
      <Activity />
      {/* <TopOwners />
      <NFTInside />
      <TokenStats />
      <FAQ /> */}
    </StyledContainer>
  );
}

export default Vault;
