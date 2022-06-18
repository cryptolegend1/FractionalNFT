import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Divider,
  InputBase,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Flex } from "../styled";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function BidTradeDialog() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Auction / Bidding" {...a11yProps(0)} />
        <Tab label="Trade Fractions" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}>
        Auction / Bidding
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Button variant="outlined" size="small" startIcon={<SettingsIcon />}>
          Set Slippage
        </Button>
        <Box>
          <Flex justifyContent="space-between" sx={{ marginY: "16px" }}>
            <Typography variant="subtitle1" color="rgb(143,151,163)">
              YOU PAY
            </Typography>
            <Typography variant="subtitle1">BALANCE: 0 ETH</Typography>
          </Flex>
          <Flex
            sx={{
              padding: "8px 16px",
              border: "2px solid rgb(228,230,233)",
              borderRadius: "8px",
            }}
          >
            <Box flex={1}>
              <InputBase
                inputProps={{ inputMode: "decimal", pattern: "^d*[.,]?d*$" }}
                placeholder="0.0"
                sx={{ fontSize: "1.5rem", fontWeight: 700 }}
              />
              <Typography variant="h5" color="rgb(143,151,163)">
                ≈ ...
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                color="success"
                size="small"
                sx={{ marginRight: "8px" }}
              >
                Use Max
              </Button>
              <Button variant="outlined" color="info" size="small">
                ETH
              </Button>
            </Box>
          </Flex>
        </Box>
        <Divider sx={{ marginY: "24px" }}>1 ETH = ...DOG</Divider>
        <Box>
          <Flex justifyContent="space-between" sx={{ marginY: "16px" }}>
            <Typography variant="subtitle1" color="rgb(143,151,163)">
              YOU RECEIVE
            </Typography>
            <Typography variant="subtitle1">BALANCE: 0 DOG</Typography>
          </Flex>
          <Flex
            sx={{
              padding: "8px 16px",
              border: "2px solid rgb(228,230,233)",
              borderRadius: "8px",
            }}
          >
            <Box flex={1}>
              <InputBase
                inputProps={{ inputMode: "decimal", pattern: "^d*[.,]?d*$" }}
                placeholder="0.0"
                sx={{ fontSize: "1.5rem", fontWeight: 700 }}
              />
              <Typography variant="h5" color="rgb(143,151,163)">
                ≈ ...
              </Typography>
            </Box>
            <Box>
              <Button variant="outlined" color="info" size="small">
                DOG
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex marginY="16px" justifyContent="space-between">
            <Typography variant="h5" color="rgb(143,151,163)">
              Estimated Gas + Fees
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              $6.60
            </Typography>
          </Flex>
          <Flex marginY="16px" justifyContent="space-between">
            <Typography variant="h5" color="rgb(143,151,163)">
              Min. received
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              1,275,140 DOG
            </Typography>
          </Flex>
          <Flex marginY="16px" justifyContent="space-between">
            <Typography variant="h5" color="rgb(143,151,163)">
              Implied valuation
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              13,174.977 ETH
            </Typography>
          </Flex>
        </Box>
        <Button variant="contained" size="large" fullWidth>
          Review My Order
        </Button>
      </TabPanel>
    </Box>
  );
}
