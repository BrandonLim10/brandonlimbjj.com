import page404img from "../media/page404.jpg";
import "../App.css";

const PageNotFound = () => {
  return (
    <>
      <img className="bg404" src={page404img} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-2 my-0 text-center">
            <p className="lead m-0 fw-bolder" style={{ fontSize: "10em" }}>
              404
            </p>
            <p className="lead m-0 fw-bold">
              URL "{window.location.href}" does not exist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
