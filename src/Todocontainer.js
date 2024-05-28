import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer() {
  const [todoList, setTodoList] = useState([]);
  //todoList를 state로 만들때부터 uuid를 설치해 줘야 하나?
  //아니면 새로운 투두를 해줄때 설치해줘야하나?
  //내생각=>todoList부터 해줘야 한다. 그래야 id값이 있고, 그래야 삭제추가기능을 쓸 수 있다.
  //근데 빈배열로 시작하는데, 어떻게 객체요소를 아는건지...

  const [addTodo, setAddTodo] = useState(" ");

  //NEW todo
  const handleNewTodo = (e) => {
    setAddTodo(e.target.value);
  };
  const newAddBtn = () => {
    const newArr = { id: uuidv4(), title: addTodo, isEditing: false }; //이 객체 안에 내가 원하는 형식 미리 넣어줘야 한다(id,title 등등)

    setTodoList([newArr, ...todoList]);
    setAddTodo(" ");
  }; //todoList에 값이 추가 안됨

  //todoList

  const editBtn = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };
  const delBtn = (id) => {
    const newArr = todoList.filter((t) => {
      return t.id !== id;
    });
    setTodoList(newArr);
  };
  console.log(todoList);
  return (
    <>
      <div>
        <label htmlFor="addTodo">New Todo</label>
        <input
          onChange={handleNewTodo}
          type="text"
          id="addTodo"
          value={addTodo}
        ></input>
        <button onClick={newAddBtn}>추가</button>
      </div>

      <ul>
        {todoList.map((t) => {
          return t.isEditing ? (
            <li key={t.id}>
              <input value={t.title}></input>
              <button onClick={() => editBtn(t.id)}>수정</button>
              <button onClick={() => delBtn(t.id)}>삭제</button>
            </li>
          ) : (
            <li key={t.id}>
              {t.title}
              <button onClick={() => editBtn(t.id)}>수정</button>
              <button onClick={() => delBtn(t.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
//오류?=>근데 이렇게 만들고 화면 보면, todoList에 왜 버튼만 먼저 보이는 건가.

//새로운 투두를 추가해서 투두 리스트에서 보여지는거 안됨
//1.uuid언제 설치해줘야하나
//2.map으로 투두리스트에 보여줘야 하는데 모르겠다.
