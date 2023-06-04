import "./header.scss";
import logo from "../../images/headerlogo.png";
import {NavLink,Link} from "react-router-dom"
import Icon from "../icon/Icon";

import bagIcon from "../../images/svg/bag.svg"
import lupa from "../../images/svg/lupa.svg"
import telefon from "../../images/svg/phone.svg"


function Header({active,setActive}) {

  return (
    <div className="header">
      <div className="container">
        <nav className="navBar">
          <ul className="navBar__list">
            <li className="nav__link">
                <Link to="cal">
                    <img src={logo} alt="LF" />
                </Link>
              
                
            </li>
            <li className="nav__link">
              <NavLink to="catalog">Каталог</NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="delivery">Доставка и оплата </NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="about-us">О нас</NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="contacts">Контакти</NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="FAQ">FAQ</NavLink>
            </li>
          </ul>
        </nav>
        

        <div className="find-form">
          <img src={lupa}/>
            <input type="text" placeholder="ПОШУК" />
        </div>

        <div className="telefonField">
            <img src={telefon}/>
            <h1>+375 (29) 113-69-69</h1>
        </div>
        <div onClick={()=>setActive(!active)} className="bag-container">
          <Icon icon={bagIcon}/>
          <div className="indicator">1</div>
        </div>

    
        
      </div>
    </div>
  );
}

export default Header;
