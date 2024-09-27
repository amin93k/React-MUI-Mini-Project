import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CollectionsIcon from '@mui/icons-material/Collections';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {useContext} from "react";
import LeftBarContext from "../contexts/LeftBarContext.js";

const sideBarLinks = [
    {icon: <OtherHousesIcon />, text: "Home"},
    {icon: <FormatListBulletedIcon />, text: "Lists"},
    {icon: <CollectionsIcon />, text: "Collection"},
    {icon: <SettingsIcon />, text: "Setting"},
    {icon: <LogoutIcon />, text: "Logout"},
]

const LeftBar = () => {
    const [leftBarOpen, setLeftBarOpen] = useContext(LeftBarContext)

    const handleDrawerClose = () => {
        setLeftBarOpen(false)
    }

    const drawerLink = (
        <List>
            {sideBarLinks.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton onClick={handleDrawerClose} sx={{paddingBlock: 1.5}}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            {item.text}
                        </Typography>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )

    return (
        <Box component='nav' sx={{width: 600}}>
            <Drawer
                variant="temporary"
                open={leftBarOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better performance on mobile
                }}
                sx={{
                    '& .MuiDrawer-paper': {width: 260 },
                }}
            >
                {drawerLink}
            </Drawer>
        </Box>
    )
}

export default LeftBar