import React from 'react'
import '../style/home/homeStyle.css'
import TopRoundPart from './TopRoundPart'

function Home(){
    return(
        <div className="parent">

            <TopRoundPart></TopRoundPart>

            <div className="titleParent">

                <p className="titleChild">
                    Informatik
                </p>

            </div>

        </div>
    )
}

export default Home