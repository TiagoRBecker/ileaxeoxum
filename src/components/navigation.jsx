import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="d-flex align-items-center justify-content-center page-scroll  " href="#page-top">
            <img src="/img/logo.png" alt="Logo" className="logo"/>
          </a>{" "}
        </div>
         
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
        
          <ul className="nav navbar-nav navbar-right">
         
            <li>
              <a href="#about" className="page-scroll">
                Sobre o Ilê
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Serviços
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li>
           
            <li>
              <a href="#contact" className="page-scroll">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
