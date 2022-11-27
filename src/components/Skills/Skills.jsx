import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import responsive from "../Tools/responsive";
import skills from "../Tools/skills";
const Skills = () => {
  return (
    <>
      <section
        className="skill bg-gradient rounded-4 m-4 container mx-auto mt-5 py-4 "
        id="skills"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h3 className="h3">Habilidades y Herramientas</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.<br></br> Lorem Ipsum has been the
                  industry's standard dummy text.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider rounded-5"
                >
                  {skills.map((skill) => (
                    <div key={skill.id} className="item h-100 mb-5">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="mt-3"
                      />
                      <h5 className="position-absolute bottom-0 start-50 translate-middle-x">
                        {skill.title}
                      </h5>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
