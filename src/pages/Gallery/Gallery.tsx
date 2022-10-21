import {
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import api from "../../api/axios";

type GalleryProps = {
  id?: number | undefined;
  gallery_img?: string | undefined;
}[];

const Gallery = () => {
  const [galleries, setGalleries] = useState<GalleryProps>([]);

  useEffect(() => {
    api
      .get("/gallery")
      .then((res) => {
        setGalleries(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Nav />

      <Container maxWidth="lg" sx={{
          paddingLeft: {
            xs: "70px"
          }
        }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {galleries.map((g) => (
            <ImageListItem key={g.id}>
              <img
                src={`${g.gallery_img}?w=248&fit=crop&auto=format`}
                srcSet={`${g.gallery_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Gallery;
