import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux'
import { CreateItem } from 'redux/actions/actions';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import VideoFileIcon from '@mui/icons-material/VideoFile';

import {
    Box, Button, FormControl, InputLabel, TextField, Select, MenuItem, ListItem, FormLabel, RadioGroup, FormControlLabel, Radio, List, Grid, useMediaQuery
} from '@mui/material';
import Loading from 'components/Common/Loading';

const CreateItemForm = (props) => {

    const {
        classes,
        selectedMedia,
        formState,
        handleChange,
        handleChangeMedia,
        hasError,
        handleAddPropertiesOpen,
        handleAddLevelsOpen,
        handleAddStatsOpen,
        propertyList,
        levelList,
        statList,
        categories,
        collectionId,
        auctionStartDate,
        setAuctionStartDate,
        auctionEndDate,
        setAuctionEndDate,
        CreateItem
    } = props;

    const navigate = useNavigate();
    const match900 = useMediaQuery('(min-width : 900px)');

    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async () => {
        if (formState.isValid && collectionId) {
            setLoading(true);
            await CreateItem(formState.values, collectionId, auctionStartDate, auctionEndDate, navigate)
            setLoading(false);
        }
    }

    return (
        <Box className={classes.form}>
            <InputLabel> Name </InputLabel>
            <TextField
                fullWidth
                name='name'

                value={formState.values.name || ''}
                onChange={handleChange}
                helperText={hasError('name') ? formState.errors.name[0] : null}
                error={hasError('name')}
            />

            <InputLabel sx={{ mt: 2 }}> Description </InputLabel>
            <TextField
                fullWidth
                name='description'

                helperText={hasError('description') ? formState.errors.description[0] : null}
                error={hasError('description')}
                onChange={handleChange}
                value={formState.values.description || ''}
            />

            <Grid container spacing={2}>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Category </InputLabel>
                    <Select
                        fullWidth
                        name='categoryId'

                        value={formState.values.categoryId || ''}
                        onChange={handleChange}
                    >
                        {
                            categories?.map((element, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        value={element.category_id}
                                    >
                                        {element.title}
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Currency </InputLabel>
                    <Select
                        fullWidth
                        name='currency'

                        value={formState.values.currency || ''}
                        onChange={handleChange}
                    >
                        <MenuItem value={'eth'} > ETH </MenuItem>
                        <MenuItem value={'usd'} > USD </MenuItem>
                        <MenuItem value={'eur'} > EUR </MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Enable Auction</FormLabel>
                        <RadioGroup
                            row
                            name='auction'

                            value={formState.values.auction || ''}
                            onChange={handleChange}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="True" />
                            <FormControlLabel value={false} control={<Radio />} label="False" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <FormControl>
                        <FormLabel>On Auction</FormLabel>
                        <Box className={classes.onAuction}>
                            <input
                                type="datetime-local"
                                name='auctionStartDate'
                                value={auctionStartDate}
                                onChange={(e) => setAuctionStartDate(e.target.value)}
                                disabled={!(formState.values.auction === 'true')}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                type="datetime-local"
                                name='auctionEndDate'
                                selected={auctionEndDate}
                                onChange={(e) => setAuctionEndDate(e.target.value)}
                                disabled={!(formState.values.auction === 'true')}
                            />
                        </Box>
                    </FormControl>
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Price </InputLabel>
                    <TextField
                        fullWidth
                        name='price'

                        helperText={hasError('price') ? formState.errors.price[0] : null}
                        error={hasError('price')}
                        onChange={handleChange}
                        value={formState.values.price || ''}
                    />
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <InputLabel> Reserve price </InputLabel>
                    <TextField
                        fullWidth
                        name='reservePrice'
                        disabled={!(formState.values.auction === 'true')}

                        helperText={hasError('reservePrice') ? formState.errors.reservePrice[0] : null}
                        error={hasError('reservePrice')}
                        onChange={handleChange}
                        value={formState.values.reservePrice || ''}
                    />
                </Grid>
            </Grid>

            {/* <InputLabel> External Link </InputLabel>
            <TextField
                fullWidth
                name='external_link'

                helperText={hasError('external_link') ? formState.errors.external_link[0] : null}
                error={hasError('external_link')}
                onChange={handleChange}
                value={formState.values.external_link || ''}
            /> */}

            <InputLabel sx={{ mt: 5 }}> Item Media </InputLabel>
            <InputLabel
                disabled
                htmlFor="upload-media"
                className={classes.fileInput}
            >
                {
                    selectedMedia.preview ?
                        <img src={selectedMedia.preview} />
                        :
                        <VideoFileIcon sx={{ margin: 'auto' }} />
                }
            </InputLabel>

            <input
                type='file'
                id='upload-media'
                name='media'
                onChange={handleChangeMedia}
                hidden
            />

            <List>
                <ListItem>
                    <Box>
                        <InputLabel>
                            Properties
                        </InputLabel>
                        <Box>
                            Textual traits that show up as rectangles
                        </Box>
                    </Box>
                    <Box className={classes.addBtn} onClick={handleAddPropertiesOpen}>
                        <AddOutlinedIcon />
                    </Box>
                </ListItem>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    {
                        propertyList.values?.map((element, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <Box className={classes.propertyCard}>
                                        <Box className={classes.propertyType}> {element.type} </Box>
                                        <Box className={classes.propertyName}> {element.name} </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <ListItem>
                    <Box>
                        <InputLabel>
                            Levels
                        </InputLabel>
                        <Box>
                            Numberical traits that show as a progress bar
                        </Box>
                    </Box>
                    <Box className={classes.addBtn} onClick={handleAddLevelsOpen}>
                        <AddOutlinedIcon />
                    </Box>
                </ListItem>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    {
                        levelList.values?.map((element, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <Box className={classes.propertyCard}>
                                        <Box className={classes.propertyType}> {element.type} </Box>
                                        <Box className={classes.propertyName}> {element.name} </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <ListItem>
                    <Box>
                        <InputLabel>
                            Stats
                        </InputLabel>
                        <Box>
                            Numberical traits that just show as numbers
                        </Box>
                    </Box>
                    <Box className={classes.addBtn} onClick={handleAddStatsOpen}>
                        <AddOutlinedIcon />
                    </Box>
                </ListItem>

                <Grid container spacing={3} sx={{ mb: 3 }}>
                    {
                        statList.values?.map((element, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <Box className={classes.propertyCard}>
                                        <Box className={classes.propertyType}> {element.type} </Box>
                                        <Box className={classes.propertyName}> {element.name} </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </List>

            <Grid container spacing={2}>
                <Grid item xs={match900 ? 6 : 12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Enable Offer</FormLabel>
                        <RadioGroup
                            row
                            name='offer'

                            value={formState.values.offer || ''}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value={true}
                                control={<Radio />}
                                label="True"
                            />
                            <FormControlLabel
                                value={false}
                                control={<Radio />}
                                label="False"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={match900 ? 6 : 12}>
                    <FormControl>
                        <FormLabel>Status</FormLabel>
                        <RadioGroup
                            row
                            name="status"

                            value={formState.values.status || ''}
                            onChange={handleChange}
                        >
                            <FormControlLabel value={'active'} control={<Radio />} label="Active" />
                            <FormControlLabel value={'inactive'} control={<Radio />} label="Inactive" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            <Box className={classes.submitBtn}>
                <Button
                    variant='contained'
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    Create
                </Button>
            </Box>

            {
                loading &&
                <Loading />
            }
        </Box>
    )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    CreateItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemForm);