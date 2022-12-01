

function TitlePages({ title, description }) {
    return (
        <div className="col-xl-8">
            <div className="container-fluid">
                <h1 className="m-0 font-weight-bold text-black">{title}</h1>
                <p className="mb-4 text-pages">{description}</p>
            </div>
        </div>
    );
}

export default TitlePages;
