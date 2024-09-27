import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const Post = ({img, title, description}) => {
    return (
        <Card sx={{my: 2.5}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image= {img}
                sx={{height: 300}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, consectetur doloribus esse facilis maxime pariatur sit voluptas! At beatae esse et, explicabo neque nihil nulla similique, vel veritatis vero voluptatum."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post