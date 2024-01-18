import React from 'react';
import './navigation.css'
function NavigationMenu(title, pages) {
    return (
        <div className={"navigation"}>

        <ul>

            <li><img className={"images"} src={"man.png"}/>
                <a href="#section1">O mně</a></li>
            <li><img className={"images"} src={"bag.png"}/> <a href="#section2">Portfolio</a></li>
            <li><img className={"images"} src={"phone.png"}/> <a href="#section3">Kontakt</a></li>
        </ul>
        </div>
    );

}

export default NavigationMenu;