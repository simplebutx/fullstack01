import { useEffect, useState } from 'react';
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  
function App() {
  const [msg, setMsg] = useState('백엔드랑 아직 통신 전');

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMsg(data.msg))
      .catch((err) => {
        console.error(err);
        setMsg('요청 에러');
      });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>React + Node 풀스택 연습</h1>
      <p>서버 메시지: {msg}</p>
    </div>
  );
}

export default App;
