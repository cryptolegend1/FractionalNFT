import { Box, Typography } from "@mui/material";
import React from "react";
import FilterItem from "./FilterItem";
import { Flex } from "./styled";
import VaultCard from "./VaultCard";

function VaultsTab() {
  const desktopVersion = () => {
    return (
      <Box width="260px">
        <FilterItem title="Verification">
          <Typography variant="body1">AAA</Typography>
          <Typography variant="body1">bbb</Typography>
        </FilterItem>
        <FilterItem title="Status">
          <Typography variant="body1">AAA</Typography>
          <Typography variant="body1">bbb</Typography>
        </FilterItem>
        <FilterItem title="Vault Type">
          <Typography variant="body1">AAA</Typography>
          <Typography variant="body1">bbb</Typography>
        </FilterItem>
        <FilterItem title="Valuation Range">
          <Typography variant="body1">AAA</Typography>
          <Typography variant="body1">bbb</Typography>
        </FilterItem>
        <FilterItem title="Collections">
          <Typography variant="body1">AAA</Typography>
          <Typography variant="body1">bbb</Typography>
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
