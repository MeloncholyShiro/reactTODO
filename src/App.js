import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  TitleBlock,
  TodoList,
  AddButtonItem,
  TitleBlockTrue,
  CompleteList,
} from "./components";

const TodoApp = styled.div`
  width: 350px;
  background-color: #f7f7f7;
  margin: 50px auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const CompleteBlock = styled.div`
  background-color: #dcdcdc;
  margin-top: 40px;
  padding-bottom: 10px;
`;

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then(({ data }) => {
      setLists(data);
    });
  }, []);

  const onAddItem = (obj) => {
    const newLists = [...lists, obj];
    setLists(newLists);
  };

  const DeleteAllFalse = () => {
    const clearListsFalse = lists.filter((item) => item.completed === true);
    axios.delete("http://localhost:3001/tasks");
    setLists(clearListsFalse);
  };

  const DeleteAllTrue = () => {
    const clearListsTrue = lists.filter((item) => item.completed === false);
    setLists(clearListsTrue);
  };

  const onCompleteTodo = (completed, id) => {
    const newLists = lists.map((list) => {
      if (list.id === id) {
        list.completed = completed;
      }
      return list;
    });
    setLists(newLists);
  };
  return (
    <TodoApp>
      <TitleBlock DeleteAllFalse={DeleteAllFalse} />
      <TodoList
        items={lists.filter((list) => list.completed === false)}
        onCompleteTodo={onCompleteTodo}
      ></TodoList>
      <AddButtonItem onAdd={onAddItem} />
      <CompleteBlock>
        <TitleBlockTrue DeleteAllTrue={DeleteAllTrue} />
        <CompleteList
          items={lists.filter((list) => list.completed === true)}
          onCompleteTodo={onCompleteTodo}
        ></CompleteList>
      </CompleteBlock>
    </TodoApp>
  );
}

export default App;
