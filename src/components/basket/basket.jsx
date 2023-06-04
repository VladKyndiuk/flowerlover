import "./basket.scss";
import closeIcon from "../../images/svg/close.svg";
import Icon from "../icon/Icon";

function Basket({ active,setActive }) {
  return (
    <>
      <div className={active ? "basket active" : "basket"}>
        <div className="basket-container">
          <div className="nadpis">
            Ваш кошик
            <div className="close-button" onClick={() => setActive(!active)}>
              <Icon icon={closeIcon} />
            </div>
          </div>
          <hr className="line"></hr>
        </div>
        <div onClick={() => setActive(!active)} className={active ? "blur active":"blur"}></div>
      </div>
      {/* <div className="blur"></div> */}
    </>
  );
}

export default Basket;
