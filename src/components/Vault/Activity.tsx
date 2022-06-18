import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Flex } from "../styled";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BidTradeDialog from "./BidTradeDialog";

function Activity() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "6rem",
        marginTop: "60px",
      }}
    >
      <Box flex={1}>
        <Box sx={{ marginBottom: "60px" }}>
          <Typography variant="h4" marginBottom="1rem">
            Description
          </Typography>
          <Typography color="rgb(143, 151, 163)">
            CryptoPunk #7171, aka "Uncle" Hoodie + pipe gang. Make sure to join
            discord.gg/fractional and verify ownership of your HOODIE token. We
            have a special #hoodie-gang chat for holders!
          </Typography>
        </Box>
        <Box marginBottom="60px">
          <Flex justifyContent="space-between" marginBottom="40px">
            <Box width="40%">
              <Typography variant="h4" marginBottom="1rem">
                COLLECTABLE SUPPLY
                <Tooltip
                  title="The current portion of total fraction supply available for purchase on decentralized exchange."
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
              <Typography variant="h3" marginBottom="4px">
                13.11 %
              </Typography>
              <Typography variant="h5" color="rgb(143, 151, 163)">
                = 1,311.134 HOODIE
              </Typography>
            </Box>
            <Box width="40%">
              <Typography variant="h4" marginBottom="1rem">
                IMPLIED VALUATION
                <Tooltip
                  title="Implied valuation = (Total fraction supply) * (Current token price)."
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
              <Typography variant="h3" marginBottom="4px">
                Ξ 183.95
              </Typography>
              <Typography variant="h5" color="rgb(143, 151, 163)">
                ≈ $ 224.2K
              </Typography>
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Box width="40%">
              <Typography variant="h4" marginBottom="1rem">
                FRACTIONS
                <Tooltip
                  title="The total number of fractions minted for the vault."
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
              <Typography variant="h3" marginBottom="4px">
                10,000 HOODIE
              </Typography>
            </Box>
            <Box width="40%">
              <Typography variant="h4" marginBottom="1rem">
                CURATOR FEE
                <Tooltip
                  title="Annual fraction inflation (percentage of the total supply) auto-minted and paid to the creator."
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
              <Typography variant="h3" marginBottom="4px">
                0%
              </Typography>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Typography variant="h4" marginBottom="1rem">
            Proof Of Authenticity
          </Typography>
          <Button variant="outlined" fullWidth sx={{ marginBottom: "8px" }}>
            Verified by fractional
          </Button>
          <Button variant="outlined" fullWidth sx={{ marginBottom: "8px" }}>
            View on Etherscan
          </Button>
          <Button variant="outlined" fullWidth sx={{ marginBottom: "8px" }}>
            View on Opensea
          </Button>
        </Box>
      </Box>
      <Box flex={1}>
        <BidTradeDialog />
      </Box>
    </Box>
  );
}

export default Activity;
