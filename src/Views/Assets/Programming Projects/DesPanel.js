import React from 'react'
import '../../../style/panel/Panel.css'

function PanelL(props){

    return(
        <div className='DesProjPanelWrapper' style={{paddingTop: 50, paddingBottom: 50}}>
            <p className='DesProjPanelTitle'>{props.obj.title}</p>
            <div className='DesProjImgWrapper'>
                <img
                    alt=""
                    className="img"
                    style={{width: props.obj.width + 'px'}}
                    src={props.obj.imgSrc}
                    >
                </img>
                <div>
                    <p className='DesProjPanelText'>{props.obj.text}</p>
                    <div className='linkDiv'>
                        <a className='link' href={props.obj.href}>Mehr!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelL