import styles from "../Todo.module.css"

// props 타입스크립트 인터페이스 정의
interface Props {
  readonly onClearAll: () => void;
}

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
const TodoFooter = ({ onClearAll }: Props) => {
  return (
    <div className={styles.footer}>
      {/* 이벤트 처리 함수 지정 */}
      <button onClick={onClearAll}>모두 삭제</button>
    </div>
  );
};

export default TodoFooter;