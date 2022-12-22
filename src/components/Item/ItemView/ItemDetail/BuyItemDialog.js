import * as React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';
import { BuyItem } from '../../../../redux/actions/actions';

import Loading from 'components/Common/Loading';

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

const BuyItemDialog = (props) => {

    const {
        open,
        handleClose,
        item_id,
        BuyItem
    } = props;

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [loading, setLoading] = useState(true);

    const handleSubmit = async () => {
        await BuyItem(item_id);
        setLoading(false);
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
                Buy Item
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to buy this item?
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

            {
                loading && <Loading />
            }
        </Dialog>
    );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    BuyItem
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyItemDialog);