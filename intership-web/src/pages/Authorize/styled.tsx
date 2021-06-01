import styled from "styled-components";
import backgroundMain from "../../assets/bg-01.jpg";

export const Autorization = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;

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
    background-color: rgba(0, 0, 0, 0.65);
  }
`;
export const LoginWrap = styled.div`
  width: 390px;
`;
export const LoginFormTitle = styled.span`
  font-weight: 700;
  font-size: 28px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  display: block;
  padding-bottom: 40px;
`;
export const LoginForm = styled.form`
  width: 100%;
  border-radius: 15px;
  background-color: #fff;
  padding-bottom: 33px;
  padding-top: 5px;
`;
export const FormWrapInput = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding: 30px 0;

  &.errorActive {
    border-bottom: 1px solid #ff6161;
  }
`;
export const FormInput = styled.input`
  font-size: 20px;
  color: #555555;
  width: 100%;
  padding: 15px 50px;
`;
export const ContainerLoginFormButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
`;
export const ErrorNothing = styled.div`
  padding: 10px;
  color: #ff6161;
`;
