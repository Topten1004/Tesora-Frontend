import * as React from "react";

import { useNavigate } from "react-router-dom";

import { useMeasure } from "react-use";

import styled from "styled-components";

import GavelIcon from "@mui/icons-material/Gavel";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Button } from "@mui/material";

const ItemCard = (props) => {
  const {
    item_id,
    asset_img,
    item_name,
    collection_name,
    cat_name,
    price,
    accept_offer,
    enable_auction,
    itemEvt,
    collectionEvt,
    catEvt,
    editable,
    priceDisplay,
    removeFav,
    btnUnfavClicked,
  } = props;

  const navigate = useNavigate();

  const [cardRef, { width }] = useMeasure();

  const handleNavigate = (evt) => {
    console.log(evt);
    navigate(evt?.to, { state: { data: evt?.data } });
  };

  const handleItemEdit = () => {
    navigate("/item/edit", { state: { data: item_id } });
  };

  const btnUnfavoriteClicked = () => {
    btnUnfavClicked(item_id);
  };

  return (
    <Card ref={cardRef}>
      <CardMedia height={width}>
        <CardImg
          img={asset_img}
          className="back_div"
          onClick={() => handleNavigate(itemEvt)}
        />
        {/* <EditIconBlock className={"edit_icon_div"} height={width}>
          <EditIcon />
        </EditIconBlock> */}
      </CardMedia>
      <CardBody>
        <CardInfo editable={editable}>
          <Label onClick={() => handleNavigate(itemEvt)}>{item_name}</Label>
          <Label onClick={() => handleNavigate(collectionEvt)}>
            {collection_name}
          </Label>
          <Label onClick={() => handleNavigate(catEvt)}>{cat_name}</Label>
        </CardInfo>
        {editable ? (
          <EditCard onClick={() => handleItemEdit()}>Edit</EditCard>
        ) : (
          <></>
        )}
      </CardBody>
      <CardFooter>
        {priceDisplay && (
          <div
            style={{
              width: "calc(100% - 70px)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Price : {priceDisplay}
            {/* {parseFloat(priceDisplay) +
              priceDisplay.substring(priceDisplay.length - 4)} */}
          </div>
        )}

        <OptionList>
          {accept_offer ? (
            <HandshakeIcon sx={{ "&:hover": { color: "dodgerblue" } }} />
          ) : (
            <></>
          )}
          {enable_auction ? (
            <GavelIcon sx={{ "&:hover": { color: "dodgerblue" } }} />
          ) : (
            <></>
          )}
          {removeFav && removeFav === true && (
            <Button onClick={() => btnUnfavoriteClicked()}>
              <FavoriteIcon
                sx={{ color: "red", "&:hover": { color: "darkred" } }}
              />
            </Button>
          )}
        </OptionList>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;

const Card = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 #cccccc;
  overflow: hidden;
  cursor: pointer;
`;

const CardMedia = styled.div`
    height: ${(props) => props.height}px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:hover {
        & .edit_icon_div {
            display : flex;

            animation : backout 0.2s linear 0s normal none running;
        },
    },
`;
const CardImg = styled.div`
  width: 100%;
  height: 100%;
  objectfit: cover;
  transition: transform ease-in 0.5s;
  background-size: cover;
  background-position: top center;
  background-image: url(${(props) => props.img});

  &:hover {
    transform: scale(1.2);
  }
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px;
`;

const CardInfo = styled.div`
  width: calc(100% - 100px);
  display: flex;
  gap: 3px;
  flex-direction: column;
`;

const Label = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  cursor: pointer;
`;

const EditCard = styled(Button)`
  min-width: 70px;
  font-size: 20px;
  background: linear-gradient(134.69deg, #29235c 4.17%, #1d71b8 98.23%);
  color: white;
  padding: 0px 20px;
`;

const CardFooter = styled.div`
  padding: 0px 12px 12px 12px;

  display: flex !important;
  justify-content: space-between;
  align-items: center;
`;
const OptionList = styled.div`
  min-width: 50px;
  display: flex;
  gap: 10px;
`;
const AcceptOffer = styled.div`
  width: 16px;
  height: 16px;
  background: #fff695;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const EnableAuction = styled.div`
  width: 16px;
  height: 16px;
  background: #ed00ad;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const EditIconBlock = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
  height: ${(props) => props.height}px;

  background-color: #00000063;
  display: none;
  justify-content: center;
  align-items: center;

  @keyframes backout {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
