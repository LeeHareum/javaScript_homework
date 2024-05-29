import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: "베이직과제",
      completed: true,
    },
    {
      id: 2,
      text: "제출하기",
      completed: false,
    },
  ]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.prventDefault();
    if (!input.trim()) return;
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    setTodo([...todos, newTodo]);
    setInput("");
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onChange={handleAddTodo}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={input}
          onChange={handleInput}
        />
        <button type="submit">추가</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button>완료</button>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
