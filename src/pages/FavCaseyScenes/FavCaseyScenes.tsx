import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import SceneCard from "./SceneCard";
//images-of-fav-scenes
import scene_one_img from "../../images/scene_one.png";
import scene_two_img from "../../images/scene_two.png";
import scene_three_img from "../../images/scene_three.png";
import scene_four_img from "../../images/scene_four.png";
import scene_five_img from "../../images/scene_five.jpg";
import scene_six_img from "../../images/scene_six.jpg";
import scene_seven_img from "../../images/scene_seven.jpg";
import scene_eight_img from "../../images/scene_eight.png";
import scene_nine_img from "../../images/scene_nine.png";
import scene_ten_img from "../../images/scene_ten.jpg";
import scene_eleven_img from "../../images/scene_eleven.jpg";
import Loader from "../../components/Loader/Loader";

type SceneProps = {
  id: number;
  scene_img: string;
  scene_title: string;
  caption?: string;
}[];

const FavCaseyScenes = () => {
  const [scenes, setScenes] = useState<SceneProps>([
    {
      id: 1,
      scene_img: scene_one_img,
      scene_title: "1. Punching a bulley",
    },
    {
      id: 2,
      scene_img: scene_two_img,
      scene_title: "2. Protective Gf",
    },
    {
      id: 3,
      scene_img: scene_three_img,
      scene_title: "3. Confession",
    },
    {
      id: 4,
      scene_img: scene_four_img,
      scene_title: "4. Teaching",
      caption: "(How to ride a bicycle?)",
    },
    {
      id: 5,
      scene_img: scene_five_img,
      scene_title: "5. For Dad",
    },
    {
      id: 6,
      scene_img: scene_six_img,
      scene_title: "6. Go to a party",
    },
    {
      id: 7,
      scene_img: scene_seven_img,
      scene_title: "7. Support System",
      caption: "(I'll be your support system.)",
    },
    {
      id: 8,
      scene_img: scene_eight_img,
      scene_title: "8. Clothes Restriction",
    },
    {
      id: 9,
      scene_img: scene_nine_img,
      scene_title: "9. Support system",
    },
    {
      id: 10,
      scene_img: scene_ten_img,
      scene_title: "10. Getting together",
    },
    {
      id: 11,
      scene_img: scene_eleven_img,
      scene_title: "11. First Time",
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
};

export default FavCaseyScenes;
