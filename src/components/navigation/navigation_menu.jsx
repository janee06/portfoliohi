import React from 'react';
import './navigation.css'
function NavigationMenu(title, pages) {
    return (
        <nav className={"navbar"}>
        <div className={"navigation"}>

        <ul className={"navlinks"}>


            <li><img className={"images"} src={"man.png"}/>
                <a href="#omne">O mně</a></li>
            <li><img className={"images"} src={"bag.png"}/> <a href="#portfolio">Portfolio</a></li>
            <li><img className={"images"} src={"phone.png"}/> <a href="#kontakt">Kontakt</a></li>
        </ul>
        </div>
</nav>
    );

}

export default NavigationMenu;