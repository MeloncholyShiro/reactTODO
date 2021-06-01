import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../const";
import { useFetch } from "../../API";
import { LinearButton } from "../../components/LinearButton";
import {
  Autorization,
  Container,
  ContainerLoginFormButton,
  ErrorNothing,
  FormInput,
  FormWrapInput,
  LoginForm,
  LoginFormTitle,
  LoginWrap,
} from "./styled";

export const Authorize: React.FC = () => {
  const [inputLogin, setLogin] = useState<string>("");
  const [inputPassword, setPassword] = useState<string>("");
  const [errorLog, setErrorLog] = useState<boolean>(false);
  const [errorPas, setErrorPas] = useState<boolean>(false);

  const history = useHistory();
  const fetch = useFetch();

  const checkAuth = () => {
    if (!inputLogin) {
      errorAutorization();
    } else {
      const fetchBody: string = JSON.stringify({
        loginData: { login: inputLogin, password: inputPassword },
      });
      fetch(`${API_URL}/authorize`, "POST", {
        body: fetchBody,
      }).then((response) => {
        !response.isLogin ? errorAutorization() : history.push("/organization");
      });
    }
  };

  const errorAutorization = () => {
    setErrorLog(true);
    setErrorPas(true);
  };

  return (
    <>
      <Autorization>
        <Container>
          <LoginWrap>
            <LoginFormTitle>Account Login</LoginFormTitle>
            <LoginForm>
              <FormWrapInput className={errorLog === true ? "errorActive" : ""}>
                <FormInput
                  type="text"
                  name="username"
                  placeholder="Login"
                  autoComplete="off"
                  value={inputLogin}
                  onChange={(e) => setLogin(e.target.value)}
                  onClick={() => setErrorLog(false)}
                />
              </FormWrapInput>
              {errorLog && <ErrorNothing>Некорректный Login</ErrorNothing>}
              <FormWrapInput className={errorPas === true ? "errorActive" : ""}>
                <FormInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={inputPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  onClick={() => setErrorPas(false)}
                />
              </FormWrapInput>
              {errorPas && <ErrorNothing>Некорректный пароль</ErrorNothing>}

              <ContainerLoginFormButton>
                <LinearButton type="button" onClick={checkAuth}>
                  Login
                </LinearButton>
              </ContainerLoginFormButton>
            </LoginForm>
          </LoginWrap>
        </Container>
      </Autorization>
    </>
  );
};

export default Authorize;
