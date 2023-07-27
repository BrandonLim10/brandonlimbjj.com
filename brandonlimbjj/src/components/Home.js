import Blackbeltpromojpg from "../media/Blackbeltpromo.jpeg";
import Tenplogojpg from "../media/10plogo.jpg";
import Gogojpg from "../media/Gogo.jpeg";
import Brownbeltjpg from "../media/Brownbelt.jpeg";


const Home = () => {
  return (
    <>
      <div className="container-sm text-center">
        <img src={Tenplogojpg} className="img-thumbnail" alt="..."/>
      </div>
      <div className="container-sm">
        <img src={Gogojpg} className="img-thumbnail" alt="..."/>
      </div>
      <div className="container-sm">
        <img src={Brownbeltjpg} className="img-thumbnail" alt="..."/>
      </div>
      <div className="container-sm">
        <img src={Blackbeltpromojpg} className="img-thumbnail" alt="..."/>
      </div>

    </>
  );
};

export default Home;
