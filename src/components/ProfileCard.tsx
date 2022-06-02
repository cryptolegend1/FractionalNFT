import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Divider } from "@mui/material";
import { Avatar, Flex } from "./styled";

export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
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
          <Typography variant="h6" py={2}>
            CryptoPunks
          </Typography>
          <Typography variant="subtitle1" pb={3}>
            0xBeC69dfcE...6B06
          </Typography>
          <Divider />
          <Flex justifyContent="space-between" mt={3} textAlign="left">
            <Box>
              <Typography variant="subtitle1" pb={1}>
                TOTAL COLLECTION VALUE
              </Typography>
              <Typography variant="h6" pb={1}>
                Ξ 82.407586
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" pb={1}>
                # OF VAULTS
              </Typography>
              <Typography variant="h6" pb={1}>
                2
              </Typography>
            </Box>
          </Flex>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
