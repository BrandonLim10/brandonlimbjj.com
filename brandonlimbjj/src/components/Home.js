import Blackbeltpromojpg from "../media/Blackbeltpromo.jpeg";
import JapJJ from "../media/JapJJ.jpeg";
import Savages from "../media/Savages.jpeg";
import Gi from "../media/Gi.jpeg";
import Darce from "../media/Darce.png";
import Ashi from "../media/Ashibackstep.jpg";




const Home = () => {
  return (
    <>
    <div class="container-sm">
      <div id="carouselExampleCaptions" class="carousel slide p-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={JapJJ} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>2nd Degree Brown Belt in Japanese Jiu-Jitsu</h5>
              <p>From the age of 9 to 18 I practiced Japanese Jiu-Jitsu under Sensei Alan Whitaker from whom I received my 2nd degree brown belt on July 7th, 2012.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Blackbeltpromojpg} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>10th Planet Black Belt</h5>
              <p>On July 25th 2022 I received my black belt in 10th Planet Jiu-Jitsu under Eddie Bravo after 9 years of training.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Gi} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Life long martial artist</h5>
              <p>I have practiced martial arts from the age of 7 and spanning multiple styles such as Karate, Japanese Jiu-Jitsu, Kabudo, Wrestling, Boxing and No-gi Brazilian Jiu-Jitsu.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-sm p-5">
        <p>
            Hello my name is Brandon Lim. I am a life long martial artist whom specialized in No-gi Brazilian Jiu-Jitsu and submission grappling. I can help you build skills, confidence,
        </p>
      </div>
    </div>


      <div class="row mx-5">
        <div class="col-sm-4">
          <div class="card">
            <img src={Darce} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Private Lessons</h5>
              <p class="card-text">Work 1 on 1 or in a small group private environment to get a more detailed instruction and customized lesson plan to build skills faster tailored to your needs.</p>
              <a href="/privatelessons" class="btn btn-primary">Apply today</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src={Ashi} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Group Classes</h5>
              <p class="card-text">I teach regular classes at 10th Planet Jiu-Jitsu Headquarters in Downtown Los Angeles.</p>
              <a href="/classes" class="btn btn-primary">Sign up</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src={Savages} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Contact</h5>
              <p class="card-text">If you have any questions or concerns about training with my, please contact me.</p>
              <a href="/classes" class="btn btn-primary">Message me</a>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default Home;
