import React from "react";
import { Box } from "@mui/material";
import ConnectButton from "./ConnectButton";
import ListNavItem from "./ListNavItem";
import NAV_SECTIONS from "../configs/nav";
import { Flex } from "./styled";

function Header() {
  return (
    <Flex
      sx={{
        padding: "20px 30px",
        justifyContent: "space-between",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 2,
      }}
    >
      <Flex>
        <Box
          component="img"
          src="logo192.png"
          width={40}
          height={40}
          mr="10px"
          alt="logo"
        />
        {NAV_SECTIONS.map((nav: any, i: any) => (
          <ListNavItem key={i} nav={nav} />
        ))}
      </Flex>
      <Flex>
        <ConnectButton />
      </Flex>
    </Flex>
  );
}

export default Header;
