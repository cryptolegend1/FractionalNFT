import {
  Box,
  Container,
  FormControlLabel,
  IconButton,
  Switch,
  SwitchProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

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

export const FavoriteIconButton = styled(IconButton)`
  background: #fff;
  box-shadow: 0 12px 40px rgb(31 47 70 / 8%);
  .MuiSvgIcon-root {
    fill-opacity: 0.2;
  }
  &:hover {
    background: #fff;
    .MuiSvgIcon-root {
      fill-opacity: 0.4;
    }
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  padding: 8px;
  border: 2px solid #e4e6e9;
  border-radius: 8px;
  margin: 8px 0 0 0;
`;

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  margin: "4px 12px",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
