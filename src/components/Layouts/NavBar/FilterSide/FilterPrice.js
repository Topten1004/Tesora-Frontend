import React, { useState, useEffect } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Button,
} from '@mui/material';

const filter_config_list = [
    {
        label: '> 1 ETH',
        value: 'GteOne'
    },
    {
        label: '> 10 ETH',
        value: 'GteTen'
    },
    {
        label: '> 100 ETH',
        value: 'GteOneHundred'
    },
    {
        label: '> 1000 ETH',
        value: 'GteOneThousand'
    },
]

const FilterPrice = (props) => {

    const {
        filterPrice,
        SetFilterPrice,
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
                Price
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    {
                        filter_config_list.map((config, index) => (
                            <Grid key={index} item xs={6}>
                                <Button
                                    variant={filterPrice === config.value ? 'contained' : 'outlined'}
                                    onClick={() => SetFilterPrice(filterPrice === config.value ? 'Any' : config.value)}
                                    data={config.label}
                                >
                                    {filterPrice === config.value ? config.label : ''}
                                </Button>
                            </Grid>
                        ))
                    }
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterPrice;