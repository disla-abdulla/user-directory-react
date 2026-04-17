import "./App.css";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import { useState } from "react";
function App() {
  const [searchData, setSearchData] = useState("");
  const handleSearchName = (user) => {
    setSearchData(user);
  };
  return (
    <div className="main-container">
      <h1 className="app-heading">User Directory</h1>
      <UserSearch sendSearchName={handleSearchName} />
      <UserList search={searchData} />
    </div>
  );
}
export default App;
