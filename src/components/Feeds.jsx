import {Container} from "@mui/material";
import Post from "./Post.jsx";
import feedsStore from "../store/feedsStore.js";
import {useContext} from "react";
import FeedUpdateContext from "../contexts/FeedUpdateContext.js";

const Feeds = () => {
    // Use when post created
    const setFeedUpdate = useContext(FeedUpdateContext)

    return (
        <Container>
            {feedsStore.map((item, index) => (
                <Post key={index} img={item.img} title={item.title} description={item.description}/>
            ))}
        </Container>
    )
}

export default Feeds