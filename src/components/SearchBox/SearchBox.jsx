import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Find contacts by name"
    />
  );
};

export default SearchBox;
