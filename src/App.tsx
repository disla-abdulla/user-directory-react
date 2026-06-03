import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import { useCallback, useState } from "react";
import UserDetails from "./components/UserDetails";
import useDebounce from "./hooks/useDebounce";
import usePageTitle from "./hooks/usePageTitle";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import AddUserForm from "./components/AddUserForm";
function App() {
  console.log("App rendered");
  const [searchData, setSearchData] = useState("");
  const location = useLocation();
  const [count, setCount] = useState(0);
  const isHomePage = location.pathname === "/" || location.pathname === "";
  // here useCallback is used for memoising the function handlesearchname so that it won't get recreated everytime when the component re-renders.
  const handleSearchName = useCallback((user) => {
    setSearchData(user);
  }, []);
  // using custom hook for displaying tab name
  usePageTitle("User Directory");
  // calling custom hook for debouncing
  const debouncedSearch = useDebounce(searchData, 500);
  return (
    <div className="main-container">
      <Navbar />
      {/* displaying searchbar and heading for homepage only */}
      {isHomePage && (
        <>
          <UserSearch sendSearchName={handleSearchName} />
          {searchData !== debouncedSearch && (
            <p className="searching">Searching...</p>
          )}
          {/* adding a count button just to understand the behaviour of useCallback on handleSearch Function and thereby preventing the re-rendering of UserSearch Component as props remain unchanged.  */}
          <button
            onClick={() => setCount(count + 1)}
          >{`Count: ${count}`}</button>
        </>
      )}
      <Routes>
        <Route path="/" element={<UserList search={debouncedSearch} />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-user" element={<AddUserForm />} />
      </Routes>
    </div>
  );
}
export default App;
