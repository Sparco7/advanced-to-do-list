

const Search = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <button
            onClick={props.searchForTermOnList}
            className="btn btn-outline-dark my-2 my-sm-0"
            type="submit"
          >
            <i className="fas fa-search"></i>
          </button>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for task"
            aria-label="Search"
            onChange={props.handleSearchTermState}
          />
        </form>
      </nav>
    </div>
  );
};

export default Search;
