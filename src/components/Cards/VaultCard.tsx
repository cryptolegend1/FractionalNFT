import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Chip, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteIconButton, Flex } from "../styled";
import VerificationBadge from "../Badges/VerificationBadge";
import NFTBadge from "../Badges/NFTBadge";
import LiveBadge from "../Badges/LiveBadge";

export default function VaultCard() {
  return (
    <Card sx={{ maxWidth: 350, position: "relative", cursor: "pointer" }}>
      <Flex
        justifyContent="space-between"
        position="absolute"
        px="16px"
        mt="16px"
        width="100%"
      >
        <Flex gap="5px">
          <NFTBadge nftCount={1} />
          <VerificationBadge verified />
        </Flex>
        <LiveBadge />
      </Flex>

      <CardMedia
        component="img"
        height="350"
        image="https://lh3.googleusercontent.com/UR8xapHNICh9Cn8qSTrw1d2byFW4txAOSYCskmktiN8-pMqy6pibZVOAB8vtHhs81LK9v7D2c-2PmahKV07mPMINBdO6CUsAAWBt6Q=s250"
        alt="banner image"
        sx={{
          objectFit: "contain",
          objectPosition: "bottom",
        }}
      />
      <CardContent sx={{ textAlign: "left" }}>
        <FavoriteIconButton
          size="large"
          color="default"
          sx={{
            position: "absolute",
            top: "325px",
            right: "15px",
          }}
        >
          <FavoriteIcon />
        </FavoriteIconButton>
        <Flex gap="10px">
          <Box
            component="img"
            src="https://assets.fractional.art/media/placeholder.png"
            width={12}
            height={12}
            sx={{ borderRadius: "50%" }}
          />
          <Typography variant="subtitle1">CryptoPunks</Typography>
          <Box
            component="img"
            src="assets/verified.svg"
            width={12}
            height={12}
            sx={{ borderRadius: "50%" }}
          />
        </Flex>
        <Typography variant="h3" py={2}>
          CryptoPunks #7171
        </Typography>
        <Chip
          avatar={<Avatar alt="Vaults owner" src="assets/example.svg" />}
          label="og.pleasrdao.eth"
          sx={{ marginBottom: "20px" }}
        />
        <Divider />
        <Flex justifyContent="space-between" mt={3}>
          <Box>
            <Typography variant="subtitle1" color="#8f97a3" pb={1}>
              FRACTIONS
            </Typography>
            <Typography variant="h6" pb={1}>
              17B
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="#8f97a3" pb={1}>
              COLLECTABLE SUPPLY
            </Typography>
            <Typography variant="h6" pb={1}>
              10.66%
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="#8f97a3" pb={1}>
              IMPLIED VALUATIOIN
            </Typography>
            <Typography variant="h6" pb={1}>
              Ξ 15.0K
            </Typography>
          </Box>
        </Flex>
      </CardContent>
    </Card>
  );
}
