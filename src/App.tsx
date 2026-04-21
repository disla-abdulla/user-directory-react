import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import { useEffect, useState } from "react";
import UserDetails from "./components/UserDetails";
function App() {
  const [searchData, setSearchData] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
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
      {/* displaying searchbar and heading for homepage only */}
      {isHomePage && (
        <>
          <h1 className="app-heading">User Directory</h1>
          <UserSearch sendSearchName={handleSearchName} />
          {searchData !== debouncedSearch && (
            <p className="searching">Searching...</p>
          )}
        </>
      )}
      <Routes>
        <Route path="/" element={<UserList search={debouncedSearch} />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}
export default App;
