import React, { useState } from "react";
import AppDetails from "../components/AppDetails";
import Navigation from "../components/Navigation";
import VideoBackground from "../assets/home.webm";

function App() {
  const [essentialsStatus, setEssentialsStatus] = useState(false);
  const [onigiriStatus, setOnigiriStatus] = useState(false);
  const [findyourpetStatus, setFindyourpetStatus] = useState(false);
  const [empregueiStatus, setEmpregueiStatus] = useState(false);
  const [runinlinuxStatus, setRuninlinuxStatus] = useState(false);

  const checkUrlStatus = (url, setStatus) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          setStatus(true);
        } else {
          console.log("A URL retornou um erro: ", response.status);
          setStatus(false);
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao acessar a URL: ", error);
        setStatus(false);
      });
  };

  checkUrlStatus("https://webessentials.com.br", setEssentialsStatus);
  checkUrlStatus("https://onigirihardcore.com.br", setOnigiriStatus);
  checkUrlStatus("https://findyourpet.vercel.app", setFindyourpetStatus);
  checkUrlStatus("https://empreguei.vercel.app", setEmpregueiStatus);
  checkUrlStatus("https://runinlinux.vercel.app", setRuninlinuxStatus);

  return (
    <AppDetails>
      <div className="header">
        <div className="navigation">
          <Navigation />
        </div>

        <video id="background-video" autoPlay loop muted preload="auto">
          <source src={VideoBackground} type="video/webm" />
        </video>
      </div>

      <div className="status">
        <h1>Nossos serviços</h1>

        <table>
          <tbody>
            <tr>
              <th>Nome do Projeto</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Essentials</td>
              {essentialsStatus ? (
                <td className="online">Online</td>
              ) : (
                <td className="offline">Offline</td>
              )}
            </tr>
            <tr>
              <td>Onigiri Hardcore</td>
              {onigiriStatus ? (
                <td className="online">Online</td>
              ) : (
                <td className="offline">Offline</td>
              )}
            </tr>
            <tr>
              <td>FindYourPet</td>
              {findyourpetStatus ? (
                <td className="online">Online</td>
              ) : (
                <td className="offline">Offline</td>
              )}
            </tr>
            <tr>
              <td>RunInLinux</td>
              {runinlinuxStatus ? (
                <td className="online">Online</td>
              ) : (
                <td className="offline">Offline</td>
              )}
            </tr>
            <tr>
              <td>Empreguei</td>
              {empregueiStatus ? (
                <td className="online">Online</td>
              ) : (
                <td className="offline">Offline</td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </AppDetails>
  );
}

export default App;
