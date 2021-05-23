import React from "react";
import styled from "styled-components";
import deleteAll from "../assets/deleteAll-icon.png";

const TodoTitleBlock = styled.div`
  display: flex;
  border-bottom: 1px solid #cecece;
`;

const TodoTitle = styled.h2`
  font-size: 18px;
  padding: 5px 0 5px 15px;
  color: #767676;
  flex: 1;
`;

const DeleteAllIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 5px;
  cursor: pointer;
`;

export default function TitleBlockFalse({ DeleteAllFalse }) {
  return (
    <TodoTitleBlock>
      <TodoTitle>Todo</TodoTitle>
      <DeleteAllIcon
        src={deleteAll}
        alt="delete all icon"
        onClick={DeleteAllFalse}
      />
    </TodoTitleBlock>
  );
}
