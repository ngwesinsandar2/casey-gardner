import { Grid, Box } from "@mui/material";
import LoaderStyle from "./loader.module.css"

const Loader = () => {
    return ( 
        <>
            <Grid container sx={{position: "fixed", top: "0", height: "100vh"}}>
                <Grid item xs={12}>
                    <Box className={LoaderStyle.loaderImgCon}>
                        {/* <Box sx={{ width: "100%", height: "100%", backgroundColor: "var(--primary-pale)"}}>
                        <span className={LoaderStyle.loader}>Loading</span>
                        </Box> */}
                        <span className={LoaderStyle.loader}>Loading</span>
                    </Box>
                </Grid>
            </Grid>
        </>
     );
}
 
export default Loader;