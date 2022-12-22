import React, { useState } from "react";

import { Link, useNavigate, useLocation } from 'react-router-dom';

import CollectionDeleteDialog from '../Collection/CollectionDeleteDialog'

import {
    Box, List, ListItem, Popover
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    popOver: {
        fontSize: '16px',

        "& .MuiListItem-root": {
            display: 'flex',
            alignItems: 'center',
            fontSize: "20px",
            fontWeight: "bold",
            color: 'rgba(44, 56, 74, 0.68)',
            cursor: 'pointer',

            "&:hover": {
                background: '#d8dbe0'
            }
        },
        "& a": {
            width: '100%',
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: 'unset'
        },
    },
}));

const CollectionPopover = (props) => {

    const {
        open,
        anchorRef,
        handleClosePopOver,
        popoverData,
        collection_id
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const handleChangeNavigate = (element) => {
        if (element.label === "Add Item") {
            navigate(element.link, { state: { data: collection_id } })
        }
        else
            navigate(element.link)
    }

    return (
        <>
            <Popover
                id="popover"
                open={open}
                anchorEl={anchorRef ? anchorRef.current : null}
                onClose={handleClosePopOver}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    style: { width: '200px' }
                }}
            >
                <Box className={classes.popOver}>
                    <List>
                        {
                            popoverData.map((element, index) => {
                                return (
                                    <ListItem key={index}
                                        sx={{
                                            "& a": {
                                                color:
                                                    location.pathname.includes(element.link)
                                                        ? "black !important"
                                                        : "rgba(44, 56, 74, 0.68) !important",
                                            }
                                        }}
                                        onClick={() => handleChangeNavigate(element)}
                                    >
                                        {element.label}
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Box>

            </Popover>
            <CollectionDeleteDialog
                open={openDialog}
                handleClose={handleCloseDialog}
            />
        </>
    )
}

export default CollectionPopover;