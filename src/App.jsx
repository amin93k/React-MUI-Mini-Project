import Navbar from "./components/NavBar.jsx";
import LeftBar from "./components/LeftBar.jsx";
import theme from "./theme.js";
import {ThemeProvider} from "@mui/material/styles";
import {Box, CssBaseline} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {useState} from "react";
import LeftBarContext from "./contexts/LeftBarContext.js";
import ThemeContext from "./contexts/ThemeContext.js"
import FeedUpdateContext from "./contexts/FeedUpdateContext.js";
import Feeds from "./components/Feeds.jsx";
import RightBar from "./components/RightBar.jsx";
import AddBtn from "./components/AddBtn.jsx";

const App = () => {
    const [leftBarOpen, setLeftBarOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [, setFeedUpdate] = useState(false)

    return (
        <>
            <ThemeProvider theme={theme(darkMode)}>
                <CssBaseline/>
                <LeftBarContext.Provider value={[leftBarOpen, setLeftBarOpen]}>
                    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
                        <Navbar/>
                    </ThemeContext.Provider>
                    <Box component="main" sx={{height: "100%"}}>
                        <LeftBar/>
                        <Grid container spacing={2}>
                            <Grid size={{xs: 12, sm: 8}}>
                                <FeedUpdateContext.Provider value={setFeedUpdate}>
                                    <Feeds/>
                                </FeedUpdateContext.Provider>
                            </Grid>
                            <Grid size={{sm: 4}} sx={{display: {sm: "block", xs: "none"}}}>
                                <RightBar/>
                            </Grid>
                        </Grid>
                        <FeedUpdateContext.Provider value={setFeedUpdate}>
                            <AddBtn/>
                        </FeedUpdateContext.Provider>
                    </Box>
                </LeftBarContext.Provider>
            </ThemeProvider>
        </>
    )
}

export default App