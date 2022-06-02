import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Container)`
  padding-top: 2rem;
`;
export const Flex = styled(Box)`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(Box)`
  border: 4px solid #eee;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin: -53px auto 0;
`;
