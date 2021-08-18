const Filtered = (props) => {
  return (
    <div className="row">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.statusFunc("All")}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => props.statusFunc("Comp")}
      >
        Inco
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => props.statusFunc("Incomp")}
      >
        Comp
      </button>
    </div>
  );
};

export default Filtered;
