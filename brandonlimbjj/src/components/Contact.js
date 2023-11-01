import Facebook from "../media/Facebook.png"
import Ig from "../media/Ig.png"

const Contact = () => {
  return (
    <>
      {/* Email */}
        <div class="container-fluid p-5 text-center">
          <p class="fs-4">
            To book a private lesson, ask about pricing or any other inquiry; please <a href="mailto:brandonlim10p@icloud.com">email me here</a> with the subject line: Brandon Lim BJJ
          </p>
        </div>
      {/* Links */}
      <div class="footer-wrapper text-center">
        <div class="mk-col-1-3">
          <a href="https://www.instagram.com/brandonlim10p">
            <img src= {Ig}></img>
          </a>

          <a href="https://www.facebook.com/brandonlim10p">
            <img src= {Facebook}></img>
          </a>
      </div>
      </div>
    </>
  );
};

export default Contact;
