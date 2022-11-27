import "./About.css";
import image from "../../assets/img.png";

const About = () => {
  return (
    <>
      <div className="container row mx-auto">
        <div className="col-12 col-lg-6 mt-5">
          <h3 className=" rounded-3 py-3 my-2 bg-gradient text-center">
            Bienvenidos a mi Portafolio
          </h3>
          <br />
          <p className="col-12">
            ✔️Soy Carlos Otero (Charly), soy estudiante autodidacta de Gral
            Alvear, Mza. - Argentina. Me gusta estar enfrente a una computadora
            analizando y escribiendo código. Se que tengo mucho que aprender,
            pero me gusta este mundo de la programación.
          </p>
        </div>
        <img src={image} alt="" width="350px" className="col-12 col-lg-6 img-fluid" />
      </div>
    </>
  );
};
export default About