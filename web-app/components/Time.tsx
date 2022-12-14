import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

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
      <Typography variant="h6">
        {date.toLocaleTimeString("en-us", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Typography>
      <Typography variant="h4">New York, US</Typography>
      <br />
      <br />
    </Box>
  );
};

export default Time;
