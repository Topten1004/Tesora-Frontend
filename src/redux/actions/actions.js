import { authorization } from "../../utils/helper";

import axios from "axios";
import swal from "sweetalert";

import ActionTypes from "./actionTypes";
import { PRIVATE_TESORA_API } from "../../static/constants";
import LoginAlert from "shared/ui/LoginAlert";

export const CreateCollection = (formState, navigate) => async dispatch => {
    try {
        console.log(formState);
        const header = authorization();

        const fn = new FormData();

        fn.append('collectionId', 10);
        fn.append('name', formState.name);
        fn.append('description', formState.description);
        fn.append('banner', formState.banner);
        fn.append('collectionImage', formState.logo);
        fn.append('royalties', parseFloat(formState.royalties));
        fn.append('contractSymbol', formState.contract_symbol);

        let res = await axios.post(`${PRIVATE_TESORA_API}MyCollection/AddMyCollection`, fn, header);

        if (res.status === 200) {
            console.log(res)
            console.log("Success");
            navigate(-1)
        }

    } catch (err) {
        LoginAlert(err)
    }
}

export const EditCollection = (formState) => async dispatch => {
    try {
        const header = authorization();

        const fn = new FormData();

        fn.append('name', formState.name);
        fn.append('description', formState.description);
        fn.append('banner', formState.banner);
        fn.append('image', formState.image);
        fn.append('royalties', formState.royalties);
        fn.append('contract_symbol', formState.contract_symbol);

        let res = await axios.post(`${PRIVATE_TESORA_API}Collection/EditCollection`, fn, header);

        if (res.status === 200) {
            dispatch({
                type: ActionTypes.CollectionEdit,
                payload: res.data
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export const CollectionDelete = (collection_id) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.delete(`${PRIVATE_TESORA_API}Collection/DeleteCollection/${collection_id}`, {}, header);

    } catch (err) {
        console.log(err)
    }
}

export const CreateOffer = (offerAmount, currency, item_id) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.post(`${PRIVATE_TESORA_API}Collection/CreateOffer`, {
            item_id: item_id,
            price: parseFloat(offerAmount),
            currency: currency
        }, header);

        if (res.status === 200) {
            return swal({
                title: "SUCCESS",
                text: "Offer created successfully",
                icon: "success",
                timer: 2000,
                button: false
            })
        }
    } catch (err) {
        LoginAlert(err)
    }
}

export const CreateAuction = (offerAmount, currency, item_id) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.post(`${PRIVATE_TESORA_API}Collection/CreateAuction`, {
            item_id: item_id,
            price: parseFloat(offerAmount),
            currency: currency
        }, header)

        if (res.status === 200) {
            return swal({
                title: "SUCCESS",
                text: "Auction created successfully",
                icon: "success",
                timer: 2000,
                button: false
            })
        }
    } catch (err) {
        LoginAlert(err)
    }
}

export const AcceptMyOffer = (offer_id) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.put(`${PRIVATE_TESORA_API}MyOffer/AcceptMyOffer/${offer_id}`, {}, header);

        if (res.status === 200) {
            return swal({
                title: "SUCCESS",
                text: "Offer is successfully accepted",
                icon: "success",
                timer: 2000,
                button: false
            })
        }

    } catch (err) {
        LoginAlert(err)
    }
}

export const RescindOffer = (offer_id, navigate) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.delete(`${PRIVATE_TESORA_API}Collection/RescindOffer/${offer_id}`, header);

        if (res.status === 200) {
        }
    } catch (err) {
        LoginAlert(err)
    }
}

export const BuyItem = (item_id) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.get(`${PRIVATE_TESORA_API}Collection/BuyItem/${item_id}`, header);

        if (res.status === 200) {
            return swal({
                title: "SUCCESS",
                text: "Successful Purchase",
                icon: "success",
                timer: 2000,
                button: false
            })
        }
    } catch (err) {
        LoginAlert(err)
    }
}

