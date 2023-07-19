import Blackbeltpromojpg from "../media/Blackbeltpromo.jpeg";
import Tenplogojpg from "../media/10plogo.jpg";
import Gogojpg from "../media/Gogo.jpeg";
import Brownbeltjpg from "../media/Brownbelt.jpeg";


const Home = () => {
  return (
    <>
      <div class="container-sm text-center">
        <img src={Tenplogojpg} class="img" alt="..."/>
      </div>
      <div class="container-sm">
        <img src={Gogojpg} class="img-thumbnail" alt="..."/>
      </div>
      <div class="container-sm">
        <img src={Brownbeltjpg} class="img-thumbnail" alt="..."/>
      </div>
      <div class="container-sm">
        <img src={Blackbeltpromojpg} class="img-thumbnail" alt="..."/>
      </div>

    </>
  );
};

export default Home;
