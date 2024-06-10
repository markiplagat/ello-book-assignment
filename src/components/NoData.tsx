import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import { NoDataIcon } from "./Svgs/NoDataIcon";

interface NoDataProps {
    message: string | null;
  }

const NoData: React.FC<NoDataProps> = ({message}) => {
  return (
    <Box sx={{ height: "50%", display: "flex", p: 2 }}>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <NoDataIcon color="primary-yellow" width={250} height={150} />
          </Box>
        </Grid>
        <Grid item md={12} sx={{ mt: 1 }}>
          {message && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography sx={{ textAlign: "center" }} variant="h5">
                {message}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
NoData.defaultProps = {
  message: null,
};
NoData.propTypes = {
  message: PropTypes.string,
};
export default NoData;
