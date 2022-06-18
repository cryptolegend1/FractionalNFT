import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ANALYSIS from "../../configs/analysis";

interface IProps {
  title: string;
}

function ListItem({ title }: IProps) {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Divider sx={{ margin: "24px 0" }} />
    </Box>
  );
}

function AnalysisTab() {
  return (
    <Box display="flex" justifyContent="space-around" flexWrap="wrap" my={4}>
      <Box width="260px" marginTop="24px">
        {ANALYSIS.map((ai) => (
          <ListItem title={ai.title} />
        ))}
      </Box>
      <Box
        sx={{
          flex: 1,
          padding: "2rem",
          background: "#fff",
          borderRadius: "16px",
          marginLeft: "4rem",
        }}
      >
        {ANALYSIS.map((ai) => (
          <Box marginY={4}>
            <Typography variant="h2">{ai.title}</Typography>
            <Typography>{ai.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AnalysisTab;
