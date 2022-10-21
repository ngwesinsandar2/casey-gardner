import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import FavCaseyScenesStyle from "./fav.module.css"

type favScene = {
  id?: number | undefined;
  scene_img?: string | undefined;
  scene_title?: string | undefined;
  caption?: string | undefined;
};

type ValueProps = { theme: string; switchTheme: () => void };

export default function SceneCard(props: { favScenes: favScene[] }) {
  const value = useContext<ValueProps | null>(ThemeContext);

  return (
    <>
      {props.favScenes.map((s: favScene) => {
        return (
          <Grid item xs={12} md={6} xl={4}>
            <Card sx={{ maxWidth: 345 }} key={s.id} variant="outlined" className={`${value?.theme === "dark" && FavCaseyScenesStyle.cardDark}`}>
              <CardMedia
                component="img"
                alt={s.scene_title}
                height="140"
                image={s.scene_img}
              />
              <CardContent sx={{padding: "10px !important"}}>
                <Typography variant="h6">
                  {s.scene_title}
                </Typography>
                <Typography variant="caption">
                  {s.caption}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}