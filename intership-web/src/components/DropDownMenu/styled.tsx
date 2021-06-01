import styled from 'styled-components';


export const DropButton = styled.button`
  font-size: 16px;
  background-color: inherit;
`;

export const ContentButton = styled.button`
  color: black;
  padding: 12px 16px;
  display: block;
  width: 100%;
  transition: all 0.8s;

  &:hover {
    transition: all 0.8s;
    background-color: #ddd;
  }

  &:last-child {
    border-top: 1px solid #000;
  }
`;

export const DropDownContent = styled.div`
  position: absolute;
  right: 8%;
  background-color: #f9f9f9;
  min-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.2s ease-in-out;
  transform: scale(0);
`;

export const DropDown = styled.div`
  margin: auto 0;
  &:hover ${DropDownContent} {
    transform: scale(1);
    transition: all 0.4s ease-in-out;
  }
`;
