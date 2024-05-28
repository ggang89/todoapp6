import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoBox() {
  const [newTodo, setNewTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const handleAddText = (e) => {
    setNewTodo(e.target.value);
    //console.log("e.target",e.target);
    //console.log("e.target.value",e.target.value);
  };
  const addBtn = () => {
    const addTodo = { id: uuidv4(), title: newTodo, isEditing: false };
    console.log("addtodo", addTodo);
    setTodoList([addTodo, ...todoList]);
    //여기에 왜 []을 감싸주나?
    //todoList가 배열이므로 감싸줄 필요 없지 않나? => [{addTodo},[todoList]]
    //set함수가 새로운 todoList를 만들어준다 ???
    console.log("todolist", todoList);
    setNewTodo(" ");
  };

  return (
    <div>
      <>
        <label htmlFor="newTodo">새로운 할 일 </label>
        <input
          onChange={handleAddText}
          value={newTodo}
          id="newTodo"
          type="text"
          placeholder="할 일을 추가하세요"
        ></input>
        <button onClick={addBtn}>➕추가</button>
      </>

      <ul>
        {todoList.map((t) => (
          <li>
            {t.title}
            <button>수정</button>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
