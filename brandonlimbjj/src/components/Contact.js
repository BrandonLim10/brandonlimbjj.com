import { Link } from "react-router-dom";
import Facebook from "../media/Facebook.png"
import Ig from "../media/Ig.png"
import Mail from "../media/Gmail.png"

const Contact = () => {
  return (
    <>
      {/* Email */}
        <div class="my-4 px-3 text-center">
          <button>
            <a href="mailto:brandonlim10p@icloud.com">
              <img src= {Mail}></img>
            </a>
          </button>
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
