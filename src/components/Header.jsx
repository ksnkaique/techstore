import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Dê uma cara nova para o seu trabalho!</h2>
          <p>
            O sucesso não está na grandeza imediata, mas na persistência. 
            O esforço contínuo supera qualquer obstáculo, e a grandeza é consequência natural desse caminho.
          </p>
          <Link to="/products" className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="/images/header-image.png" alt="Products" />
        </div>
      </div>
    </header>
  );
}
