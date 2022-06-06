import { Box } from "@mui/material";
import React from "react";
import FilterItem from "./FilterItem";
import { Flex } from "./styled";
import VaultCard from "./Cards/VaultCard";
import VerificationFilter from "./Filters/VerificationFilter";
import StatusFilter from "./Filters/StatusFilter";
import VaultTypeFilter from "./Filters/VaultTypeFilter";
import ValuationRangeFilter from "./Filters/ValuationRangeFilter";
import CollectionFilter from "./Filters/CollectionFilter";

function VaultsTab() {
  const desktopVersion = () => {
    return (
      <Box width="260px">
        <FilterItem title="Verification">
          <VerificationFilter />
        </FilterItem>
        <FilterItem title="Status">
          <StatusFilter />
        </FilterItem>
        <FilterItem title="Vault Type">
          <VaultTypeFilter />
        </FilterItem>
        <FilterItem title="Valuation Range">
          <ValuationRangeFilter />
        </FilterItem>
        <FilterItem title="Collections">
          <CollectionFilter />
        </FilterItem>
      </Box>
    );
  };

  return (
    <Box
      my={4}
      sx={{
        display: "flex",
        gap: "20px",
      }}
    >
      {desktopVersion()}
      <Flex gap="20px" justifyContent="space-around" flexWrap="wrap" flex={1}>
        <VaultCard />
        <VaultCard />
        <VaultCard />
        <VaultCard />
        <VaultCard />
        <VaultCard />
        <VaultCard />
        <VaultCard />
      </Flex>
    </Box>
  );
}

export default VaultsTab;
