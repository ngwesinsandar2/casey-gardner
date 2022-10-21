import { Container, Grid, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import api from "../../api/axios";
import SceneCard from "./SceneCard";

type SceneProps = {
  scene_img?: string | undefined;
  scene_title?: string | undefined;
}[];

const FavCaseyScenes = () => {
  const [scenes, setScenes] = useState<SceneProps>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get("/fav_casey_scenes")
      .then((res) => {
        setScenes(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Nav />

      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "10px 0 10px 70px",
            lg: "10px 0",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{ color: "var(--primary-color)", fontStyle: "italic" }}
        >
          Favourite Casey Scenes
        </Typography>
        <Grid container spacing={2} sx={{}}>
          <SceneCard favScenes={scenes} />
        </Grid>
      </Container>
    </>
  );
};

export default FavCaseyScenes;
