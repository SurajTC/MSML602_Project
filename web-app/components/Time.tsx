import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Time = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Box>
      <Typography variant="h6" pl={5}>
        {date.toLocaleTimeString("en-us", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Typography>
      <Box display="flex" gap={1} alignItems="center">
        <Typography variant="h4">
          <LocationOnIcon fontSize="inherit" />
        </Typography>
        <Typography variant="h4">New York, US</Typography>
      </Box>
      <br />
    </Box>
  );
};

export default Time;
