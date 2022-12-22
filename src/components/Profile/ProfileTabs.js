import * as React from "react";

import { connect } from "react-redux";
import {
  GetMyCollectionViewModel,
  GetMyFavorites,
} from "../../redux/actions/getData";
import { FavouriteItemsCleanup } from "redux/actions/cleanup";

import Loading from "../Common/Loading";
import Collections from "../Common/Collections";
import TransactionInfo from "../Common/TransactionInfo";
import Items from "components/Common/Items";
import Test_Image from "../../assets/Home/test.jpg";
import Trend_Image from "../../assets/Home/trend.png";
import Unique_Image from "../../assets/Home/unique.png";
import Dfgadfrds_Image from "../../assets/Home/dfgadfrds.jpg";
import Sculpture_Image from "../../assets/Home/sculpture.jpg";
import Photography_Image from "../../assets/Home/photography.png";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";
import { RemoveFavourite } from "redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "150px 50px",

    "& .MuiTab-root": {
      fontSize: "16px",
      textTransform: "unset",
      overflow: "auto !important",
    },
    "& .MuiTabs-scroller": {
      overflow: "scroll !important",

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  tabContent: {
    padding: "0px",
  },
}));

const favoriteHead = [
  {
    name: "Item",
    width: "80px",
  },
  {
    name: "Event",
    width: "80px",
  },
  {
    name: "Price",
    width: "50px",
  },
  {
    name: "From",
    width: "80px",
  },
  {
    name: "To",
    width: "80px",
  },
  {
    name: "Transaction Hash",
    width: "100px",
  },
  {
    name: "Created Date",
    width: "140px",
  },
];

const favoriteData = [
  {
    item: Sculpture_Image,
    event: "Minted",
    price: "0.0001 ETH",
    from: "",
    to: "James Abbas",
    transactionHash:
      "0x76c642ed278930849ab990c42068067c5a17750f7f1536e54e31a62fff26239",
    createdDate: "January 10, 2022",
  },
  {
    item: Dfgadfrds_Image,
    event: "Minted",
    price: "0.001 ETH",
    from: "",
    to: "James Abbas",
    transactionHash:
      "0xf6b2b6e92058b462aff0c748c246e2c3549d417f2af758445e267a6a051b994",
    createdDate: "December 13, 2021",
  },
  {
    item: Test_Image,
    event: "Bids",
    price: "0.001 ETH",
    from: "James Abbas",
    to: "Jammy h",
    transactionHash: "",
    createdDate: "December 6, 2021",
  },
  {
    item: Photography_Image,
    event: "Bids",
    price: "0.5 ETH",
    from: "James Abbas",
    to: "Jammy h",
    transactionHash: "",
    createdDate: "December 1, 2021",
  },
  {
    item: Unique_Image,
    event: "Bids",
    price: "0.5 ETH",
    from: "James Abbas",
    to: "Jammy h",
    transactionHash: "",
    createdDate: "November 30, 2021",
  },
  {
    item: Unique_Image,
    event: "Bids",
    price: "0.1 ETH",
    from: "James Abbas",
    to: "Jammy h",
    transactionHash: "",
    createdDate: "November 30, 2021",
  },
  {
    item: Trend_Image,
    event: "Minted",
    price: "6 ETH",
    from: "",
    to: "Jammy h",
    transactionHash:
      "0xb37735b7f9fd06f551cfbf266c4cbd678d2d9e4db895a70d167afe3c9b8722da",
    createdDate: "November 26, 2021",
  },
  {
    item: Unique_Image,
    event: "Minted",
    price: "5 ETH",
    from: "",
    to: "Jammy h",
    transactionHash:
      "0x01f16773898e1858e0f7f1bb7544d45e9aced48663ab665dff8aeaf4dbe21b79",
    createdDate: "November 26, 2021",
  },
  {
    item: Test_Image,
    event: "Bids",
    price: "1 ETH",
    from: "dweio dicu",
    to: "Jammy h",
    transactionHash: "",
    createdDate: "November 24, 2021",
  },
  {
    item: Test_Image,
    event: "Bids",
    price: "0.0001 ETH",
    from: "Tina a",
    to: "Jammy h",
    transactionHash: "",
    createdDate: "November 20, 2021",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileTabs = (props) => {
  const {
    type,
    collections,
    favouriteInfo,
    GetMyCollectionViewModel,
    GetMyFavorites,
    RemoveFavourite,
  } = props;

  const classes = useStyles();

  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (type === "favourited") setValue(2);
    else setValue(0);
  }, [type]);

  React.useEffect(() => {
    async function getCollections() {
      await GetMyCollectionViewModel();
      await GetMyFavorites();
      setLoading(false);
    }
    getCollections();

    return () => {
      FavouriteItemsCleanup();
    };
  }, []);

  const btnRemoveFromFav = async (e) => {
    setLoading(true);
    await RemoveFavourite(e, "");
    setLoading(false);
    await GetMyFavorites();
  };

  return (
    <Box className={classes.root}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Collected" {...a11yProps(0)} />
          <Tab label="Created" {...a11yProps(1)} />
          <Tab label="Favorited" {...a11yProps(2)} />
          <Tab label="Offers" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Collections collections={collections} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Collections collections={collections} />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabContent}>
        <Items
          items={favouriteInfo}
          removeFav={true}
          btnUnfavClicked={async (e) => {
            await btnRemoveFromFav(e);
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TransactionInfo
          transactionHead={favoriteHead}
          transactionData={favoriteData}
        />
      </TabPanel>

      {loading && <Loading />}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  collections: state.myCollection.collections,
  favouriteInfo: state.profile.favouriteInfo,
});

const mapDispatchToProps = {
  GetMyCollectionViewModel,
  GetMyFavorites,
  RemoveFavourite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTabs);
