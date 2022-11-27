import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/nav";
// import Skill from "./components/Skill/Skill";
import Skills from "./components/Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Header />
          {/* <Home /> */}
          <Nav />
          <About />
          {/* <Skill /> */}
          <Skills />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
