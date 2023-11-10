import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([
    {
      name: "자바스크립트 공부하기",
      completed: false,
    },
    {
      name: "CSS 공부하기",
      completed: true,
    },
    {
      name: "HTML 공부하기",
      completed: false,
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = () => {
    if (todoName.trim() !== "") {
      const newTodo = {
        name: todoName,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoName("");
    }
  };
  const handlechange = (index) => {
    const temp = [...todos];
    temp[index].completed = !temp[index].completed;
    setTodos(temp);
  };

  return (
    <Container>
      <Wrapper>
        <TodoList>
          {todos.map((todo, index) => (
            <Todo
              name={todo.name}
              key={index}
              completed={todo.completed}
              onChange={() => handlechange(index)}
            />
          ))}
        </TodoList>

        <InputContainer>
          <TodoInput
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            placeholder="할 일 이름 입력"
          />
          <AddButton onClick={addTodo}>할 일 추가</AddButton>
        </InputContainer>
      </Wrapper>
    </Container>
  );
}

const Todo = ({ name, completed, onChange }) => {
  return (
    <TodoContainer>
      <todoName completed={completed}>{name}</todoName>
      <input type="checkbox" onChange={onChange} checked={completed} />
    </TodoContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const todoName = styled.div`
  color: ${(props) => (props.completed ? "" : "#000000")};
`;

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 7px;
  width: 300px;
  padding: 20px;
`;

const AddButton = styled.button`
  border: 0;
  outline: 0;
  background: #04c270;
  color: white;
  padding: 6px 10px;
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0e8853;
    transform: scale(1.05);
  }
`;

const TodoInput = styled.input`
  border: 1px solid lightgray;
  outline: none;
  width: 65%;
  background: #fff;
  color: #000;
  padding: 6px 10px;
  border-radius: 5px;

  padding: 10px 12px;
`;

const FormGroup = styled.div`
  width: 300px;
  display: flex;
`;

const Container = styled.div`
  background-color: #ced3d7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  overflow-y: scroll;
`;

export default App;
