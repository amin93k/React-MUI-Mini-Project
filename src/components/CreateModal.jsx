import {
    Alert,
    Box,
    Button,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import FeedUpdateContext from "../contexts/FeedUpdateContext.js";
import feedStore from "../store/feedsStore.js";
import getRandomImage from "../store/images.js"


const CreateModal = ({handelClose, openModalStatus, setOpenModalStatus}) => {
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const setFeedUpdate = useContext(FeedUpdateContext)

    const handelToggleSnackbar = () => {
        setOpenSnackbar(prevState => !prevState)
    }

    const onSubmit = (formData) => {
        setOpenModalStatus(false)
        setOpenSnackbar(true)
        feedStore.push({
            img: getRandomImage(),
            title: formData.title,
            description: formData.description
        })
        reset({
            title: "",
            description: ""
        })
    }
    // then create new post force re-render feed component
    useEffect(() => {
        setFeedUpdate(prev => !prev)
    }, [openSnackbar])


    const ModalWrapper = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.background.paper,
        width: 500,
        maxWidth: "100%",
        height: 440,
        maxHeight: "100%",
        borderRadius: 8,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        padding: 25,
        border: "none",
        outline: "none"
    }))

    return (
        <>
            <Modal
                open={openModalStatus}
                onClose={handelClose}
            >
                <ModalWrapper>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 20
                        }}
                    >
                        <TextField
                            name="title"
                            variant="outlined"
                            size="small"
                            label="Title"
                            fullWidth
                            focused
                            {...register("title", { required: true })}
                            error={Boolean(errors.title)}
                        />

                        <TextField
                            name="description"
                            variant="outlined"
                            size="small"
                            label="Description"
                            rows={3}
                            fullWidth
                            multiline
                            focused
                            {...register("description", { required: true })}
                            error={Boolean(errors.description)}
                        />
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <TextField
                                select
                                label="visibility"
                                defaultValue="public"
                                variant="standard"
                                focused
                                sx={{width: 100}}
                            >
                                <MenuItem value="public">Public</MenuItem>
                                <MenuItem value="private">Private</MenuItem>
                            </TextField>

                            <div>
                                <FormLabel id="radio-buttons-group">
                                    Who can commented?
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group"
                                    name="who-comment"
                                    defaultValue="everybody"
                                >
                                    <FormControlLabel value="everybody" control={<Radio/>} label="Everybody"/>
                                    <FormControlLabel value="friends" control={<Radio/>} label="My Friends"/>
                                    <FormControlLabel value="nobody" control={<Radio/>} label="Nobody"/>
                                </RadioGroup>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 20
                            }}
                        >
                            <Button onClick={handelClose} color="warning" variant="outlined">Cancel</Button>
                            <Button type="submit" color="primary" variant="outlined">Create</Button>
                        </div>
                    </form>
                </ModalWrapper>
            </Modal>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handelToggleSnackbar}>
                <Alert
                    onClose={handelToggleSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    Created post is success!
                </Alert>
            </Snackbar>
        </>
    )
}

export default CreateModal