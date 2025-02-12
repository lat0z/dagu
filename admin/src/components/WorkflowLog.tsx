import { Paper } from "@mui/material";
import React from "react";
import { LogFile } from "../api/Workflow";
import Loading from "./Loading";

type Props = {
  log?: LogFile;
};

function WorkflowLog({ log }: Props) {
  if (!log) {
    return <Loading />;
  }
  return (
    <Paper
      sx={{
        pb: 4,
        px: 2,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        overflowX: "auto",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
    >
      <pre
        style={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "Courier New, Courier, monospace",
        }}
      >
        {log.Content || "<No log output>"}
      </pre>
    </Paper>
  );
}

export default WorkflowLog;
