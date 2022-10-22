import { Container, Grid, Box, Typography } from "@mui/material";
import video from "../../../images/casey-video.mp4";

const Content = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: {
            xs: "70px"
          }
        }}
      >
        <Grid
          container
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4">
                I watched{" "}
                <a href="https://sflix.to/tv/free-atypical-hd-38379" target="_blank" rel="noreferrer"><i style={{ color: "var(--primary-color)" }}>Atypical</i></a> for
                the plot
              </Typography>
              <Typography variant="h6">The plot :</Typography>
              <Typography variant="caption" display="block">
                (video is from pinterest. I don't own this video. crd to
                original owner)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "90%",
                display: "flex",
                alignItems: {
                  lg: "center"
                },
                justifyContent: {
                  xs: "flex-start",
                  lg: "flex-end"
                },
              }}
            >
              <video
                width="70%"
                height="100%"
                controls
                autoPlay
                muted
                style={{ cursor: "pointer" }}
              >
                <source src={video} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Content;
