import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NormalPage() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCheck = () => {
    alert(`입력한 숫자: ${value}`);
  };

  return (
    <div>
      <h2>NORMAL 모드</h2>
      <p>노말 난이도입니다. 숫자를 맞혀보세요!</p>
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
