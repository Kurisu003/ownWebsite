import React from 'react'
import '../../style/projects/projectsStyle.css'

import PanelL from '../Assets/Programming Projects/ProgPanelL'
import PanelR from '../Assets/Programming Projects/ProgPanelR'
import DesPanel from '../Assets/Programming Projects/DesPanel'

import DividerBottomColor1 from '../Assets/Programming Projects/Dividers/DividerBottomColor1'
import DividerTopColor1 from '../Assets/Programming Projects/Dividers/DividerTopColor1'
import DividerBottomColor2 from '../Assets/Programming Projects/Dividers/DividerBottomColor2'
import DividerTopColor2 from '../Assets/Programming Projects/Dividers/DividerTopColor2'

function Projects(){

    let tsp = {
        title: 'Traveling Salesman',
        imgSrc: 'https://cdn.discordapp.com/attachments/613625981219110914/814968350757224519/Paketdienst.png',
        text: [`Lösung zum TSP. Hier werden 
        mehrere, auf einem `, <strong> Backend Java-Server </strong>, `laufende, Algorithmen verwendet, 
        welche auf einer mit`, <strong> HTML, Bootstrap </strong>, ` und`, <strong> CSS </strong>, ` wundervoll 
        gestalteten Website mit`, <strong> Javascript </strong>, ` abgerufen werden.`],
        maxHeightMobile: '300',
        maxHeightPc: '500',
        href:'http://paketdienst.tk'
    }

    let giftGen = {
        title: 'Gutschein Generator',
        imgSrc: 'https://cdn.discordapp.com/attachments/814271639122477107/815514477528612914/TagesKarteVorlage.png',
        text: [`Ein Generator für Gutscheine mit `, <strong> QR-Code Generierung </strong>, ` und Bildüberlagerung. 2 
        Varianten, in `, <strong> Python </strong>, ` und in`, <strong> Java </strong>],
        maxHeightMobile: '400',
        maxHeightPc: '500',
        maxWidthMobile: '240',
        maxWidthPc: '300',
        href:'https://github.com/Kurisu003/Giftcard-Creator',
        idNum: '2'
    }

    let urlShort = {
        title: 'Url Shortener',
        imgSrc: 'https://cdn.discordapp.com/attachments/814271639122477107/815518284761530368/unknown.png',
        text: [`Url Shortener in `, <strong> Java </strong>, ` mit `, <strong> Hashmaps </strong>, ` und `, 
        <strong> 26<sup>4</sup> möglichen Urls </strong>],
        maxHeightMobile: '300',
        maxHeightPc: '500',
        href: 'https://github.com/Kurisu003/Url-Shortener',
    }

    let hammingCode = {
        title: 'Hamming Code',
        imgSrc: 'https://cdn.discordapp.com/attachments/814271639122477107/815518869367685130/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
        text: [`Code zur Ausbesserung von Bitflips. Lange Version in `, <strong> Java </strong>, ` 
        und kurze Version in `, <strong> Javascript </strong>],
        maxHeightMobile: '400',
        maxHeightPc: '500',
        maxWidthMobile: '400',
        maxWidthPc: '600',
        href:'https://github.com/Kurisu003/Hamming-Code',
        idNum: '4'        
    }

    let cal = {
        title: 'Kalender für die Südtiroler Spengler Innung',
        imgSrc: 'https://cdn.discordapp.com/attachments/613625981219110914/821283077841223710/Calendar_Front.jpg',
        text: 'Ein wundervoll gestalteter Kalender für die Südtiroler Spengler Innung',
        width: '500',
        href: 'https://imgur.com/a/AR5GuJb'

    }

    let tpLogo = {
        title: 'Redisigntes Logo für Trenkwlader & Partner',
        imgSrc: 'https://cdn.discordapp.com/attachments/613625981219110914/821315115529928774/Logo_mit_Schatten.png',
        text: 'Die Neugestaltung des alten Trenkwalder und Partner Logos. Modernisiert und minimalisiert!',
        width: '500',
        href: 'https://imgur.com/a/GMriUkW'
    }

    let myLogo = {
        title: 'Mein eigenes, selbst designtes Logo',
        imgSrc: 'https://cdn.discordapp.com/attachments/613625981219110914/821316487226064896/Husky_Logo_Final.png',
        text: 'Mein Eigenes, mit Photoshop und Illustrator, designtes modernes Husky Logo',
        width: '500',
        href: 'https://imgur.com/a/wSLdQPJ'
    }

    let spengLogo = {
        title: 'Upgedatetes und upgescaletes Spengler Innungs Logo',
        imgSrc: 'https://cdn.discordapp.com/attachments/613625981219110914/821318498504015922/Spengler_Logo.png',
        text: 'Das alte Logo der Südtiroler Spengler Innung upgedatetes und upgescaletes',
        width: '500',
        href: 'https://imgur.com/a/eoD0G0u'
    }

    let skytrekCard = {
        title: 'Skytrek Gutschein Karte',
        imgSrc: 'https://cdn.discordapp.com/attachments/613625981219110914/821380927279071232/FamilieKarteVorlage.png',
        text: 'Individuell gestaltete Gutscheine für den Skytrek Kletterpark Sterzing',
        width: '500',
        href: 'https://imgur.com/a/CYWiJTl'
    }

    let DesProj = [cal, tpLogo, myLogo, spengLogo, skytrekCard]

    return(
        <div className="parent">
            <DividerTopColor1 />

                <div className="ProjectTitle" id='ProgrammingProjects'>
                    Programmier-Projekte
                </div>

                <div style={{backgroundColor: '#97ddcd'}}>
                    
                    <PanelL obj={tsp}/>
                    <PanelR obj={giftGen}/>
                    <PanelL obj={urlShort}/>
                    <PanelR obj={hammingCode}/>
                
                </div>

            <DividerBottomColor1/>
            

            <DividerTopColor2 />

                <div className="ProjectTitle" id="DesignProjects">
                    Design-Projekte
                </div>

                <div style={{backgroundColor: '#AAD688'}}>
                    {DesProj.map((element) => {return(<DesPanel obj={element} />)})}
                </div>
                    
            <DividerBottomColor2/>
            

        </div>
    )
}

export default Projects