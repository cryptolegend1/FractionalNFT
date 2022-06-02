import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function VaultSortSelect() {
  const [sortBy, setSortBy] = React.useState("Popular");

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort by</InputLabel>
      <Select
        labelId="vault-select"
        defaultValue="Popular"
        id="select-sort-by"
        value={sortBy}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value="Popular">Popular</MenuItem>
        <MenuItem value="Newest">Newest</MenuItem>
        <MenuItem value="Oldest">Oldest</MenuItem>
        <MenuItem value="Implied Valuation Up">Implied Valuation ↑</MenuItem>
        <MenuItem value="Implied Valuation Down">Implied Valuation ↓</MenuItem>
        <MenuItem value="Auction Ending Soon">Auction Ending Soon</MenuItem>
        <MenuItem value="Verified By Fractional">
          Verified By Fractional
        </MenuItem>
      </Select>
    </FormControl>
  );
}
