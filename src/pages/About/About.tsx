import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Nav from "../../components/Nav/Nav";
import AboutStyle from "./about.module.css";
import about_img from "../../images/about_photo2.png";
import Loader from "../../components/Loader/Loader";

const caseyBio = [
  {
    id: 1,
    title: "Birthday",
    about: "March 15, 2002",
  },
  {
    id: 2,
    title: "Age",
    about: "16 years old",
  },
  {
    id: 3,
    title: "Gender",
    about: "Female",
  },
  {
    id: 4,
    title: "Sexual",
    about: "She comes out as bisexual in Season 4",
  },
  {
    id: 5,
    title: "Occupation",
    about: "High school Student",
  },
  {
    id: 6,
    title: "Alias1",
    about: "Newton (by Izzie)",
  },
];

const About = () => {
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

          <Container maxWidth="lg" sx={{ padding: "10px 0" }}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                color: "var(--primary-color)",
                fontStyle: "italic",
                paddingLeft: {
                  xs: "70px",
                },
              }}
            >
              Casey Gardner (My Girl)
            </Typography>

            <Grid
              container
              sx={{
                paddingLeft: {
                  xs: "70px",
                },
              }}
            >
              <Grid item xs={12} sx={{ height: "400px" }} mb={3}>
                <Box sx={{ width: "100%", height: "100%" }}>
                  <img
                    src={about_img}
                    className={AboutStyle.about_photo}
                    alt="about_photo"
                  />
                </Box>
              </Grid>

              {caseyBio.map((b) => {
                return (
                  <Grid item xs={12} md={6} key={b.id}>
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontSize: { xs: "20px", md: "24px" } }}
                      >
                        {b.title} - {b.about}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}

              <Grid item xs={12} mt={3}>
                <Box>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    sx={{ fontSize: "20px" }}
                  >
                    <i style={{ color: "var(--primary-color)" }}>
                      {" "}
                      Casey Gardner{" "}
                    </i>{" "}
                    is a main character throughout the first, second, third and
                    fourth seasons of the Netflix comedy drama series
                    <i style={{ color: "var(--primary-color)" }}> Atypical </i>.
                    She is a star track athlete at Newton High School and later
                    Clayton Prep. She is the daughter of Doug Gardner and Elsa
                    Gardner and the younger sister of Sam Gardner.
                    <br />
                    From{" "}
                    <a href="https://atypical.fandom.com/wiki/Casey_Gardner">
                      this link
                    </a>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

export default About;
