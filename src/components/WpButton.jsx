import { FaWhatsapp } from "react-icons/fa";

const Whatsszapp = () => {
  return (
    <div className="fixed  bottom-24 right-6 md:bottom-4 md:right-8">
      <a  rel="noreferrer" href="https://api.whatsapp.com/send?phone=5551991373566&text=%22Ol%C3%A1!%20Estou%20buscando%20ajuda%20e%20orienta%C3%A7%C3%A3o%20em%20quest%C3%B5es%20espirituais.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20e%20como%20posso%20agendar%20uma%20consulta." target="_blank">
        <div className="pulsar">
          <FaWhatsapp size={40} color="#fff" />
        </div>
      </a>
    </div>
  );
};

export default Whatsszapp;
