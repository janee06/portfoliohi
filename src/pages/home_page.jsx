
import React from 'react';
import NavigationMenu from "../components/navigation/navigation_menu";
import Skills from "../components/skills/skillset";
import './homepage.css'
import Carousel from "../components/carousel/carousel";
import Footer from "../footer/footer";

function Homepage(){
    return (


        <div className={"conteiner"}>

            <section id="navigation">

                {
                     <NavigationMenu/>
                }
            </section>

            <div className="con">
                <div className="column1">
                    NĚCO O MNĚ :)
                    <p>Jmenuji se Jana Bočková-vášnivá vývojářka webových aplikací a dobyvatelka digitálního světa!<br/> Když se posadím ke svému počítači, stává se ze mě neohrožená hrdinka, bojující s <br/>kódovými výzvami a odhazující chyby jak nepotřebné balast.
                        </p>

                 </div>
                <div className="column2">
                    <img className={"hihi"} src={"DADDY.jpg"}/>
                </div>
            </div>


            <section id="Dovednosti">

                {

                    <Skills/>
                }
            </section>

            <section id="section3">
                <h2>Obrázky bo to je jediné co mě uklidňuje :)</h2>

            </section>
            {<Carousel/>}
            <Footer/>

        </div>


    );
}
export default Homepage;


