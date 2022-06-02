import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Divider } from "@mui/material";
import { Avatar, Flex } from "./styled";

export default function CollectionCard() {
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://assets.fractional.art/media/collections/backgrounds/Cryptopunks.jpg"
          alt="banner image"
        />
        <CardContent>
          <Avatar
            component="img"
            src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120"
          />
          <Flex py={2} alignItems="normal" justifyContent="center" gap="5px">
            <Typography variant="h6" component="span">
              CryptoPunks
            </Typography>
            <Box component="img" src="assets/verified.svg" />
          </Flex>
          <Divider />
          <Flex gap="40px" mt={3} textAlign="left">
            <Box>
              <Typography variant="subtitle1" pb={1}>
                # OF VAULTS
              </Typography>
              <Typography variant="h6" pb={1}>
                28
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" pb={1}>
                # OF NFTS
              </Typography>
              <Typography variant="h6" pb={1}>
                143
              </Typography>
            </Box>
          </Flex>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
