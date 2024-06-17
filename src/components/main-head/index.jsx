import Button from "../button";
import "./main.css";
import imageDev from "../../assets/icons/dev_icon.svg";

function MainHead() {
  return (
    <div className="main-head">
      <div className="container">
        <img src={imageDev} alt="Dev icon"></img>
        <span className="main_text">DEV. sistema de gerenciamento de pedido e cotação.</span>
        <span className="description_text">Feito para empresas importadoras de remédios.</span>
      </div>
      <div className="button_container">
        <Button
          text="Agende uma demonstração"
          variant="secondary"
        />
        <Button
          text="Quero assinar agora"
        />
      </div>
    </div>
  );
}

export default MainHead;