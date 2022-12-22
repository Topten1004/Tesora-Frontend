import React from "react";
import { AuthConsumer } from "./authProvider";

export const LogoutCallback = () => (
  <AuthConsumer>
    {({ signoutRedirectCallback }) => {
      signoutRedirectCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
