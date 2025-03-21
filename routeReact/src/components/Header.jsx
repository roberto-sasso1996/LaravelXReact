function Header({title}) {
    return (
        <div className="container-fluid bg-body-tertiary">
            <div className="row justify-content-center">
                <div className="col-12 text-center my-5">
                    <h1 className="display-1 my-3">{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default Header