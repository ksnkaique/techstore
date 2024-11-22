import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>App disponível para Android e iOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            TECH<span>STORE</span>
          </h1>
          <p>
            Os melhores preços do e-commerce brasileiro
          </p>
        </div>

        <div className="links">
          <h3>Links úteis</h3>
          <ul>
          <li>
              <Link to="/">Torne-se afiliado</Link>
            </li>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          Copyright 2025 - Todos Direitos Reservados - kDev
        </p>
      </div>
    </footer>
  );
}
