import './App.css';
import RegForm from '../Componets/RegForm/RegForm';
import LogForm from '../Componets/LogForm/LogForm';
import Home from '../Componets/Home/Home';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("reg");
  const [usersData, setUsersData] = useState([]);
  const [userName, setUserName] = useState('')

  return (
    <div className="App">
      <button onClick={() => setPage("reg")}>reg</button>
      <button onClick={() => setPage("log")}>log</button>
      <button onClick={() => setPage("home")}>home</button>
      <br /><hr />
      {page === "reg" ? (
        <RegForm usersData={usersData} setUsersData={setUsersData} setPage={setPage} />
      ) : page === "log" ? (
        <LogForm usersData={usersData} setUserName={setUserName} setPage={setPage} />
      ) : (
        <Home userName={userName} />
      )}
    </div>
  );
}

export default App;
