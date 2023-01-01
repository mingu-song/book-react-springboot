import React, { useCallback } from "react";
// useSelector, useDispatch 훅 임포트
import { useSelector, useDispatch } from "react-redux";
// 액션 생성 함수 임포트
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
} from "../modules/todos";
import Todos from "../components/Todos";
import { TodoState } from "../modules/todos";

// useSelector, useDispatch 훅 사용
const TodosContainer = () => {
  // 스토어 상태 조회
  const { input, todos } = useSelector((state: TodoState) => ({
    input: state.input,
    todos: state.todos,
  }));

  // 스토어 dispatch 사용 가능
  const dispatch = useDispatch();

  // 스토어 상태 변경 함수 작성
  const onChangeInput = useCallback((input: string) => dispatch(changeTodoInput(input)), [dispatch]);
  const onInsert = useCallback((input: string) => dispatch(addTodo(input)), [dispatch]);
  const onToggle = useCallback((id: number) => dispatch(toggleTodoStatus(id)), [dispatch]);
  const onRemove = useCallback((id: number) => dispatch(removeTodo(id)), [dispatch]);
  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onClearAll={onClearAll}
    />
  );
};

export default TodosContainer;