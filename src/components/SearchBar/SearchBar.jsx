import styles from "./SearchBar.module.css";
import searhIcon from "../../assets/icon-search.svg";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";

export default function SearchBar({ onSearchHandle }) {
  const [query, setQuery] = useState("");

  const handleClick = () => {
    if (query.trim() === "") return;
    onSearchHandle(query);
    setQuery("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <img src={searhIcon} alt="Search" />
        <input
          type="text"
          value={query}
          placeholder="Search for a place.."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <CustomButton onClick={handleClick}>Search</CustomButton>
    </div>
  );
}
