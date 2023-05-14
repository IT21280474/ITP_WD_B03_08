import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <form>
      <div className="search-wrapper" style={{ display: "flex" }}>
        <div className="form-group">
          <input
            style={{ marginTop: 0, marginBottom: 0 }}
            type="text"
            className="form-control"
            placeholder="Search notifications"
          />
        </div>
        <button
          className="search-btn"
          style={{
            background: `url(search-button-icon-png-9.jpg)`,
            marginLeft: "5px",
          }}
        >
          <BsSearch />   Search
        </button>
      </div>
    </form>
  );
}




