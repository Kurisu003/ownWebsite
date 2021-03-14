import React from 'react'
import '../../style/qualifications/qualificationsStyle.css'
import QPanelC from "../Assets/Qualifications/QPanelC";

function Qualifications() {


    let j = [{
        name: 'Java',

        logoName: 'JavaLogo.svg',

        buttonInfo: [
            ['Tachenrechner','https://github.com'],
            ['Paketdienst','https://github.com'],
            ['Tic-Tac-Toe mit KI','https://github.com'],
        ]
    }]

    let c = [{
        name: 'C',

        logoName: 'C.svg',

        buttonInfo: [
            ['Shell','https://github.com'],
            ['Tic-Tac-Toe','https://github.com'],
        ]
        
    }]

    let js = [{
        name: 'Javascript',

        logoName: 'C.svg',

        buttonInfo: [
            ['Fourier Series','https://github.com'],
        ]
        
    }]

    let array = [j, c, js]

    return(
        <div>
            
            {array.map(content => (
                content.map(item =>(
                    <QPanelC name={item.name} buttonInfo={item.buttonInfo} logoName={item.logoName}/>
                ))
            )) 
            }
            <br/>
            {/* <QTest2></QTest2> */}
        </div>
    )

}

export default Qualifications