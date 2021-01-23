import React, { useEffect, useState } from "react";
import API from "../../API";
import Select from "react-select";

const SearchBar = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleOnChange = (e) => setSelectedUser(e.value);

  const getSelectOptions = () =>
    users.map((u) => ({ label: u.username, value: u.username }));

  useEffect(() => {
    if (!selectedUser) return;
    
    API.getUser(selectedUser)
      .then((resp) => {
        if (resp.error) throw Error(resp.error);
        console.log(resp);
      })
      .catch(() => console.log("User not found"));
  }, [selectedUser]);

  return (
    <Select
      value={selectedUser}
      onChange={handleOnChange}
      options={getSelectOptions()}
      placeholder={"Search by user name"}
    />
  );
};

export default SearchBar;
