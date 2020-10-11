import React from 'react'
import './Button.css'
import Modal from './Modal'

function Button({ modal, openModal, children, color, borderSize }) {

    return (
        <>
            <div className="btn" onClick={openModal} style={{ borderColor: color, color: color, borderWidth: borderSize }}>
                {children}
            </div>
            {modal && <Modal modalControl={openModal} />}
        </>
    )
}

export default Button
