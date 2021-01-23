import React, { useState, useEffect } from "react";
import API from "./API";
import NavBar from "./components/navBar/NavBar";
import MainPage from "./pages/MainPage";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getUsers().then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <NavBar users={users} />
      <MainPage />
    </div>
  );
};

export default App;
