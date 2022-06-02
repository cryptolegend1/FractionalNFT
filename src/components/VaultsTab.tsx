import { Box } from "@mui/material";
import React from "react";
import { Flex } from "./styled";
import VaultCard from "./VaultCard";

function VaultsTab() {
  return (
    <Flex gap="20px" my={4}>
      <Box width="350px">asdf</Box>
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
    </Flex>
  );
}

export default VaultsTab;
