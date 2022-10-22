import { Container, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
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
import one from "../../images/one.jpg";
import two from "../../images/two.jpg";
import three from "../../images/three.jpg";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";
import six from "../../images/six.png";
import seven from "../../images/seven.png";
import eight from "../../images/eight.png";
import nine from "../../images/nine.png";
import ten from "../../images/ten.png";
import eleven from "../../images/eleven.png";
import twelve from "../../images/twelve.png";
import thirteen from "../../images/thirteen.png";
import fourteen from "../../images/fourteen.jpg";
import fifteen from "../../images/fifteen.jpg";
import sixteen from "../../images/sixteen.jpg";
import seventeen from "../../images/seventeen.jpg";
import eighteen from "../../images/eighteen.jpg";
import ninteen from "../../images/ninteen.jpg";
import twenty from "../../images/twenty.jpg";
import twentyOne from "../../images/twentyOne.jpg";
import twentyTwo from "../../images/twentyTwo.jpg";
import twentyThree from "../../images/twentyThree.jpg";
import twentyFour from "../../images/twentyFour.jpg";
import twentyFive from "../../images/twentyFive.jpg";
import twentySix from "../../images/twentySix.jpg";
import twentySeven from "../../images/twentySeven.jpg";
import twentyEight from "../../images/twentyEight.jpg";
import twentyNine from "../../images/twentyNine.jpg";
import thirty from "../../images/thirty.jpg";
import thirtyOne from "../../images/thirtyOne.jpg";
import thirtyTwo from "../../images/thirtyTwo.jpg";
import thirtyThree from "../../images/thirtyThree.jpg";
import thirtyFour from "../../images/thirtyFour.jpg";
import thirtyFive from "../../images/thirtyFive.jpg";
import thirtySix from "../../images/thirtySix.jpg";
import thirtySeven from "../../images/thirtySeven.jpg";
import thirtyEight from "../../images/thirtyEight.jpg";
import thirtyNine from "../../images/thirtyNine.png";
import fourty from "../../images/fourty.png";
import fourtyOne from "../../images/fourtyOne.jfif";
import fourtyTwo from "../../images/fourtyTwo.jfif";
import fourtyThree from "../../images/fourtyThree.jfif";
import fourtyFour from "../../images/fourtyFour.jfif";
import fourtyFive from "../../images/fourtyFive.jfif";
import fourtySix from "../../images/fourtySix.jfif";
import fourtySeven from "../../images/fourtySeven.png";
import fourtyEight from "../../images/fourtyEight.png";
import fourtyNine from "../../images/fourtyNine.jfif";
import fifty from "../../images/fifty.jfif";
import fiftyOne from "../../images/fiftyOne.jfif";
import Loader from "../../components/Loader/Loader";

type GalleryProps = {
  id: number;
  gallery_img: string;
}[];

const Gallery = () => {
  const [galleries, setGalleries] = useState<GalleryProps>([
    {
      id: 1,
      gallery_img: scene_one_img,
    },
    {
      id: 2,
      gallery_img: scene_two_img,
    },
    {
      id: 3,
      gallery_img: scene_three_img,
    },
    {
      id: 4,
      gallery_img: scene_four_img,
    },
    {
      id: 5,
      gallery_img: scene_five_img,
    },
    {
      id: 6,
      gallery_img: scene_six_img,
    },
    {
      id: 7,
      gallery_img: scene_seven_img,
    },
    {
      id: 8,
      gallery_img: scene_eight_img,
    },
    {
      id: 9,
      gallery_img: scene_nine_img,
    },
    {
      id: 10,
      gallery_img: scene_ten_img,
    },
    {
      id: 11,
      gallery_img: scene_eleven_img,
    },
    {
      id: 12,
      gallery_img: one,
    },
    {
      id: 13,
      gallery_img: two,
    },
    {
      id: 14,
      gallery_img: three,
    },
    {
      id: 15,
      gallery_img: four,
    },
    {
      id: 16,
      gallery_img: five,
    },
    {
      id: 17,
      gallery_img: six,
    },
    {
      id: 18,
      gallery_img: seven,
    },
    {
      id: 19,
      gallery_img: eight,
    },
    {
      id: 20,
      gallery_img: nine,
    },
    {
      id: 21,
      gallery_img: ten,
    },
    {
      id: 22,
      gallery_img: eleven,
    },
    {
      id: 23,
      gallery_img: twelve,
    },
    {
      id: 24,
      gallery_img: thirteen,
    },
    {
      id: 25,
      gallery_img: fourteen,
    },
    {
      id: 26,
      gallery_img: fifteen,
    },
    {
      id: 27,
      gallery_img: sixteen,
    },
    {
      id: 28,
      gallery_img: seventeen,
    },
    {
      id: 29,
      gallery_img: eighteen,
    },
    {
      id: 30,
      gallery_img: ninteen,
    },
    {
      id: 31,
      gallery_img: twenty,
    },
    {
      id: 32,
      gallery_img: twentyOne,
    },
    {
      id: 33,
      gallery_img: twentyTwo,
    },
    {
      id: 34,
      gallery_img: twentyThree,
    },
    {
      id: 35,
      gallery_img: twentyFour,
    },
    {
      id: 36,
      gallery_img: twentyFive,
    },
    {
      id: 37,
      gallery_img: twentySix,
    },
    {
      id: 38,
      gallery_img: twentySeven,
    },
    {
      id: 39,
      gallery_img: twentyEight,
    },
    {
      id: 40,
      gallery_img: twentyNine,
    },
    {
      id: 41,
      gallery_img: thirty,
    },
    {
      id: 42,
      gallery_img: thirtyOne,
    },
    {
      id: 43,
      gallery_img: thirtyTwo,
    },
    {
      id: 44,
      gallery_img: thirtyThree,
    },
    {
      id: 45,
      gallery_img: thirtyFour,
    },
    {
      id: 46,
      gallery_img: thirtyFive,
    },
    {
      id: 47,
      gallery_img: thirtySix,
    },
    {
      id: 48,
      gallery_img: thirtySeven,
    },
    {
      id: 49,
      gallery_img: thirtyEight,
    },
    {
      id: 50,
      gallery_img: thirtyNine,
    },
    {
      id: 51,
      gallery_img: fourty,
    },
    {
      id: 52,
      gallery_img: fourtyOne,
    },
    {
      id: 53,
      gallery_img: fourtyTwo,
    },
    {
      id: 54,
      gallery_img: fourtyThree,
    },
    {
      id: 55,
      gallery_img: fourtyFour,
    },
    {
      id: 56,
      gallery_img: fourtyFive,
    },
    {
      id: 57,
      gallery_img: fourtySix,
    },
    {
      id: 58,
      gallery_img: fourtySeven,
    },
    {
      id: 59,
      gallery_img: fourtyEight,
    },
    {
      id: 60,
      gallery_img: fourtyNine,
    },
    {
      id: 61,
      gallery_img: fifty,
    },
    {
      id: 62,
      gallery_img: fiftyOne,
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
              paddingLeft: {
                xs: "70px",
              },
            }}
          >
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
        </div>
      )}
    </>
  );
};

export default Gallery;
