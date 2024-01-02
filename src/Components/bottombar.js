import * as React from 'react';

import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function BottomBar() {
    return (
      <Box id='bottombar'
        sx={{
          width: "100%",
          height: "auto",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h6">
                KOALA Library
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                © George McCannon <span id="year"> {new Date().getFullYear() } </span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }