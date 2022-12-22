import axios from "axios";

import { BASE_URL, PRIVATE_TESORA_API } from "../../static/constants";
import { authorization } from "../../utils/helper";
import ActionTypes from "./actionTypes";

export const AuthenticationLogin = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${BASE_URL}/Authentication/login?api-version=1.0`,
      header
    );

    if (res.status === 200) {
      console.log(res.data);
    } else if (res.status === 401) {
      localStorage.clear();
      window.open(window.location.origin);
    }
  } catch (err) {
    console.log(err);
    localStorage.clear();
    window.open(window.location.origin);
  }
};

export const GetAuthenticated = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${BASE_URL}/Authentication/authenticated?api-version=1.0`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetAuthenticated,
        payload: res.data.authenticated,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetActivityViewModel = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}Activity/GetActivityViewModel`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetActivityViewModel,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetCollectionViewDetailModel = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}CollectionViewDetail/GetCollectionViewDetailModel`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetCollectionViewDetailModel,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetHomeViewModel = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}Home/GetHomeViewModel`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetHomeViewModel,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// export const GetCategoryImage = (category_id) => async dispatch => {
//     try {
//         const header = authorization();

//         let res = await axios.get(`${PRIVATE_TESORA_API}Category/GetCategoryImage/${category_id}`, header)

//         if (res.status === 200) {
//             dispatch({
//                 type: ActionTypes.GetCategoryImage,
//                 payload: res.data
//             })
//         }

//     } catch (err) {
//         console.log(err)
//     }
// }

export const GetItemViewItem =
  (item_id, filterCurrency) => async (dispatch) => {
    try {
      const header = authorization();

      let res = await axios.get(
        `${PRIVATE_TESORA_API}ItemView/GetItemViewItem/${item_id}/${filterCurrency}`,
        header
      );

      if (res.status === 200) {
        console.log(res.data);
        dispatch({
          type: ActionTypes.GetItemViewItem,
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const GetItems = (collection_id, filterCurrency) => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}ItemView/GetItems/${collection_id}/${filterCurrency}`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetItems,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const ClearItems = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.GetItems,
      payload: null,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GetItemsByCategoryId =
  (category_id, filterCurrency) => async (dispatch) => {
    try {
      const header = authorization();
      console.log(category_id);

      let res = await axios.get(
        `${PRIVATE_TESORA_API}ItemView/GetItemsByCategoryId/${category_id}/${filterCurrency}`,
        header
      );

      if (res.status === 200) {
        dispatch({
          type: ActionTypes.GetItemsByCategoryId,
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const GetMarketPlaceViewModel = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MarketPlace/GetMarketPlaceViewModel`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetMarketPlaceViewModel,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetMarketPlaceItems =
  (
    filterSoryBy,
    filterPrice,
    filterCategory,
    searchText,
    searchType,
    pageNumber,
    filterCurrency
  ) =>
  async (dispatch) => {
    try {
      console.log(
        searchText,
        filterSoryBy,
        filterPrice,
        filterCategory,
        filterCurrency,
        searchType,
        pageNumber
      );
      const header = authorization();

      let res = await axios.post(
        `${PRIVATE_TESORA_API}MarketPlace/GetMarketPlaceItems`,
        {
          sort: {
            sortOrder: filterSoryBy,
          },
          filter: {
            priceFilter: filterPrice,
            saleType: "All",
            categoryIds: [filterCategory],
          },
          text: searchText,
          textSearchType: searchType,
          pageSize: 50,
          pageNumber: pageNumber,
          displayCurrency: filterCurrency,
        },
        header
      );

      if (res.status === 200) {
        dispatch({
          type: ActionTypes.GetFilterItems,
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const GetMyCollectionViewModel = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyCollection/GetMyCollections`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetMyCollectionViewModel,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetMyCollection = (collection_id) => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyCollection/GetMyCollection/${collection_id}`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetMyCollection,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetProfileViewModel = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(`${PRIVATE_TESORA_API}MyProfile/GetUser`, header);

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetProfileViewModel,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetOwnerProfile = (user_id) => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyProfile/GetProfile/${user_id}`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetOwnerProfile,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetEditCollection = (collection_id) => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyCollection/GetMyCollection/${collection_id}`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetEditCollection,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetMyOffers = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyOffer/GetMyOffers`,
      header
    );

    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: ActionTypes.GetMyOffers,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetProfile = (user_id) => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyProfile/GetProfile/${user_id}`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetProfile,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetSearchAssets =
  (search_text, collectionOnly) => async (dispatch) => {
    try {
      console.log(search_text, collectionOnly);
      const header = authorization();

      let res = await axios.post(
        `${PRIVATE_TESORA_API}Collection/SearchMarketplace`,
        {
          search_string: search_text,
          collection_only: collectionOnly,
        },
        header
      );

      if (res.status === 200) {
        console.log(res.data);
        dispatch({
          type: ActionTypes.GetSearchAssets,
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const ReceiveCoins = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyWallet/ReceiveCoins`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.ReceiveCoins,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const GetMyFavorites = () => async (dispatch) => {
  try {
    const header = authorization();

    let res = await axios.get(
      `${PRIVATE_TESORA_API}MyFavorite/GetMyFavorites`,
      header
    );

    if (res.status === 200) {
      dispatch({
        type: ActionTypes.GetMyFavorites,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
