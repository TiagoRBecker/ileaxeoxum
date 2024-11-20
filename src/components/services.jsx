import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>
             Agende sua consulta  conosco
          </p>
        </div>
        <div className="row justify-content-center">
          {props.data
            ? props.data.map((d, i) => (
              <a href="https://api.whatsapp.com/send?phone=5551991373566&text=%22Ol%C3%A1!%20Estou%20buscando%20ajuda%20e%20orienta%C3%A7%C3%A3o%20em%20quest%C3%B5es%20espirituais.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20e%20como%20posso%20agendar%20uma%20consulta." target="_blank">
                <div key={`${d.name}-${i}`} className="col-md-4 justify-content-center">
                  {" "}
                  <img src={d.img}  alt="Logo"className="rounded"/>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
                </a>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
