import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EasyPage() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleCheck = () => {
    alert(`입력한 숫자: ${value}`);
  };

  return (
    <div>
      <h2>EASY 모드</h2>
      <p>쉬운 난이도입니다. 숫자를 맞혀보세요!</p>
      <input
        placeholder="숫자 입력"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleCheck}>확인</button>
      <button onClick={() => navigate("/")}>← 돌아가기</button>
    </div>
  );
}
