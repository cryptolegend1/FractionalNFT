import React, { useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const FilterItemButton = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const FilterItem = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <FilterItemButton onClick={handleClick}>
        <Typography variant="h4">{props.title}</Typography>
        {open ? (
          <IconButton size="small" sx={{ background: "#fff" }}>
            <ExpandLess fontSize="small" />
          </IconButton>
        ) : (
          <IconButton size="small" sx={{ background: "#fff" }}>
            <ExpandMore fontSize="small" />
          </IconButton>
        )}
      </FilterItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.children}
      </Collapse>
      <Divider sx={{ margin: "24px 0" }} />
    </>
  );
};

export default FilterItem;
