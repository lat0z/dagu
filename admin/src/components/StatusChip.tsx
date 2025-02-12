import { Chip } from "@mui/material";
import React from "react";
import { statusColorMapping } from "../consts";
import { SchedulerStatus } from "../models/Status";

type Props = {
  status?: SchedulerStatus;
  children: string;
};

function StatusChip({ status, children }: Props) {
  const style = React.useMemo(() => {
    if (!status) {
      return {};
    }
    return statusColorMapping[status] || {};
  }, [status]);
  return (
    <Chip
      sx={[
        style,
        {
          fontWeight: "semibold",
        },
      ]}
      size="small"
      label={children}
    />
  );
}

export default StatusChip;
