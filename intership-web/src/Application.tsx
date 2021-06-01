import React from "react";
import styled from "styled-components";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import backgroundMain from "./assets/bg-01.jpg";

import { Header } from "./components/Header";

import { Organization } from "./pages/Organization";
import { Division } from "./pages/Division";
import { Employee } from "./pages/Employee";

import { Footer } from "./components/Footer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${backgroundMain});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.309);
  }
`;

export const Application: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <Switch>
        <Route path="/organization">
          <Organization />
        </Route>
        <Route path="/division">
          <Division />
        </Route>
        <Route path="/employee">
          <Employee />
        </Route>
      </Switch>
      <Footer />
    </PageContainer>
  );
};
