import { useEffect, useState } from "react";

function App() {
  let test_todo = {
    content: "테스트 할일",
    checked: false,
  };

  const [list, setList] = useState([test_todo]); //return array
  const [input, setInput] = useState(""); //return array

  function handleAdd(content) {
    let added_list = [...list];
    added_list.push({
      content,
      checked: false,
    });
    setList(added_list);
  }

  function handleCheckToggle(toggle_index) {
    let toggle_list = [...list];

    toggle_list[toggle_index].checked = !toggle_list[toggle_index].checked;
    //업데이트 반영.
    setList(toggle_list);
  }

  function displayTodo(content, checked, index) {
    function onToggle() {
      handleCheckToggle(index);
    }
    return (
      <div>
        <li>
          {content}{" "}
          <input type="checkbox" checked={checked} onChange={onToggle}></input>
        </li>
      </div>
    );
  }
  function displayTodoList() {
    let todo_list = [];

    for (let i = 0; i < list.length; i++) {
      todo_list.push(displayTodo(list[i].content, list[i].checked, i));
    }
    return todo_list;
  }
  function onInput(event) {
    // event.currentTarget.value
    setInput(event.currentTarget.value);
  }
  function onAdd() {
    if (input != "") handleAdd(input);
    setInput("");
  }
  function Enter(event) {
    // event.code == "KeyW"
    if (event.code == "Enter") {
      onAdd();
    }
  }
  return (
    <div>
      <ul>
        새 할일 :{" "}
        <input
          type="text"
          value={input}
          onChange={onInput}
          onKeyUp={Enter}
        ></input>
        <input type="button" value={"추가"} onClick={onAdd}></input>
        {displayTodoList()}
      </ul>
    </div>
  );
}

export default App;
