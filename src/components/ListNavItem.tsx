import React, { useState } from "react";
import { Menu, MenuItem, Box, Link, styled } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const NavLink = styled(Link)`
  text-decoration: none;
  margin: 0 20px;
`;

const ListNavItem = (props: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box component="span">
        {props.nav.children ? (
          <NavLink
            href="#"
            onClick={handleMenuOpen}
            display="flex"
            alignItems="center"
          >
            {props.nav.title}
            {anchorEl ? <ExpandLess /> : <ExpandMore />}
          </NavLink>
        ) : (
          <NavLink href={props.nav.route}>{props.nav.title}</NavLink>
        )}
      </Box>
      {props.nav.children && (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {props.nav.children.map((nav: any, i: any) => (
            <MenuItem
              key={i}
              style={{ minWidth: 166 }}
              onClick={handleMenuClose}
            >
              <NavLink href={nav.route}>{nav.title}</NavLink>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default ListNavItem;
