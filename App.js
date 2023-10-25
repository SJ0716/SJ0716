import { useEffect, useState } from "react";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([
    {
      name: "자바스크립트 공부하기",
      compleated: false,
    },
    {
      name: "CSS 공부하기",
      compleated: true,
    },
    {
      name: "HTML 공부하기",
      compleated: false,
    },
  ]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addTodo = () => {
    if (todoName.trim() !== "") {
      const newTodo = {
        name: todoName,
        compleated: false,
      };
      setTodos([...todos, newTodo]); 
      setTodoName(""); 
    }
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <div>{todo.name}</div>
          <input
            type="checkbox"
            onChange={() => {
              const temp = [...todos];
              temp[index].compleated = !temp[index].compleated;
              setTodos(temp);
            }}
            checked={todo.compleated}
          />
        </div>
      ))}

      <input
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        placeholder="할 일 이름 입력"
      />
      <button onClick={addTodo}>할 일 추가</button>
    </div>
  );
}

export default App;
