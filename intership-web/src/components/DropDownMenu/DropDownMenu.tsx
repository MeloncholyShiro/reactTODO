import React from "react";
import { DropDown, DropButton, DropDownContent, ContentButton } from "./styled";


export const DropDownMenu: React.FC = () => {
  return (
    <DropDown>
      <DropButton>
        <span>...</span>
      </DropButton>
      <DropDownContent>
        <ContentButton>Open</ContentButton>
        <ContentButton>Edit</ContentButton>
        <ContentButton>Delete</ContentButton>
      </DropDownContent>
    </DropDown>
  );
};
