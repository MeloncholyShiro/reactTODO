import React from "react";
import styled from "styled-components";
import checkIcon from "../assets/check.svg";

const TodoItem = styled.li`
  padding: 15px 0 0 15px;
  display: flex;
  align-items: center;

  input:checked + label {
    background-color: #4dd599;
    border-color: #4dd599;
  }

  input:checked + label > img {
    opacity: 1;
  }
`;

const InputCheckbox = styled.input`
  display: none;
`;

const Checkbox = styled.label`
  border: 2px solid #848484;
  border-radius: 30px;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;

  &:hover > img {
    opacity: 0.2;
  }
`;

const CheckIcon = styled.img`
  width: 10px;
  height: 10px;
  position: relative;
  bottom: 5px;
  left: 3px;
  cursor: pointer;
  opacity: 0;
`;

const TodoText = styled.span`
  word-break: break-all;
  padding-left: 10px;
`;

const CompleteList = ({ items, onCompleteTodo }) => {

  const onChangeCheckbox = (e) => {
    onCompleteTodo(e.target.checked, parseInt(e.target.id));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <TodoItem key={index}>
          <InputCheckbox
            type="checkbox"
            name=""
            id={item.id}
            checked={true}
            onChange={onChangeCheckbox}
          />
          <Checkbox htmlFor={item.id}>
            <CheckIcon src={checkIcon} />
          </Checkbox>
          <TodoText>{item.text}</TodoText>
        </TodoItem>
      ))}
    </ul>
  );
};

export default CompleteList;
