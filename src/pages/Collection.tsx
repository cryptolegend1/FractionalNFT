import {
  Box,
  Button,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, StyledContainer } from "../components/styled";
import VaultSortSelect from "../components/VaultSortSelect";
import VaultsTab from "../components/Tabs/VaultsTab";
import AnalysisTab from "../components/Tabs/AnalysisTab";
import IosShareIcon from "@mui/icons-material/IosShare";
import TwitterIcon from "@mui/icons-material/Twitter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Collection() {
  const { collectionId } = useParams();
  console.log(collectionId);
  const [tab, setTab] = useState("vaults");

  const handleTabChange = (event: any, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        component="img"
        src="https://assets.fractional.art/media/collections/backgrounds/ENS.jpg"
        width="100%"
        height="320px"
        sx={{ objectFit: "cover" }}
      />
      <StyledContainer maxWidth="xl">
        <Flex sx={{ marginTop: "-130px", justifyContent: "space-between" }}>
          <Flex sx={{ gap: "20px" }}>
            <Box
              sx={{ padding: "6px", borderRadius: "50%", background: "#fff" }}
            >
              <Box
                component="img"
                src="https://lh3.googleusercontent.com/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ=s60"
                width={120}
                height={120}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              <Flex gap="10px">
                <Typography variant="h1" sx={{ color: "#fff" }}>
                  ENS: Ethereum Name Service
                </Typography>
                <Box component="img" src="/assets/verified.svg" width="30px" />
              </Flex>
              <Flex
                sx={{
                  background: "#fff",
                  gap: "5px",
                  width: "fit-content",
                  padding: "12px 16px",
                  borderRadius: "22px",
                }}
              >
                <Typography variant="h4">0x57f188...47eA85</Typography>
              </Flex>
            </Box>
          </Flex>
          <Flex gap="10px" marginTop="45px">
            <IconButton
              aria-label="twitter"
              color="inherit"
              sx={{ background: "#fff", ":hover": { background: "#fff" } }}
            >
              <TwitterIcon />
            </IconButton>
            <Button
              variant="contained"
              color="inherit"
              startIcon={<IosShareIcon />}
              sx={{ borderRadius: "50px", background: "#fff", color: "#000" }}
            >
              Share
            </Button>
          </Flex>
        </Flex>
        <Flex sx={{ marginY: "40px", justifyContent: "space-between" }}>
          <Box width="33%">
            <Typography variant="h3" color="#ccc" mb="20px">
              About Collection
            </Typography>
            <Typography variant="body2">
              Read on to learn about ENS: Ethereum Name Service background,
              cultural significance, and other key information.
            </Typography>
          </Box>
          <Box width="50%" justifyContent="space-between" display="flex">
            <Box>
              <Typography variant="h6" pb={1}>
                # OF VAULTS
              </Typography>
              <Typography variant="h3">8</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography variant="h6" pb={1}>
                OWNERS
              </Typography>
              <Typography variant="h3">128</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography variant="h6" pb={1}>
                MARKET CAP
              </Typography>
              <Typography variant="h3">Ξ 2,478.09</Typography>
              <Typography variant="subtitle2" color="#8f97a3">
                $2,944,643.17
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography variant="h6" pb={1}>
                AVG. IMPLIED VAL.
                <Tooltip
                  title="Average implied valuation"
                  arrow
                  placement="top"
                >
                  <HelpOutlineIcon
                    fontSize="small"
                    sx={{
                      marginLeft: "10px",
                      verticalAlign: "text-bottom",
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              </Typography>
              <Typography variant="h3">Ξ 309.762</Typography>
              <Typography variant="subtitle2" color="#8f97a3">
                $368,080.40
              </Typography>
            </Box>
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="vaults" label="Vaults 455" />
            <Tab value="analysis" label="Analysis" />
          </Tabs>
          {tab === "vaults" && <VaultSortSelect />}
        </Flex>
        <Divider />
        {tab === "analysis" ? <AnalysisTab /> : <VaultsTab />}
      </StyledContainer>
    </>
  );
}

export default Collection;
