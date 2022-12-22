import React from "react";

import { Link } from "react-router-dom";

import { PRIVATE_TESORA_API, PRIVATE_TESORA_IMAGE_API } from "../../../static/constants";

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    List,
    ListItem,
} from '@mui/material';

import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BallotIcon from '@mui/icons-material/Ballot';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionGroup = (props) => {

    const {
        classes,
        itemInfo
    } = props;

    return (
        <Box className={classes.accordionGroup}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ borderTop: '1px solid rgba(0, 0, 21, 0.175) !important' }}
                >
                    <FormatAlignLeftRoundedIcon />
                    Description
                </AccordionSummary>
                <AccordionDetails>
                    {itemInfo?.description}
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <LibraryBooksIcon />
                    About Collection
                </AccordionSummary>
                <AccordionDetails>
                    <Box component={'img'} src={`${PRIVATE_TESORA_IMAGE_API}${itemInfo.collection_id?.banner}`} />
                    <Box>
                        {itemInfo.collection_id?.contract_symbol}
                        <Box sx={{ fontWeight: 400, color: 'rgb(44,56,74)' }}>
                            {itemInfo.collection_id?.description}
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <BallotIcon />
                    Details
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Box>
                                Contract Address
                            </Box>
                            <a
                                href={`https://goerli.etherscan.io/address/${itemInfo.collection_id?.contract_address}`}
                                target="_blank"
                            >
                                {itemInfo.collection_id?.contract_address.substring(0, 6) + "..." + itemInfo.collection_id?.contract_address.substring(itemInfo.collection_id?.contract_address.length - 4)}
                            </a>
                        </ListItem>
                        <ListItem>
                            <Box>
                                Token
                            </Box>
                            <a href="#">
                                {itemInfo?.token_id}
                            </a>
                        </ListItem>
                        <ListItem>
                            <Box>
                                Blockchain
                            </Box>
                            <Box>
                                GoerliETH
                            </Box>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default AccordionGroup;