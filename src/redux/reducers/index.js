import { combineReducers } from "redux";

import activityReducer from "./activity";
import collectionViewDetailReducer from "./collectionViewDetail";
import homeReducer from "./home";
import itemViewReducer from "./itemView";
import marketPlaceReducer from "./marketPlace";
import myCollectionReducer from "./myCollection";
import profileReducer from "./profile";
import editReducer from "./editCollection";
import filterReducer from "./filter";
import offerReducer from "./offer";
import myWalletReducer from "./myWallet";
import eventLoginInfo from "./loginInfo";

export default combineReducers({
  activity: activityReducer,
  collectionViewDetail: collectionViewDetailReducer,
  home: homeReducer,
  itemView: itemViewReducer,
  marketPlace: marketPlaceReducer,
  myCollection: myCollectionReducer,
  profile: profileReducer,
  editCollection: editReducer,
  filter: filterReducer,
  offer: offerReducer,
  myWallet: myWalletReducer,
  rLogin: eventLoginInfo,
});
