import AppDetails from "./components/AppDetails"
import Navigation from "./components/Navigation"
import Content from "./components/Content"

import VideoBackground from '../src/assets/home.webm'

function App() {

    return (
        <AppDetails>
            <div className="header">
                <video id="background-video" autoPlay loop muted preload='auto'>
                    <source src={VideoBackground} type="video/webm"/>
                </video>

                <div className="navigation">
                    <Navigation/>
                </div>

                <div className="title">
                    <div className="content-header">
                        <h2>Desenvolvemos soluções através da tecnologia</h2>
                        <h4>
                            Com nossos serviços e ideais
                            entregamos experiências e soluções digitais que 
                            evoluem e inspiram pessoas e comunidades
                        </h4>
                    </div>
                </div>

                <div className="socialmedia">
                    <a href="https://instagram.com/yagasaki.dev" target="_blank"><i className="uil uil-instagram"></i></a>
                    <a href="https://twitter.com/KalifyInc" target="_blank"><i className="uil uil-twitter"></i></a>
                    <a href="https://github.com/ApertureLaboratory" target="_blank"><i className="uil uil-github"></i></a>
                    <a href="https://discord.gg/nyTRNSV" target="_blank"><i className="uil uil-club"></i></a>
                </div>
            </div>

            <Content/>
            {/* <Projects/>
            <Culture/>
            <Carrer/>
            <Blog/> */}
        </AppDetails>
    )
}

export default App
