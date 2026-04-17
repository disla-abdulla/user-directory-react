import { useState } from "react";

function UserSearch({ sendSearchName }) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    //  Don't allow space as the first character
    if (e.target.value.trimStart() === "") {
      setSearchInput("");
      sendSearchName("");
      return;
    }
    setSearchInput(e.target.value);
    sendSearchName(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        className="user-search"
        placeholder="search user"
        name="user"
        // input handling
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
}
export default UserSearch;
