import styled from "styled-components";
import Background from "./asssets/background-color React.jpg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  height: 170px;
  width: 170px;
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  color: #000;
  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  height: 58px;
  width: 342px;

  border: none;
  outline: none;
  padding-left: 25px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #000;

  margin-bottom: 34px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;

  background: rgb(0, 0, 0);
  border-radius: 14px;
  border: none;

  font-style: normal;
  font-weight: bolder;
  font-size: 17px;
  line-height: 28px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  height: 58px;
  width: 342px;

  border: none;
  outline: none;

  margin-top: 20px;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;

    color: #000;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
