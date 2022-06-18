import { Box, Typography } from "@mui/material";
import React from "react";
import NFTBadge from "../Badges/NFTBadge";
import VerificationBadge from "../Badges/VerificationBadge";
import LiveBadge from "../Badges/LiveBadge";
import { Flex } from "../styled";

function Overview() {
  return (
    <Box textAlign="center">
      <Typography variant="h1" marginBottom="16px">
        CryptoPunk #7171
      </Typography>
      <Flex gap="10px" justifyContent="center" marginBottom="3rem">
        <NFTBadge nftCount={1} />
        <VerificationBadge verified />
        <LiveBadge />
      </Flex>
      <Box>
        <Box
          component="img"
          src="https://lh3.googleusercontent.com/UR8xapHNICh9Cn8qSTrw1d2byFW4txAOSYCskmktiN8-pMqy6pibZVOAB8vtHhs81LK9v7D2c-2PmahKV07mPMINBdO6CUsAAWBt6Q"
          sx={{ maxWidth: "500px", borderRadius: "24px" }}
        />
      </Box>
    </Box>
  );
}

export default Overview;
