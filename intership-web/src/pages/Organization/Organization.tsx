import React from "react";
import {
  OrganizationPage,
  OrganizationDesignations,
  OrganizationContainer,
  ListText,
} from "./styled";
import * as mockDB from "./mock.json";
import { DropDownMenu } from "../../components/DropDownMenu";

export const Organization: React.FC = () => {
  return (
    <OrganizationPage>
      <OrganizationDesignations>
        <p>№</p>
        <span>NAME COMPANY</span>
        <span>ADDRESS</span>
        <span>INN</span>
        <span>OTHER</span>
      </OrganizationDesignations>
      {mockDB.organization.map((item) => {
        return (
          <OrganizationContainer key={item.id}>
            <ListText>{item.id}</ListText>
            <ListText>{item.name}</ListText>
            <ListText>{item.address}</ListText>
            <ListText>{item.INN}</ListText>
            <DropDownMenu></DropDownMenu>
          </OrganizationContainer>
        );
      })}
      ;
    </OrganizationPage>
  );
};
