import React, { useState, useEffect, useRef } from "react";

import { validate } from "validate.js";

import { connect } from "react-redux";
import { EditCollection } from "../../redux/actions/actions";

import { useStyles } from "./StyleDiv/CollectionEditStyleDiv";

import ImageIcon from "@mui/icons-material/Image";

import {
  Box,
  Paper,
  Button,
  InputLabel,
  FilledInput,
  InputAdornment,
  TextField,
} from "@mui/material";
import { BASE_URL } from "static/constants";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 300,
    },
  },
  royalties: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 300,
    },
  },
  description: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 300,
    },
  },
  logo: {
    presence: { allowEmpty: false, message: "is required" },
  },
  banner: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const EditCollectionForm = (props) => {
  const { collection, EditCollection } = props;

  const classes = useStyles();

  const [logo, setLogo] = useState({ preview: "", raw: "" });
  const [banner, setBanner] = useState({ preview: "", raw: "" });

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const handleChange = (event) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "file"
            ? event.target.files[0]
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleChangeLogo = (e) => {
    handleChange(e);
    if (e.target.files[0]) {
      setLogo({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleChangeBanner = (e) => {
    handleChange(e);
    if (e.target.files[0]) {
      setBanner({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleSubmit = () => {
    if (formState.isValid) {
      EditCollection(formState.values);
    }
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  useEffect(() => {
    const errors = validate(formState.values, schema);
    console.log(formState);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  useEffect(() => {
    if (collection) {
      console.log(collection);
      setFormState((formState) => ({
        ...formState,
        values: {
          ...collection,
          Royalties: 0,
        },
      }));
      if (collection.image)
        setLogo({
          preview: `${BASE_URL}${collection.image}`,
        });
      if (collection.banner)
        setBanner({
          preview: `${BASE_URL}${collection.banner}`,
        });
    }
  }, [collection]);

  return (
    <Box className={classes.root}>
      <Paper>
        <Box className={classes.header}>Update Your Collection</Box>

        <Box className={classes.form}>
          <InputLabel> Name </InputLabel>
          <TextField
            fullWidth
            name="name"
            helperText={hasError("name") ? formState.errors.name[0] : null}
            error={hasError("name")}
            onChange={handleChange}
            value={formState.values.name || ""}
          />

          <InputLabel> Royalties </InputLabel>
          <TextField
            fullWidth
            name="Royalties"
            type="number"
            helperText={
              hasError("Royalties") ? formState.errors.Royalties[0] : null
            }
            error={hasError("Royalties")}
            onChange={handleChange}
            value={
              formState.values.Royalties !== 0 ? formState.values.Royalties : 0
            }
          />

          <InputLabel> Description </InputLabel>
          <TextField
            fullWidth
            name="description"
            helperText={
              hasError("description") ? formState.errors.description[0] : null
            }
            error={hasError("description")}
            onChange={handleChange}
            value={formState.values.description || ""}
          />

          <InputLabel> Collection Logo </InputLabel>
          <InputLabel htmlFor="upload-logo" className={classes.fileInput}>
            {
              // formState.values.logo ?
              //     formState.values.logo.type.includes("image")
              //         ? <img src={`https://nftapplication.api.mycom.world${formState.values.logo}`} />
              //         : <video src={`https://nftapplication.api.mycom.world${formState.values.logo}`} autoPlay style={{ width: '100%', height: '100%' }} />
              //     : <ImageIcon />
              logo.preview ? <img src={logo.preview} /> : <ImageIcon />
            }
          </InputLabel>

          <input
            type="file"
            name="logo"
            id="upload-logo"
            onChange={(e) => handleChangeLogo(e)}
            hidden
          />

          <InputLabel sx={{ mt: 4 }}> Collection Banner </InputLabel>
          <InputLabel htmlFor="upload-banner" className={classes.fileInput}>
            {banner.preview ? <img src={banner.preview} /> : <ImageIcon />}
          </InputLabel>

          <input
            type="file"
            name="banner"
            id="upload-banner"
            onChange={(e) => handleChangeBanner(e)}
            hidden
          />

          <Box className={classes.submitBtn}>
            <Button variant="contained" onClick={handleSubmit}>
              Update
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  collection: state.editCollection.collection,
});

const mapDispatchToProps = {
  EditCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCollectionForm);
