import React, { useState, useEffect } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Button,
} from '@mui/material';

const FilterSortBy = (props) => {

    const {
        filterSortBy,
        SetFilterSortBy
    } = props;

    const [expanded, setExpanded] = useState(false);

    const handleChangeAccordion = () => {
        setExpanded(!expanded)
    }

    return (
        <Accordion expanded={expanded} onChange={() => handleChangeAccordion()}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                Sort by
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Button
                            variant={filterSortBy === 'MostRecent' ? 'contained' : 'outlined'}
                            onClick={() => SetFilterSortBy('MostRecent')}
                            data="Recent"
                        >
                            {filterSortBy === 'MostRecent' ? 'Recent' : ''}
                        </Button>

                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant={filterSortBy === 'MostViewed' ? 'contained' : 'outlined'}
                            onClick={() => SetFilterSortBy('MostViewed')}
                            data="Most Viewed"
                        >
                            {filterSortBy === 'MostViewed' ? 'Most Viewed' : ''}
                        </Button>

                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant={filterSortBy === 'MostLiked' ? 'contained' : 'outlined'}
                            onClick={() => SetFilterSortBy('MostLiked')}
                            data='Most Liked'
                        >
                            {filterSortBy === 'MostLiked' ? 'Most Liked' : ''}
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant={filterSortBy === 'on auction' ? 'contained' : 'outlined'}
                            onClick={() => SetFilterSortBy('on auction')}
                            data="On Auction"
                        >
                            {filterSortBy === 'on auction' ? 'On Auction' : ''}
                        </Button>

                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterSortBy;