import { useEffect, useState } from "react";

function App() {
  // const name = "윤승준";
  const [todoName, setTodoName] = useState();
  const { todos, setTodos } = useState([
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
  return (
    <div>
      {todos.map((todo, index) => {
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
          ></input>
        </div>;
      })}
      <input
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        placeholder="할 일 이름 입력 "
      />
      <button onClick={() => {}}></button>
    </div>
  );
}

export default App;
