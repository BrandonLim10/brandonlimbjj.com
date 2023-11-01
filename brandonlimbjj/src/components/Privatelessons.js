import Gogojpg from "../media/Gogo.jpg";

const PrivateLessons = () => {
    return (
      <>
        <div 
        className="container-fluid border border-5"
        style={{ 
          backgroundImage: `url(${Gogojpg})`,
          backgroundSize: 'cover',
          height: '500px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
          }}>
          <div className="row my-5">
            <div className="col-lg my-5 py-5 text-white text-center">
              <strong>Hello and welcome to my private lessons page</strong>
            </div>
          </div>
        </div>
        <div class="container-sm py-5">
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
                <td>9am to 11am</td>
                <td>*On Haitus*</td>
                <td>9am to 11am</td>
                <td>*On Haitus*</td>
                <td>*On Haitus*</td>
                <td>*On Haitus*</td>
              </tr>
            </tbody>
        </table>
        </div>

        <div className="container-fluid p-5 text-center">
        <p class="fs-4">
            Click the link below to message me regarding pricing and schedule your first lesson!
        </p>
      </div>

        <div class="d-block mb-2 text-center">
        <a href="mailto:brandonlim10p@icloud.com" class="btn btn-primary">Email me for private lesson</a>
      </div>

      </>
    );
  };
  
  export default PrivateLessons;