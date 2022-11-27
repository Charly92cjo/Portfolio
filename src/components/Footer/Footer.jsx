import "./Footer.css";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="container-fluid container-footer text-center mb-0 py-3"
      >
        <div className="social-links mb-3 ">
          <a
            href="mailto:charlyotero92@gmail.com"
            className="m-5"
            title="Ir a Correo"
          >
            {/* <i className="bi bi-envelope-fill fs-2" title="Ir a Correo"></i> */}
            <MdEmail className="color-mail rounded" />
          </a>
          <a
            href="https://www.linkedin.com/in/charlyoteroweb/"
            className="m-5"
            target="_blank"
            rel="noreferrer"
            title="Ir a Linkedin"
          >
            <BsLinkedin className="color-linkedin rounded" />
            {/* <i className="bi bi-linkedin fs-2" title="Ir a Linkedin"></i> */}
          </a>

          <a
            href="https://github.com/Charly92cjo"
            className="m-5 mb-5"
            target="_blank"
            rel="noreferrer"
            title="Ir a GitHub"
          >
            <BsGithub className="color-github rounded" />
            {/* <i className="bi bi-github fs-2" title="Ir a GitHub"></i> */}
          </a>
        </div>
        {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
      </div>
    </>
  );
};

export default Footer;
