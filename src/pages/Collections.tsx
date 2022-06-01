import { Divider, Typography } from "@mui/material";
import React from "react";
import CollectionCard from "../components/CollectionCard";
import SortSelect from "../components/SortSelect";
import { StyledContainer, Flex } from "../components/styled";

function Collections() {
  return (
    <StyledContainer maxWidth="xl">
      <Flex pb={2} sx={{ justifyContent: "space-between" }}>
        <Typography variant="h1">Top collections on fractional</Typography>
        <SortSelect />
      </Flex>
      <Divider />
      <Flex gap="20px" justifyContent="space-around" flexWrap="wrap" my={4}>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </Flex>
    </StyledContainer>
  );
}

export default Collections;
