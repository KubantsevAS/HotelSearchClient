import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function HotelsPage() {
  const auth = useSelector((store) => store.reducer.AuthReducer.auth);

  if (!auth) {
    return <Navigate to="/auth" />;
  }

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
