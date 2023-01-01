// 타입스크립트 인터페이스 임포트
import { Todo } from "../App";
import { createAction } from "redux-actions"
import { createReducer } from "typesafe-actions"

// 액션 타입
const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT";
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
const REMOVE_TODO = "REMOVE_TODO";
const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS";

// createAction 함수 사용
export const changeTodoInput = createAction(CHANGE_TODO_INPUT, (input: string) => input);

export const addTodo = createAction(ADD_TODO, (input: string) => ({
  text: input,
  done: false,
}));

export const toggleTodoStatus = createAction(TOGGLE_TODO_STATUS, (id: number) => id);

export const removeTodo = createAction(REMOVE_TODO, (id: number) => id);

export const clearAllTodos = createAction(CLEAR_ALL_TODOS);

export interface TodoState {
  input: string;
  todos: Todo[];
  nextTodoId: number;
}

// 초기 상태
const initialState: TodoState = {
  input: "",
  todos: [],
  nextTodoId: 1,
};

// createReducer 함수 사용
const todos = createReducer(
  initialState,
  {
    [CHANGE_TODO_INPUT]: (state, { payload: input }) => ({
      ...state,
      input: input,
    }),
    [ADD_TODO]: (state, { payload: todo }) => {
      const newTodo = {...todo, id: state.nextTodoId};
      const nextTodoId = state.nextTodoId + 1;

      return ({
        ...state,
        todos: state.todos.concat(newTodo),
        nextTodoId
      })
    },
    [TOGGLE_TODO_STATUS]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE_TODO]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
    [CLEAR_ALL_TODOS]: (state, action) => ({
      ...state,
      todos: [],
    }),
  }
);

export default todos;