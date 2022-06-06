import { AccountCircle } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import CollectionFilterItem from "./CollectionFilterItem";

export default function CollectionFilter() {
  return (
    <>
      <TextField
        id="input-with-icon-textfield"
        placeholder="search collections"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{ margin: "20px 0" }}
      />
      <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
        <CollectionFilterItem />
        <CollectionFilterItem />
        <CollectionFilterItem />
        <CollectionFilterItem />
        <CollectionFilterItem />
      </Box>
    </>
  );
}
