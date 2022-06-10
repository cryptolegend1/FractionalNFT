import { Box, Divider, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Flex, StyledContainer } from "../components/styled";
import VaultSortSelect from "../components/VaultSortSelect";
import VaultsTab from "../components/Tabs/VaultsTab";
import AnalysisTab from "../components/Tabs/AnalysisTab";
import { useParams } from "react-router-dom";

function Collection() {
  const { collectionId } = useParams();
  console.log(collectionId);
  const [tab, setTab] = useState("vaults");

  const handleTabChange = (event: any, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        component="img"
        src="https://assets.fractional.art/media/collections/backgrounds/ENS.jpg"
        width="100%"
        height="320px"
        sx={{ objectFit: "cover" }}
      />
      <StyledContainer maxWidth="xl">
        <Flex justifyContent="space-between">
          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="vaults" label="Vaults 455" />
            <Tab value="analysis" label="Analysis" />
          </Tabs>
          {tab === "vaults" && <VaultSortSelect />}
        </Flex>
        <Divider />
        {tab === "analysis" ? <AnalysisTab /> : <VaultsTab />}
      </StyledContainer>
    </>
  );
}

export default Collection;
