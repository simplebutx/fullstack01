import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('백엔드랑 아직 통신 전');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
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
