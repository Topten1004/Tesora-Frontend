import { ethers } from "ethers";

export const setCookie = (cname, cvalue) => {
  const d = new Date();
  d.setTime(d.getTime() + 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};
export const eraseCookie = (cname) => {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  return;
};

export const authorization = () => {
  return {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    },
  };
};

export const isAuthenticated = () => {
  if (getCookie("access_token")) {
    return true;
  }
  return false;
};

export const errorHandler = (err) => {
  try {
    if (err.response.status >= 400 && err.response.status < 500) {
      console.log(err.response.data.message);
      return err.response.status + " " + err.response.data.message;
    }
  } catch (error) {
    console.log("error", err);
    return "Server Side Error";
  }
};

export const setItem = (key, item) => {
  if (item) {
    window.localStorage.setItem(key, item);
  } else {
    window.localStorage.removeItem(key);
  }
};

export const removeItem = (key) => {
  if (key) return window.localStorage.removeItem(key);
};

export const getItem = (key) => {
  if (key) {
    return window.localStorage.getItem(key);
  }
};

// export const isAuthenticated = () => {
//     if(getItem('access_token')) {
//         return true ;
//     }
//     return false ;
// }

export const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
};

export const formatDBDate = (db_date) => {
  if (typeof db_date === "undefined") return;

  let removeT_db_date = db_date.replace("T", " ");

  let removeTail_db_date = removeT_db_date.split(".")[0];

  return removeTail_db_date.toString();
};

export const sortByRecent = (items) => {
  // items.forEach(element => {
  //     items.forEach(row => {
  //         const date1 = moment(element.createDate);
  //         const date2 = moment(row.createDate);
  //     })
  // });
};
