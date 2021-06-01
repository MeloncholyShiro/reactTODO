import styled from "styled-components";

export const LinearButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  padding: 10px 50px;
  border-radius: 21px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--background-color);
  border: 1px solid transparent;
  transition: all 0.4s ease-in-out;

  &:hover {
    border: 1px solid var(--background-color);
    color: var(--background-color);
    background-color: #fff;
    transition: all 0.4s ease-in-out;
  }

  &.header {
    margin: 10px 0;

    &:hover {
      border: 1px solid #fff;
      color: #fff;
      background-color: transparent;
    }
  }

  &.main {
    margin: 15px;
    padding: 10px 35px;
    font-size: 16px;
  }
`;
