import { Link } from "react-router-dom";
import Ten from "../media/Tenplogo.jpg";

const Classes = () => {
  return (
    <>
      <div
        className="container-fluid my-3"
        style={{
          backgroundImage: `url(${Ten})`,
          backgroundSize: "contain",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="row my-5">
          <div className="col-lg my-5 py-5 text-white text-center">
          </div>
        </div>
      </div>
      <div class="container-sm">
        <table class="table table-bordered border border-5">
          <thead>
            <tr>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>*On Haitus*</td>
              <td>*On Haitus*</td>
              <td>*On Haitus*</td>
              <td>*On Haitus*</td>
              <td>*On Haitus*</td>
              <td>*On Haitus*</td>
              <td>*On Haitus*</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container-sm p-5">
        <p class="fs-4">
          To sign up for classes at 10th Planet Headquarters click the link
          below; then click the highlighted email address
          "info@.10thplanetjj.com" to sign up for a monthly membership or buy a
          day pass.
        </p>
      </div>

      <div class="d-block mb-2 text-center">
        <Link
          class="btn btn-primary"
          to="https://www.10thplanetjj.com/locations/"
          target="_blank"
          role="button"
        >
          10th Planet HQ sign up
        </Link>
      </div>
    </>
  );
};

export default Classes;
