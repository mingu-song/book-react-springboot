import styles from "../Todo.module.css"
import React from "react";

// props 타입스크립트 인터페이스 정의
interface Props {
  readonly input: string;
  readonly onInsert: (input: string) => void;
  readonly onChangeInput: (input: string) => void;
}

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
const TodoInput = ({ input, onInsert, onChangeInput }: Props) => {
  // 폼 submit 이벤트 처리 함수
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onInsert(input);
    onChangeInput("");
  };
  // 텍스트 입력 요소 변경 이벤트 처리 함수
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value);
  return (
    <div className={styles.input}>
      {/* 이벤트 처리 함수 지정 */}
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoInput;