import {Avatar, AvatarGroup, Box, ImageList, ImageListItem, Stack, Typography} from "@mui/material";
import galleryImages from "../store/galleryImages.js";

const RightBar = () => {


    return (
        <Stack sx={{mr: 2, mt: 2}} spacing={3}>
            <Box>
                <Typography variant="h6" component="span" sx={{color: "text.secondary"}}>
                    Online Friends
                </Typography>
                <AvatarGroup total={15} max={6} sx={{justifyContent: "start"}}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg"/>
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg"/>
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg"/>
                    <Avatar alt="Alex Henderson" src="https://mui.com/static/images/avatar/6.jpg"/>
                    <Avatar alt="Josef Henderson" src="https://mui.com/static/images/avatar/7.jpg"/>
                </AvatarGroup>
            </Box>

            <ImageList variant="quilted" cols={3} rowHeight={164} >
                {galleryImages.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Stack>
    )
}

export default RightBar