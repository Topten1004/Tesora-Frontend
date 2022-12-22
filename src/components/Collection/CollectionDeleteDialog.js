import * as React from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { CollectionDelete } from '../../redux/actions/actions';

import CloseIcon from '@mui/icons-material/Close';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    useMediaQuery
} from '@mui/material'

import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            width: '500px',
        },
        "& .MuiDialogTitle-root": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid lightgrey',
            marginBottom: '20px'
        },
        "& .MuiDialogActions-root": {
            borderTop: '1px solid lightgrey',
        },
        "& .MuiButtonBase-root": {
            textTransform: 'unset'
        }
    }
}));

const CollectionDeleteDialog = (props) => {

    const {
        open,
        handleClose,
        CollectionDelete
    } = props;

    const classes = useStyles();
    const theme = useTheme();
    const { collection_id } = useParams();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleSubmit = () => {
        CollectionDelete(collection_id);
        handleClose();
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            className={classes.root}
        >
            <DialogTitle>
                Confirmation
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to delete this collection?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' autoFocus onClick={handleClose} >
                    Cancel
                </Button>
                <Button variant='contained' onClick={handleSubmit} autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    CollectionDelete
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDeleteDialog);