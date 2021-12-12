const Search = ({ setSearchString }) => {

    const formSubmit = (event) => {
        event.preventDefault();
        setSearchString(event.target.searchString.value);
    };

    return (
        <>
            <div className="container">
                <form onSubmit={(event) => formSubmit(event)}>
                    <div className="input-group mt-3 mb-3">
                        <input type="text" className="form-control search-string" name="searchString" placeholder="Pretražite"
                            aria-label="Pretražite" aria-describedby="button-addon2"></input>
                        <button className="btn btn-primary btn-search" type="submit" id="button-addon2">Pretražite</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Search;