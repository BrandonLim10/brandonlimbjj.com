import Blackbeltpromojpg from "../media/Blackbeltpromo.jpg";
import JapJJ from "../media/JapJJ.jpg";
import Savages from "../media/Savages.jpg";
import Gi from "../media/Gi.jpg";
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
            <img src={Blackbeltpromojpg} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>10th Planet Black Belt</h5>
              <p>On July 25th 2022 I received my black belt in 10th Planet Jiu-Jitsu under Eddie Bravo after 9 years of training.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={JapJJ} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>2nd Degree Brown Belt in Japanese Jiu-Jitsu</h5>
              <p>From the age of 9 to 18 I practiced Japanese Jiu-Jitsu under Sensei Alan Whitaker from whom I received my 2nd degree brown belt on July 7th, 2012.</p>
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
    </div>

      <div className="container-fluid p-5 border border-danger border-4 bg-dark text-white">
        <p class="fs-4">
            Hello my name is Brandon Lim. I am a life long martial artist whom specializes in No-Gi Brazilian Jiu-Jitsu and submission grappling. I can help you build skills, confidence and a base of knowledge to help you in your martial arts journey and beyond. My teaching philosophy is to balance movement, skills and knowledge. I believe to achieve a high proficiency in anything in life you must memorize, master and then adapt whatever you are learning whether that be a skill in martial arts or life. The memorization part is the first part of learning any movement or skill, breaking the task up into bite size pieces then building a flow of movements that add up to a technique. Once you memorize the basic technique or combination of technique and movements we call a path; next is mastering that technique or path until you can perform the movements without having to directly think about each movement making it second nature which is achieved through rigorous drilling. The final piece is now adapting these techniques and paths into real time situations such as a free sparring session, a competition or self defense situations; which is achieved through drilling with increasing amounts of resistance in multiple scenarios.
        </p>
      </div>


      <div class="row mx-5 my-5">
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
              <a href="/contact" class="btn btn-primary">Email me</a>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default Home;
