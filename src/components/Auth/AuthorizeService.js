import React from 'react';

import { UserManager, WebStorageStateStore } from 'oidc-client';

import { config } from '../../static/constants';

const mgr = new UserManager(config);




export const getUser = () => {
    // const mgr = new UserManager(config);

    mgr.getUser().then(function (user) {
        if (user) {
        }
        else {
        }
    });


}

export const signinRedirectCallback = () => {
    const mgr = new UserManager({ response_mode: "query" });

    mgr.signinRedirectCallback().then(function () {
    }).catch(function (e) {
        console.error(e);
    });

}

export const login = () => {

    mgr.signinRedirect();

    mgr.getUser().then(function (user) {
        if (user) {
        }
        else {
        }
    });

}

// export const api = () => {
//     mgr.getUser().then(function (user) {
//         var url = "https://localhost:6001/identity";

//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = function () {
//             console.log(xhr.status, JSON.parse(xhr.responseText));
//         }
//         xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
//         xhr.send();
//     });
// }

export const logout = () => {
    mgr.signoutRedirect();
}