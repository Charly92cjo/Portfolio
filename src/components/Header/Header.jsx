import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <div
        className="container-fluid container-header text-center text-uppercase my-1 mt-3"
        id="header"
      >
        {/* <h1 className="fs-2" data-aos="fade-down" data-aos-duration="1500"> */}
        <h1 className="fs-1">
          Hola soy <span className="titulo">carlos otero</span>
        </h1>
        {/* <h2
          className="text-info fs-3 mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        > */}
        <h2 className="text-info fs-3 mb-2">
          desarrollador Web
        </h2>
      </div>
    </>
  );
};

export default Header;
