import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SortSelect() {
  const [sortBy, setSortBy] = React.useState("Most Recent");

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort by</InputLabel>
      <Select
        labelId="demo-select-small"
        defaultValue="Most Recent"
        id="select-sort-by"
        value={sortBy}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value="Most Recent">Most Recent</MenuItem>
        <MenuItem value="Oldest">Oldest</MenuItem>
        <MenuItem value="Name (A - Z)">Name (A - Z)</MenuItem>
        <MenuItem value="Name (Z - A)">Name (Z - A)</MenuItem>
        <MenuItem value="Vault Count Up">Vault Count ↑</MenuItem>
        <MenuItem value="Vault Count Down">Vault Count ↓</MenuItem>
        <MenuItem value="NFT Count Up">NFT Count ↑</MenuItem>
        <MenuItem value="NFT Count Down">NFT Count ↓</MenuItem>
      </Select>
    </FormControl>
  );
}
