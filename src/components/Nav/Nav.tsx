import { Container, Grid, Box, Tooltip, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PersonIcon from "@mui/icons-material/Person";
import CollectionsIcon from "@mui/icons-material/Collections";
import NavStyle from "./nav.module.css";
import { NavLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const navbarDatas = [
  {
    title: "HOME",
    toLink: "/",
    icon: HomeIcon,
  },
  {
    title: "FAV CASEY SCENES",
    toLink: "/fav_casey_scenes",
    icon: MovieFilterIcon,
  },
  {
    title: "ABOUT",
    toLink: "/about_casey",
    icon: PersonIcon,
  },
  {
    title: "GALLERY",
    toLink: "/gallery_casey",
    icon: CollectionsIcon,
  },
];

type ValueProps = { theme: string; switchTheme: () => void };

const Nav = () => {
  const value = useContext<ValueProps | null>(ThemeContext);

  let activeStyle = {
    backgroundColor: "var(--primary-pale)",
    borderRadius: "50%",
  };

  return (
    <>
      <Container maxWidth="lg" className={NavStyle.navbarCon}>
        <Box className={NavStyle.navbarBox}>
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navbarDatas.map((n) => {
              return (
                <Grid
                  item
                  key={n.title}
                  xs={12}
                  md={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Tooltip
                    title={n.title}
                    placement="right"
                    arrow
                    componentsProps={{
                      tooltip: {
                        sx: {
                          backgroundColor: "var(--primary-color)",
                        },
                      },
                    }}
                  >
                    <NavLink
                      to={n.toLink}
                      end
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      <IconButton>
                        <n.icon sx={{ color: "var(--primary-color)" }} />
                      </IconButton>
                    </NavLink>
                  </Tooltip>
                </Grid>
              );
            })}

            {/* Dark Mode Light Mode */}
            <Grid
              item
              xs={12}
              md={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip
                title={value?.theme === "light" ? "DARK MODE" : "LIGHT MODE"}
                placement="right"
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "var(--primary-color)",
                    },
                  },
                }}
              >
                <IconButton onClick={value?.switchTheme}>
                  {value?.theme === "light" ? (
                    <DarkModeIcon sx={{ color: "var(--primary-color)" }} />
                  ) : (
                    <LightModeIcon sx={{ color: "var(--primary-color)" }} />
                  )}
                </IconButton>
              </Tooltip>
            </Grid>

            {/* Setting */}
            {/* <Grid
              item
              xs={12}
              md={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip
                title="Settings"
                placement="right"
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "var(--primary-color)",
                    },
                  },
                }}
              >
                <IconButton>
                  <SettingsIcon sx={{ color: "var(--primary-color)" }} />
                </IconButton>
              </Tooltip>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Nav;
