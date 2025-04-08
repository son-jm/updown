import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>난이도를 선택하세요</h1>
      <button onClick={() => navigate("/easy")}>EASY</button>
      <button onClick={() => navigate("/normal")}>NORMAL</button>
      <button onClick={() => navigate("/hard")}>HARD</button>
    </div>
  );
}
