import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/pai.jpg" className="img-responsive" alt="Pai" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre o Ilê</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
           
            </div>
            
          </div>
        </div>
        <div className="row">
          
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>História do Babalorixà</h2>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              
           
            </div>
            
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/pa2.jpg" className="img-responsive " alt="Pai" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
