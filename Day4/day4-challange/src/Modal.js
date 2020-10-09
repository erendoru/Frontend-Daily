import React from 'react'
import Button from './Button'
import './Modal.css'

function Modal({modalControl}) {
    return (
        <div className='popup'>
        <div className='modal' >
            <div className="close-icon">
                <span style={{fontSize:30, cursor:"pointer",color:'gray'}} onClick={modalControl}>
                    <i className='far fa-times-circle'></i>
                </span>
            </div>
            <div className="settings">
        <div className="title"><h2>Settings</h2></div>
        <div className="description"> <h5>Language</h5> <p>Let us know which language you're most comfortable using. You can change it back at any time.</p>
        <select name="" className='select'>
						<option value="">English</option>
						<option value="">Turkish</option>
						<option value="">Deutch</option>
					</select></div>
                    <div className="border"></div>
            </div>

            <div className="sections">
                <div className="section">
                    <div className="text">
                        <h5>Autoplay videos</h5>
                        <p>Choose if you want to autoplay on your browser</p>
                    </div>
                    <div className="checkbox-input">
                         <label htmlFor="" className="checkbox">
                             <input type="checkbox"/>
                             <span className="checkbox"></span>
                         </label>
                    </div>
            </div>                <div className="section">
                    <div className="text">
                        <h5>Autoplay videos</h5>
                        <p>Choose if you want to autoplay on your browser</p>
                    </div>
                    <div className="checkbox-input">
                         <label htmlFor="" className="checkbox">
                             <input type="checkbox"/>
                             <span className="checkbox"></span>
                         </label>
                    </div>
            </div>
        </div>
<div className="btns">
    <Button >
        Save
    </Button>
    <Button color='gray' borderSize='1px'>
        Cancel
    </Button>
</div>
    </div>
</div>
    )
}

export default Modal
