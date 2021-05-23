import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import addIcon from "../assets/addItem-icon.png";

const AddItem = styled.div`
  padding: 20px 0 0 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.4;
  user-select: none;

  &:hover {
    opacity: 0.9;
  }
`;

const AddIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const AddTitle = styled.span`
  padding-left: 10px;
`;

const AddItemPopup = styled.div`
  padding: 10px 0 0 18px;
  display: flex;
  align-items: center;
`;

const PopupText = styled.input`
  border-radius: 5px;
  flex: 1;
  outline: none;
`;

const PopupAddButton = styled.button`
  margin: 0 5px 0 10px;
  padding: 5px;
  border-radius: 20px;
  background-color: #4dd599;
  border: #4dd599;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #17ed8f;
  }
`;

const PopupDeleteButton = styled.button`
  margin: 0 10px;
  padding: 10px;
  background-color: #d54d4d;
  border: #d54d4d;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #fa1f1f;
  }
`;

const AddButtonItem = ({ onAdd }) => {
  const [popup, setPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (!inputValue) {
      alert("Ты долбаеб, напиши что-нибудь");
    }
    axios
      .post("http://localhost:3001/tasks", {
        text: inputValue,
        completed: false,
      })
      .then(({ data }) => {
        onAdd(data);
        setPopup(false);
        setInputValue("");
      });
  };

  return (
    <>
      <AddItem onClick={() => setPopup(true)}>
        {/* setPopup(!popup) */}
        <AddIcon src={addIcon} alt="add item" />
        <AddTitle>Add item</AddTitle>
      </AddItem>
      {popup && (
        <AddItemPopup>
          <PopupText
            type="text"
            placeholder="Write smth..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <PopupAddButton onClick={addItem}>
            <p>Add</p>TODO
          </PopupAddButton>
          <PopupDeleteButton onClick={() => setPopup(false)}>
            X
          </PopupDeleteButton>
        </AddItemPopup>
      )}
    </>
  );
};

export default AddButtonItem;
