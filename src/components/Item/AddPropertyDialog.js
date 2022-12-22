import * as React from 'react';

import { validate } from 'validate.js';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { IconButton, InputLabel, TextField } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiDialogTitle-root": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid lightgrey'
        },
        "& .MuiPaper-root": {
            width: '600px',
            position: 'absolute',
            top: 0,
        },
        "& .MuiDialogContent-root": {
            paddingTop: '20px !important'
        },
        "& .MuiDialogActions-root": {
            borderTop: '1px solid lightgrey',
            padding: '20px 24px 20px 24px'
        },
        "& .MuiOutlinedInput-root": {
            height: '40px',
            marginBottom: '20px'
        },
        "& .MuiButton-root": {
            width: '100px'
        }
    }
}))

const schema = {
    type: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 300,
        },
    },
    name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 300,
        },
    },
};

const Transition = React.forwardRef(function Transition(props, ref,) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const AddPropertyDialog = (props) => {

    const {
        open,
        handleClose,
        setAttributeList,
    } = props;

    const classes = useStyles();

    const [formState, setFormState] = React.useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    React.useEffect(() => {
        if (!open) {
            setFormState({
                isValid: false,
                values: {},
                touched: {},
                errors: {}
            })
        }
    }, [open])

    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            }
        }))
    }

    const handleSubmit = () => {
        if (formState.isValid) {
            setAttributeList(props => ({ ...props, values: [...props.values, formState.values] }))
            handleClose()
        }
    }


    React.useEffect(() => {

        const errors = validate(formState.values, schema);

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));

    }, [formState.values]);

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
            className={classes.root}
        >
            <DialogTitle >
                Add Property
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <InputLabel> Type </InputLabel>
                <TextField
                    fullWidth
                    name='type'

                    helperText={hasError('type') ? formState.errors.type[0] : null}
                    error={hasError('type')}
                    onChange={handleChange}
                    value={formState.values.type || ''}
                />
                <InputLabel> Name </InputLabel>
                <TextField
                    fullWidth
                    name='name'

                    helperText={hasError('name') ? formState.errors.name[0] : null}
                    error={hasError('name')}
                    onChange={handleChange}
                    value={formState.values.name || ''}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant='contained' onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddPropertyDialog;