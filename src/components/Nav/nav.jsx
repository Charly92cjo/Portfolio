// import './nav.css';

// const Nav = () => {
//     return (<>  <div className="navigation" >
//     <a href="#header">
//         <i className="bi bi-house-fill icon active-nav" title="Ir a Home"></i>
//     </a>
//     <a href="#about">
//         <i className="bi bi-person-circle icon" title="Sobre mi"></i>
//     </a>
//     <a href="#members">
//         <i className="bi bi-book icon" title="Otros"></i>
//     </a>
//     <a href="#contact">
//         <i className="bi bi-person-lines-fill icon" title="Contacto"></i>
//     </a>
//     <a href="#footer">
//         <i className="bi bi-arrow-down-circle-fill icon" title="Ir a Footer"></i>
//     </a>
// </div></>  );
// }

// export default Nav;
import { AiFillHome } from "react-icons/ai";
import {BsInfoSquare} from 'react-icons/bs'
import { RiContactsFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";

const nav = () => {
  return (
    <nav className="navbar fixed-bottom bg-black">
      <div className="container-fluid">
        <a href="/">
          <AiFillHome className="display-1" />
        </a>
        <a href="/">
          <BsInfoSquare className="display-1" />
        </a>
        <a href="/">
          <GiBrain className="display-1" />
        </a>
        <a href="/">
          <MdWorkOutline className="display-1" />
        </a>
        <a href="/">
          <RiContactsFill className="display-1" />
        </a>
      </div>
    </nav>
  );
};

export default nav;
