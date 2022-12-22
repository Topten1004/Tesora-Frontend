import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { useMeasure } from 'react-use';

import styled from 'styled-components';

import { PRIVATE_TESORA_IMAGE_API } from 'static/constants';


const ItemCard = (props) => {
    const {
        asset_img,
        item_name,
        collection_name,
        cat_name,
        price,
        accept_offer,
        enable_auction,
        itemEvt,
        collectionEvt,
        catEvt
    } = props;

    const navigate = useNavigate();

    const [cardRef, { width }] = useMeasure();

    const handleNavigate = (evt) => {
        console.log(evt)
        navigate(evt?.to, { state: { data: evt?.data } })
    }

    return (
        <Card ref={cardRef}>
            <CardMedia
                height={width}
            >
                <CardImg img={asset_img}
                    className='back_div'
                    onClick={() => handleNavigate(itemEvt)}
                />
                {/* <EditIconBlock className={'edit_icon_div'}
                    height={width}
                >
                    <EditIcon />
                </EditIconBlock> */}
            </CardMedia>
            <CardBody>
                <Label onClick={() => handleNavigate(itemEvt)}>
                    {item_name}
                </Label>
                <Label onClick={() => handleNavigate(collectionEvt)}>
                    {collection_name}
                </Label>
                <Label onClick={() => handleNavigate(catEvt)}>
                    {cat_name}
                </Label>
            </CardBody>
            <CardFooter>
                <div>
                    Price : {price}
                </div>
                <OptionList>
                    {
                        accept_offer ? <AcceptOffer /> : <></>
                    }
                    {
                        enable_auction ? <EnableAuction /> : <></>
                    }
                </OptionList>
            </CardFooter>
        </Card>
    )
}

export default ItemCard;

const Card = styled.div`
    position: relative;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 #cccccc;
    overflow: hidden;
    cursor: pointer;
`

const CardMedia = styled.div`
    height: ${props => props.height}px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:hover {
        & .edit_icon_div {
            display : flex;

            animation : backout 0.2s linear 0s normal none running;
        },
    },
`
const CardImg = styled.div`
    width: 100%;
    height: 100%;
    objectFit: cover;
    transition: transform ease-in 0.5s;
    background-size : cover;
    background-position : top center;
    background-image : url(${props => props.img});

    &:hover {
        transform: scale(1.3);
    }
`
const CardBody = styled.div`
    display : flex;
    gap : 3px;
    flex-direction : column;

    padding : 12px;
`

const Label = styled.div`
    width: 100% ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width:600px) {
        font-size: 12px;
    }
`

const CardFooter = styled.div`
    padding: 0px 12px 12px 12px;

    display: flex !important;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:600px) {
        font-size: 12px;
    }
`
const OptionList = styled.div`
    display : flex;
    gap : 10px;
`
const AcceptOffer = styled.div`
    width: 16px;
    height: 16px;
    background: #fff695;
    border: 1px solid lightgrey;
    border-radius: 4px;
`

const EnableAuction = styled.div`
    width: 16px;
    height: 16px;
    background: #ed00ad;
    border: 1px solid lightgrey;
    border-radius: 4px;
`