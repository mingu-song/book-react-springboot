import TodoItem from "./TodoItem";
import styles from "../Todo.module.css"
// 타입스크립트 인터페이스 임포트
import { Todo } from "../App";

// props 타입스크립트 인터페이스 정의
interface Props {
  readonly todos: Todo[];
  readonly onRemove: (id: number) => void;
  readonly onToggle: (id: number) => void;
}

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
const TodoList = ({ todos, onRemove, onToggle }: Props) => {
  return (
    <div className={styles.list}>
      {/* Todo 목록 표시 */}
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;