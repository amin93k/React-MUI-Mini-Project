import {
    AppBar,
    InputAdornment,
    Stack,
    TextField,
    Toolbar,
    Typography,
    Badge,
    Avatar,
    IconButton,
    Box, Menu
} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DarKModeSwitch from "./DarKModeSwitch.jsx";
import MenuItem from "@mui/material/MenuItem";
import {useContext, useState} from "react";
import LeftBarContext from "../contexts/LeftBarContext.js";
import ThemeContext from "../contexts/ThemeContext.js";


const NavBar = () => {
    const [vertIconEl, setVertIconEl] = useState(null)
    const isMobileMenuAppeared = Boolean(vertIconEl)
    const [leftBarOpen, setLeftBarOpen] = useContext(LeftBarContext)
    const [darkMode, setDarkMode] = useContext(ThemeContext)

    const handleToggleMobileMenu = (event) => {
        setVertIconEl((prev) => (prev ? null : event.currentTarget))
    }

    const handleCloseMobileMenu = () => {
        setVertIconEl(null)
    }

    const handelLeftBarAppeared = () => {
        setLeftBarOpen(true)
    }

    const handelChangeTheme = () => {
        setDarkMode(prevStatus => !prevStatus)
    }

    return (
        <AppBar position="sticky">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {/*Menu Button & Logo*/}
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                }}>
                    <IconButton color="inherit" onClick={handelLeftBarAppeared}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" component="h1">
                        MUI Learn
                    </Typography>
                </Box>
                {/*Search Box*/}
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    fullWidth
                    sx={{
                        backgroundColor: 'rgba(230,230,230,0.7)',
                        borderRadius: 1,
                        flex: "grow",
                        maxWidth: "50%",
                        '& .MuiInputBase-input': {
                            fontSize: {xs: 12, md: 14},
                            paddingBlock: {xs: 0.8, sm: 1}
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            // this component for placement icon or text into input box
                            <InputAdornment position="start">
                                <SearchIcon sx={{cursor: "pointer"}}/>
                            </InputAdornment>
                        ),
                    }}
                />
                {/*Notification & Dark Mode*/}
                <Stack
                    direction='row'
                    spacing={0.5}
                    sx={{
                        display: {xs: 'none', md: "flex"},
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <IconButton color='inherit'>
                        <Badge badgeContent={4} color="warning" max={10} variant="dot">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton color='inherit'>
                        <Badge badgeContent={12} color="warning" max={10} variant="dot">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Avatar sx={{width: 30, height: 30}}>
                            A
                        </Avatar>
                    </IconButton>
                    <DarKModeSwitch checked={darkMode} onChange={handelChangeTheme}/>
                </Stack>

                {/*Mobile More Button & Menu*/}
                <IconButton
                    id="mobile-menu-collapse"
                    color="inherit"
                    sx={{display: {xs: "inline-flex", md: "none"}}}
                    aria-controls={isMobileMenuAppeared ? 'mobile-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMobileMenuAppeared ? 'true' : undefined}
                    onClick={handleToggleMobileMenu}>
                    <MoreVertIcon/>

                    <Menu
                        id="mobile-menu"
                        sx={{display: {xs: "block", md: "none"}}}
                        anchorEl={vertIconEl}
                        open={isMobileMenuAppeared}
                        onClose={handleCloseMobileMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseMobileMenu} sx={{gap: 1.5, paddingBlock: 1}}>
                            <Badge badgeContent={4} color="warning" max={10} variant="dot">
                                <MailIcon/>
                            </Badge>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleCloseMobileMenu} sx={{gap: 1.5, paddingBlock: 1}}>
                            <Badge badgeContent={12} color="warning" max={10} variant="dot">
                                <NotificationsIcon/>
                            </Badge>
                            My account
                        </MenuItem>
                        <MenuItem onClick={handleCloseMobileMenu} sx={{gap: 1.5, paddingBlock: 1}}>
                            <Avatar sx={{width: 30, height: 30}}>
                                A
                            </Avatar>
                            Logout
                        </MenuItem>
                        <MenuItem sx={{justifyContent: "center", paddingBlock: 1}}>
                            <DarKModeSwitch checked={darkMode} onChange={handelChangeTheme}/>
                        </MenuItem>
                    </Menu>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar