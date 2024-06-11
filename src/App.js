import React, { useState, useRef } from "react";

import axios from "axios";
import Chat from "./asssets/Chat png.png";
import Trash from "./asssets/trash-can.png";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {

  const data = await axios.post("http://localhost:3001")

    // setUsers([
    //   ...users,
    //   {
    //     id: Math.random(),
    //     name: inputName.current.value,
    //     age: inputAge.current.value,
    //   },
    // ]);
  }

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="chat-image" src={Chat} />
      <ContainerItens>
        <H1> Olá </H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" ref={inputName} />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" ref={inputAge} />
        <Button onClick={addNewUser}> Cadastrar </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata-de-Lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
