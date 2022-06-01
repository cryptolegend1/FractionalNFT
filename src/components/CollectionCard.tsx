import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Divider, styled } from "@mui/material";
import { Flex } from "./styled";

const CollectionAvatar = styled(Box)`
  border: 4px solid #eee;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin: -53px auto 0;
`;

export default function CollectionCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://assets.fractional.art/media/collections/backgrounds/Cryptopunks.jpg"
          alt="green iguana"
        />
        <CardContent>
          <CollectionAvatar
            component="img"
            src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120"
          />
          <Box py={2}>
            <Typography gutterBottom variant="h6" component="div">
              CryptoPunks
            </Typography>
          </Box>
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
