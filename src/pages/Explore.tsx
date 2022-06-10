import { Divider, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Flex, StyledContainer } from "../components/styled";
import VaultSortSelect from "../components/VaultSortSelect";
import ProfilesTab from "../components/Tabs/ProfilesTab";
import VaultsTab from "../components/Tabs/VaultsTab";

function Explore() {
  const [tab, setTab] = useState("vaults");

  const handleTabChange = (event: any, newValue: string) => {
    setTab(newValue);
  };

  return (
    <StyledContainer maxWidth="xl">
      <Flex justifyContent="space-between">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="vaults" label="Vaults 2662" />
          <Tab value="profiles" label="Profiles 8400" />
        </Tabs>
        {tab === "vaults" && <VaultSortSelect />}
      </Flex>
      <Divider />
      {tab === "profiles" ? <ProfilesTab /> : <VaultsTab />}
    </StyledContainer>
  );
}

export default Explore;