export const AddFavourite = (item_id, navigate) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.post(`${PRIVATE_TESORA_API}ItemView/AddFavourite/${item_id}`, {}, header)


        if (res.status === 200) {
            console.log("Success")
            return true;
        }

    } catch (err) {
        LoginAlert(err)
    }
}

export const RemoveFavourite = (item_id, navigate) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.delete(`${PRIVATE_TESORA_API}ItemView/RemoveFavourite/${item_id}`, header);

        if (res.status === 200) {
            console.log("Success")
            return true;
        }

    } catch (err) {
        LoginAlert(err)
    }
}

export const CreateItem = (formState, collection_id, auctionStartDate, auctionEndDate, navigate) => async dispatch => {
    try {
        console.log(auctionStartDate, auctionEndDate);
        const header = authorization();

        const fn = new FormData();

        fn.append('itemId', 100);
        fn.append('name', formState.name);
        fn.append('collectionId', collection_id);
        fn.append('description', formState.description);
        fn.append('currency', formState.currency);
        fn.append('price', parseFloat(formState.price) ? parseFloat(formState.price) : 0);
        fn.append('reservePrice', parseFloat(formState.reservePrice));
        fn.append('externalLink', formState.external_link);
        fn.append('media', formState.media);
        fn.append('categoryId', formState.categoryId);
        fn.append('enableAuction', Boolean(formState.auction));
        fn.append('acceptOffer', Boolean(formState.offer));
        fn.append('status', formState.status);
        fn.append('startDate', auctionStartDate);
        fn.append('endDate', auctionEndDate);

        let res = await axios.post(`${PRIVATE_TESORA_API}MyCollection/AddMyItem`, fn, header);

        if (res.status === 200) {
            console.log("Success")
            navigate(`/collection/view/${collection_id}`)
        }

    } catch (err) {
        LoginAlert(err)
    }
}

export const EditProfile = (selectedFile) => async dispatch => {
    try {
        const header = authorization();

        const fn = new FormData();

        fn.append('userImage', selectedFile);

        let res = await axios.put(`${PRIVATE_TESORA_API}MyProfile/PutUserImage`, fn, header);

        if (res.status === 200) {
            console.log("Success")
            return swal({
                title: "SUCCESS",
                text: "Item created successfully",
                icon: "success",
                timer: 2000,
                button: false
            })
        } else {
            return swal({
                title: "ERROR",
                text: "Item create failed",
                icon: "error",
                timer: 2000,
                button: false
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const PostMyItemSale = (formState, item_id, auctionStartDate, auctionEndDate, navigate) => async dispatch => {
    try {
        console.log(parseFloat(formState.fixedPrice), item_id, auctionStartDate, auctionEndDate)
        const header = authorization();

        let res = await axios.post(`${PRIVATE_TESORA_API}MyCollection/PostMyItemSale`, {
            itemId: item_id,
            saleType: formState.saleType,
            fixedPrice: parseFloat(formState.fixedPrice),
            reservePrice: parseFloat(formState.reservePrice),
            auctionStartDate: auctionStartDate,
            auctionEndDate: auctionEndDate,
            acceptOffer: Boolean(formState.acceptOffer)
        }, header);

        if (res.status === 200) {
            navigate(-1)
        } else {
            return swal({
                title: "ERROR",
                text: "Item create failed",
                icon: "error",
                timer: 2000,
                button: false
            })
        }

    } catch (err) {
        LoginAlert(err)
    }
}

export const RejectOffer = (offer_id) => async dispatch => {
    try {
        console.log(offer_id)
        const header = authorization();

        let res = await axios.delete(`${PRIVATE_TESORA_API}MyOffer/RejectOffer/${offer_id}`, header);

        if (res.status === 200) {
            console.log("Success")
            return swal({
                title: "SUCCESS",
                text: "Offer rejected successfully",
                icon: "success",
                timer: 2000,
                button: false
            })
        }

    } catch (err) {
        LoginAlert(err)
    }
}