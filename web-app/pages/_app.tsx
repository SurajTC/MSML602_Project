import type { AppProps } from "next/app";
import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Fade,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import BrightnessHighRoundedIcon from "@mui/icons-material/BrightnessHighRounded";
import BrightnessMediumRoundedIcon from "@mui/icons-material/BrightnessMediumRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  const theme = createTheme({
    palette: {
      mode: isLight ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Box
              p={1.5}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={1}
                sx={{
                  cursor: "pointer",
                }}
              >
                <CloudRoundedIcon fontSize="large" />
                <Typography variant="h5">Weather</Typography>
              </Box>

              <IconButton
                aria-label="switch-theme"
                onClick={() => setIsLight((prev) => !prev)}
                sx={{ color: "text.primary" }}
              >
                {isLight ? (
                  <BrightnessHighRoundedIcon />
                ) : (
                  <BrightnessMediumRoundedIcon />
                )}
              </IconButton>
            </Box>
          </Container>
        </AppBar>
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Container maxWidth="xl">
            <Typography>2022</Typography>
          </Container>
        </AppBar>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
