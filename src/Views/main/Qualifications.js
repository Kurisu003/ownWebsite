import React from 'react'
import '../../style/qualifications/qualificationsStyle.css'
import QPanel from "../Assets/Qualifications/QPanel";

function Qualifications() {


    let j = [{
        name: 'Java',

        logoName: 'JavaLogo.svg',

        buttonInfo: [
            ['Tachenrechner','https://github.com/Kurisu003/Calculator'],
            ['Paketdienst','https://github.com/package-delivery/package-delivery'],
            ['URL shortener','https://github.com/Kurisu003/Url-Shortener'],
            ['Giftcard creator','https://github.com/Kurisu003/Giftcard-Creator/tree/main/Java/SkytrakKarten2'],
            ['Hamming-Code','https://github.com/Kurisu003/Hamming-Code/tree/main/Java'],
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

        logoName: 'JSLogo.svg',

        buttonInfo: [
            ['Fourier-Series','https://github.com/Kurisu003/Fourier-Series-JS'],
            ['2-Line Hamming-Code','https://github.com/Kurisu003/Hamming-Code/tree/main/JS'],
            ['React js','https://github.com/Kurisu003/ownWebsite'],
        ]
        
    }]

    let asm = [{
        name: 'Assembly',

        logoName: 'AsmLogo.svg',

        buttonInfo: [
            ['XMas tree ASCII art','https://github.com/Kurisu003/XMas-Tree-Assembly-Ascii-Art'],
            ['Mod 2 calculator','https://github.com/Kurisu003/Mod-2-Assembly'],
            ['Calculator','https://github.com/Kurisu003/Postfix-Calculation-with-String'],
            ['Rectangle generator','https://github.com/Kurisu003/Rectangle-Assembly'],
        ]
    }]

    let py = [{
        name: 'Python',

        logoName: 'PythonLogo.svg',

        buttonInfo: [
            ['Visual Tic Tac Toe in TKinter','https://github.com/Kurisu003/XMas-Tree-Assembly-Ascii-Art'],
            ['Giftcard creator','https://github.com/Kurisu003/Giftcard-Creator/tree/main/Python'],
        ]
        
    }]

    let bat = [{
        name: 'Batch',

        logoName: 'BatLogo.svg',

        buttonInfo: [
            ['Matrix Simulator','https://github.com/Kurisu003/Matrix-bat'],
        ]
        
    }]

    let array = [js, j, c, py, bat, asm]

    return(
        <div className='tabContainer'>
            
            {array.map(content => (
                content.map(item =>(
                    <QPanel name={item.name} buttonInfo={item.buttonInfo} logoName={item.logoName}/>
                ))
            )) 
            }
            <br/>
        </div>
    )

}

export default Qualifications