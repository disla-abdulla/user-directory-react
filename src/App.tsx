import "./App.css";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import { useEffect, useState } from "react";
function App() {
  const [searchData, setSearchData] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const handleSearchName = (user) => {
    setSearchData(user);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchData);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchData]);
  return (
    <div className="main-container">
      <h1 className="app-heading">User Directory</h1>
      <UserSearch sendSearchName={handleSearchName} />
      {searchData !== debouncedSearch && (
        <p className="searching">Searching...</p>
      )}
      <UserList search={debouncedSearch} />
    </div>
  );
}
export default App;
