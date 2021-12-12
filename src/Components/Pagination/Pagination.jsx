const Pagination = ({ page, setPage }) => {
  const previousPage = () => {
    page <= 1 ? setPage(1) : setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="col-auto">
        <button
          className="btn btn-success mb-3 btn-left"
          onClick={() => previousPage()}
        >
          &lt;
        </button>
      </div>
      <div className="col-md-1">
        <input
          type="text"
          className="form-control page"
          disabled
          value={page}
        ></input>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-success mb-3 btn-right"
          onClick={() => nextPage()}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Pagination;
