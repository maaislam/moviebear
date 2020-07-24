import React from 'react'
import ReactDOM from 'react-dom'

export default function TrailerModal(props) {
    return (
        ReactDOM.createPortal(
            <div onClick = {props.closeModal} className = "ui dimmer modals visibile active" style={{position:'fixed' ,height:'100vh'}}>
            <div onClick = {(e)=>e.stopPropagation()} className="standard modal visible active">
                <div className="content"> 
                    {props.content}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
        )
    )
        
}
