import Basket from "../../components/basket/basket";
import Header from "../../components/header/Header";
import {useState} from "react"
import "./main.scss"

function Main() {
  const [basketActive, setbasketActive] = useState(false)

  document.title = "Головна"

  return (
    <>


      <Header active={basketActive} setActive={setbasketActive} />

      <Basket active={basketActive} setActive={setbasketActive}/>
      <section className="main">
        <div className="decoration-green1"></div>
        <div className="decoration-purple1"></div>
        <div className="decoration-purple2"></div>
      </section>
    
    </>
  );
}

export default Main;
