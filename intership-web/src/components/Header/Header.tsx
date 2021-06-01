import React from "react";
import { HeaderPage, PageInner } from "./styled";
import { LinearButton } from "../LinearButton";


export const Header: React.FC = () => {
  return (
    <>
      <HeaderPage>
        <LinearButton className="header">Logout</LinearButton>
      </HeaderPage>
      <PageInner>
        <LinearButton className="main">Add organization</LinearButton>
        <LinearButton className="main">Go back</LinearButton>
      </PageInner>
    </>
  );
};
