// import { useState } from "react";
// import emailjs from "emailjs-com";
import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const clearState = () => setState({ ...initialState });


  const handleSubmit = () => {
    // e.preventDefault();
    // console.log(name, email, message);

    window.open("https://api.whatsapp.com/send/?phone=5519998018174&text=Ol%C3%A1+estou+interessado+em+saber+mais+sobre+os+servi%C3%A7os+da+Kalify+Inc.&type=phone_number&app_absent=0", "_blank");

  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Entre em contato</h2>
                <p>
                  Entre em contato diretamente com o nosso CEO através do WhatsApp e agende uma reunião para entendermos
                  a necessidade do seu projeto ou seu negócio.
                </p>
                <button type="submit" onClick={handleSubmit} className="btn btn-custom btn-lg">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
                </button>
              </div>
              {/* <form name="sentMessage"> */}
              {/* <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                      // required
                      // onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      // required
                      // onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensagem"
                  // required
                  // onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div> */}
              {/* <div id="success"></div> */}
              {/* <button type="submit" onClick={handleChange} className="btn btn-custom btn-lg">
                  Send Message
                </button> */}
              {/* </form> */}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informações de Contato</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Onde estamos localizados?
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Nosso WhatsApp
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email de suporte
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            © 2018 - {new Date().getFullYear()} Kalify Inc - Todos os direitos reservados - Kalify Inc é uma subsidiária da&nbsp;<a href="https://justkindred.vercel.app/" target='_blank' rel="noopener noreferrer">Kindred Software</a>.
          </p>
        </div>
      </div >
    </div >
  );
};
