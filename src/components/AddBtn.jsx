import {IconButton,} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {styled} from '@mui/material/styles';
import {useState} from "react";
import CreateModal from "./CreateModal.jsx";

const AddBtn = () => {
    const [openModal, setOpenModal] = useState(false)

    const handelToggleModal = () => {
        setOpenModal(prevState => !prevState)
    }

    const CustomBtn = styled(IconButton)(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
        color: "#e6e6e6",
        position: "fixed",
        bottom: 30,
        right: 25
    }));

    return (
        <>
            <CustomBtn onClick={handelToggleModal}>
                <AddIcon/>
            </CustomBtn>
            <CreateModal
                handelClose={handelToggleModal}
                openModalStatus={openModal}
                setOpenModalStatus={setOpenModal}/>
        </>
    )
}

export default AddBtn