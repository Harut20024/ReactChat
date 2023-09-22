// App.js (unchanged)
import './App.css';
import { useState } from 'react';
import RegisterForm from '../Componets/RegisterForm/RegisterForm';
import LogForm from '../Componets/LogForm/LogForm';
import Home from '../Componets/Home/Home';

function App() {
  const [page, setPage] = useState("reg");
  const [usersData, setUsersData] = useState([]);
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <button onClick={() => setPage("reg")}>reg</button>
      <button onClick={() => setPage("log")}>log</button>
      <button onClick={() => setPage("home")}>home</button>
      <br /><hr />
      {page === "reg" ? (
        <RegisterForm usersData={usersData} setUsersData={setUsersData} setPage={setPage} />
      ) : page === "log" ? (
        <LogForm usersData={usersData} setUserName={setUserName} setPage={setPage} />
      ) : (
        <Home userName={userName} />
      )}
    </div>
  );
}

export default App;